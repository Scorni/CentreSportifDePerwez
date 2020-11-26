import React, { Component } from 'react';
import { Mutation} from "react-apollo";
import StyledForm from "../list/Form"
import gql from "graphql-tag";
import {Calendar,momentLocalizer,Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import moment from 'moment';
import 'moment/locale/fr';
import { func } from 'prop-types';
import {    
    Button, Label,Input,Container,Col,Row} from 'reactstrap';
import Link from "next/link";
import {TextField,Select,MenuItem,InputLabel,FormControl   } from '@material-ui/core';
import { getDay } from 'date-fns';

/** TO DO IN DB
 *  Is_confirmed 
 *  Is_Payed3
 */
moment.locale("fr");
moment.updateLocale("fr", {
	week: {
		dow: 1,
		doy: 4,
	},
});

const DragAndDropCalendar = withDragAndDrop(Calendar)

const localizer = momentLocalizer(moment)

const propTypes = {}
/** Date format : Month wanted = number - 1
 * Y,M,D,H,M
 */
const messages = {
    next:"Suivant",
    previous:"Précédent",
    today:"Aujourd'hui",
    month: "Mois",
    week: "Semaine",
    work_week: "Semaine courante",
    day: "Jour",
}
const events = 
    [{
        id: 0,
        title: 'All Day Event very long title',
        allDay: false,
        start: new Date(2020, 3, 0),
        end: new Date(2020, 3, 1),
        type : "allDay"
      },
      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2020, 2, 13, 0, 0, 0),
        end: new Date(2020, 2, 20, 0, 0, 0),
        type: "default"
      },{
        id: 7,
        title: 'Lunch',
        start: new Date(2020, 2, 12, 12, 30, 0, 0),
        end: new Date(2020, 2, 12, 13, 30, 0, 0),
        desc: 'Power lunch',
        type: "default"
      }]
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
const title ="";
let allViews = Object.keys(Views).map(k => Views[k])

class CreateNewBooking extends Component {
    constructor(...args) {
        super(...args)
        
        this.state = { 
          events,
          newEvent:false,
          displayDragItemInCell: true, }

        this.moveEvent = this.moveEvent.bind(this)
        this.newEvent = this.newEvent.bind(this)
    }    
    handleSelect = ({ start, end }) => {
        this.setState({
            newEvent : true,
          });
        //const title = window.prompt('Effectuer une réservation')        

        if (title =="")
        this.setState({
            events: [
                ...this.state.events,
                {
                start,
                end,
                title : <Link href="#CalendarInput" className="CalendarInputLink" style={{color: "white"}}>Cliquez ici pour choisir les options</Link>,
                type : "default"
                },
            ],
            
        })
        console.log(this.state.events[this.state.events.length - 1].title)
    }
    updateValue = (e,inputType) => {
      console.log("updated value : " + e)
      if (this.state.newEvent === true){
        if(inputType === "title"){          

          this.state.events[this.state.events.length - 1].title = e
          if(e === ""){

            this.state.events[this.state.events.length - 1].title = "Veuillez choisir un titre de réservation"
          }

        }else if(inputType === "type"){

          this.state.events[this.state.events.length - 1].type = e

          if(typeof this.state.events[this.state.events.length - 1].title !== 'string'){

            this.state.events[this.state.events.length - 1].title = "Veuillez choisir un titre de réservation"

          }

        }else if(inputType === "start"){

          this.state.events[this.state.events.length - 1].start = e

        }

      }
    }
    
    handleDragStart = event => {
      this.setState({ draggedEvent: event })
    }

    dragFromOutsideItem = () => {
      return this.state.draggedEvent
    }

    onDropFromOutside = ({ start, end, allDay }) => {
      const { draggedEvent } = this.state
      
      const event = {
        id: draggedEvent.id,
        title: draggedEvent.title,
        start,
        end,
        allDay: allDay,
      }
      
      this.setState({ draggedEvent: null })
      this.moveEvent({ event, start, end })
    }

    moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
      const { events } = this.state

      let allDay = event.allDay

