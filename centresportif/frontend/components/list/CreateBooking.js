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

/** TO DO IN DB
 *  Is_confirmed 
 *  Is_Payed
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

        }else if(inputType === "type"){
          this.state.events[this.state.events.length - 1].type = e

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

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

    resizeEvent = ({ event, start, end }) => {
      const { events } = this.state

      const nextEvents = events.map(existingEvent => {
        return existingEvent.id == event.id
          ? { ...existingEvent, start, end }
          : existingEvent
      })

      this.setState({
        events: nextEvents,
      })

      //alert(`${event.title} was resized to ${start}-${end}`)
    }

    newEvent(event) {
      let idList = this.state.events.map(a => a.id)
      let newId = Math.max(...idList) + 1
      let hour = {
        id: newId,
        title: 'New Event',
        allDay: event.slots.length == 1,
        start: event.start,
        end: event.end,
      }
      this.setState({
        events: this.state.events.concat([hour]),
        newEvent : true,
      })
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
                onSelectEvent={event => alert(event.title)}/** print title event */
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
                    <Row>
                      <TextField label="Titre" id="CalendarInput" className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"title")} placeholder="Titre" style={{margin:"0.5em"}}></TextField>
                      <FormControl style={{margin:"0.5em"}}>
                        <InputLabel htmlFor="CalendarSelect">Type</InputLabel>
                        <Select labelId="CalendarSelect" className="CalendarInput"  id="CalendarSelect" onBlur={e => this.updateValue(e.target.value,"type")} placeholder="Type" defaultValue ={''}>
                          <MenuItem  value="default">Plage d'heures</MenuItem>
                          <MenuItem  value="allDay">Toute la journée</MenuItem>
                          <MenuItem  value="multipleDays">Plusieurs jours d'affilée</MenuItem>
                          <MenuItem  value="holidays">Vacances</MenuItem>
                        </Select>
                      </FormControl>
                      
                      <TextField label="Date de début" id="CalendarInput" className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start")} defaultValue= {this.state.events[this.state.events.length - 1].start || ''} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>

                      <TextField label="Date de fin" id="CalendarInput" className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"end")} defaultValue= {this.state.events[this.state.events.length - 1].end || ''} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
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