      if (!event.allDay && droppedOnAllDaySlot) {
        allDay = true
      } else if (event.allDay && !droppedOnAllDaySlot) {
        allDay = false
      }

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })
    alert(`Votre réservation a été ajusté du ${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()} au ${end.getDate() - 1 }/${end.getMonth() + 1}/${end.getFullYear()} compris`)

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

    resizeEvent = ({ event, start, end }) => {
      const { events } = this.state
      let type = "default"

      if((end.getDate() - start.getDate()) === 0 && (start.getTime() - end.getTime()) === 0 || (end.getDate() - start.getDate()) === 1){
        type = "allDay"
      }else if((end.getDate() - start.getDate()) > 1 || (start.getDate() - end.getDate()) > 1){
        if(event.type === "holidays"){
          type= "holidays"
        }else{
          type = "multipleDays"
        }
      }

      const nextEvents = events.map(existingEvent => {
        return existingEvent.id == event.id
          ? { ...existingEvent, start, end,type }
          : existingEvent
      })
      
      this.setState({
        events: nextEvents,
      })

      alert(`Votre réservation a été ajusté du ${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()} au ${end.getDate() - 1 }/${end.getMonth() + 1}/${end.getFullYear()} compris`)
    }

    newEvent(event) {
      let type = "default"
      if((event.end.getDate() - event.start.getDate()) === 0 && (event.start.getTime() - event.end.getTime()) === 0 || (event.end.getDate() - event.start.getDate()) === 1){
        type = "allDay"
      }else if(event.end.getDate() - event.start.getDate() > 1 || (event.start.getDate() - event.end.getDate()) > 1){
        type = "multipleDays"
      }
      let idList = this.state.events.map(a => a.id)
      let newId = Math.max(...idList) + 1
      let hour = {
        id: newId,
        title: <div className="BookingForm"><Link href="#CalendarInput">Cliquez ici pour les options!</Link></div>,
        allDay: event.slots.length == 1,
        start: event.start,
        end: event.end,
        type: type,
      }
      this.setState({
        events: this.state.events.concat([hour]),
        newEvent : true,
      })
    }
    /** trouver comment filtrer tout ce bourdel !  */
    deleteEvent(e){
      console.log(this.state.events)
      e = parseInt(e.slice(15));
      console.log(typeof e)
      //let test = this.setState(events.filter((e)=>(e.id !== event)))
      
      this.setState(prevState => ({
        events: prevState.events.filter(event => event.id !== e)
      }));
      //console.log(test)
      console.log(this.state.events)
    }
    render() {
        return (
            <>
                <DragAndDropCalendar
                selectable
                messages={messages}
                style={{minHeight : "60vh", margin : "3em"}}
                localizer={localizer}
                views={allViews}
                events={this.state.events}
                onEventDrop={this.moveEvent}
                resizableAccessor={() => true}
                onEventResize={this.resizeEvent}
                onSelectSlot={this.newEvent}
                onDragStart={console.log}
                popup={true}
                dragFromOutsideItem={
                  this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
                }
                onDropFromOutside={this.onDropFromOutside}
                handleDragStart={this.handleDragStart}
                startAccessor="start"
                endAccessor="end"  
                onSelectEvent={ event => Object.prototype.toString.call(event.title) === "[object String]" ? alert(event.title) : null }/** print title event */
                /*onSelectSlot={this.handleSelect}*/
                min={new Date(0, 10, 0, 8, 0, 0)}
                max={new Date(0, 10, 0, 23, 0, 0)} 
                eventPropGetter={
                    (event, start, end, isSelected) => {
                      let newStyle = {
                        backgroundColor: "green",
                        borderRadius: "0px",
                        border: "none"
                      };
                      
                      if (event.type == "default"){
                        newStyle.backgroundColor = "lightgreen"
                      }else if (event.type == "allday"){
                        newStyle.backgroundColor = "green"
                      }else if (event.type == "multipleDays"){
                        newStyle.backgroundColor = "red"
                      }else if (event.type == "holidays"){
                        newStyle.backgroundColor = "blue"
                      }
                
                      return {
                        className: "",
                        style: newStyle
                      };
                    }
                  }
                />
                {this.state.newEvent === true 
                ? <Container>
                  <Col>
                    <Row >
                      <TextField label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - 1].id} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"title")} placeholder="Titre" style={{margin:"0.5em"}}></TextField>
                      <FormControl style={{margin:"0.5em"}}>
                        <InputLabel htmlFor="CalendarSelect">Type</InputLabel>
                          {this.state.events[this.state.events.length - 1].type === "allDay" 
                          ? 
                          <Select labelId="CalendarSelect" className="CalendarInput"  id="CalendarSelect" onBlur={e => this.updateValue(e.target.value,"type")} placeholder="Type" defaultValue ={''}>
                            <MenuItem  value="allDay">Toute la journée</MenuItem>
                          </Select>
                          : null
                          }
                          {this.state.events[this.state.events.length - 1].type === "multipleDays" 
                          ?                         
                          <Select labelId="CalendarSelect" className="CalendarInput"  id="CalendarSelect" onBlur={e => this.updateValue(e.target.value,"type")} placeholder="Type" defaultValue ={''}>
                            <MenuItem  value="multipleDays">Plusieurs jours d'affilée</MenuItem>
                            <MenuItem  value="holidays">Vacances</MenuItem>
                          </Select>
                          : null
                          }
                          {this.state.events[this.state.events.length - 1].type === "holidays" 
                          ?                         
                          <Select labelId="CalendarSelect" className="CalendarInput"  id="CalendarSelect" onBlur={e => this.updateValue(e.target.value,"type")} placeholder="Type" defaultValue ={''}>
                            <MenuItem  value="multipleDays">Plusieurs jours d'affilée</MenuItem>
                            <MenuItem  value="holidays">Vacances</MenuItem>
                          </Select>
                          
                          : null
                          }
                          {this.state.events[this.state.events.length - 1].type === "default" 
                          ?                         
                          <Select labelId="CalendarSelect" className="CalendarInput"  id="CalendarSelect" onBlur={e => this.updateValue(e.target.value,"type")} placeholder="Type" defaultValue ={''}>
                            <MenuItem  value="default">Plage d'heures</MenuItem>
                          </Select>
                          : null
                          }
                        
                      </FormControl>
                      
                      <TextField label="Date de début" id="CalendarInput" className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start")} defaultValue= {this.state.events[this.state.events.length - 1].start || ''} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>

                      <TextField label="Date de fin" id="CalendarInput" className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"end")} defaultValue= {this.state.events[this.state.events.length - 1].end || ''} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                      <Button onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - 1].id).id) }>X</Button>
                    </Row>
                  </Col>
                </Container>
                : null
                }

            </>
            
        );
    }
}

export default CreateNewBooking;