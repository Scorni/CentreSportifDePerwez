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
        type: "timeSlot"
      },{
        id: 7,
        title: 'Lunch',
        start: new Date(2020, 2, 12, 12, 30, 0, 0),
        end: new Date(2020, 2, 12, 13, 30, 0, 0),
        desc: 'Power lunch',
        type: "timeSlot"
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
        this.selectType = React.createRef();
        this.currentBookList = React.createRef();
        this.title = React.createRef();
        this.hebdomadaireDuration = React.createRef();
        this.state = { 
          events,
          newEvent:0,
          displayDragItemInCell: true, }

        this.moveEvent = this.moveEvent.bind(this)
        this.newEvent = this.newEvent.bind(this)
    }    
    handleSelect = ({ start, end }) => {
        this.setState({
            newEvent : this.newEvent + 1,
          });
        //const title = window.prompt('Effectuer une réservation')        
        if (title =="")
        this.setState({
          events: [
              ...this.state.events,
              {
              start,
              end,
              title : <Link href="#currentBookList" className="CalendarInputLink" style={{color: "white"}}>Cliquez ici pour choisir les options</Link>,
              type : "default"
              },
          ],
        })
    }
    updateValue = (e,inputType,id) => {
      if (this.state.newEvent > 0){
        if(inputType === "title"){          
          
          this.setState(prev => ({
            events: prev.events.map(events => events.id === id ? { ...events, title: e } : events)
          }))
          if(e === ""){
            this.setState(prev => ({
              events: prev.events.map(events => events.id === id ? { ...events, title: "Veuillez choisir un titre de réservation" } : events)
            }))
          }

        }else if(inputType === "type"){
          this.setState(prev => ({
            events: prev.events.map(events => events.id === id ? { ...events, type: e } : events)
          }))
          if(typeof this.state.events[this.state.events.length - 1].title !== 'string'){
            this.setState(prev => ({
              events: prev.events.map(events => events.id === id ? { ...events, title: "Veuillez choisir un titre de réservation" } : events)
            }))
          }
        }else if(inputType === "start"){
          
          this.setState(prev => ({
            events: prev.events.map(events => events.id === id ? { ...events, start: new Date(moment(e,'DD/MM/YYYY').format('MM/DD/YYYY')) } : events)
          }))

        }else if(inputType === "end"){
          
          this.setState(prev => ({
            events: prev.events.map(events => events.id === id ? { ...events, end: new Date(moment(e,'DD/MM/YYYY').format('MM/DD/YYYY')) } : events)
          }))

        }else if(inputType === "hebdomadaire"){
          console.log(this.state.events)
          this.setState(prev => ({
            events: prev.events.map(events => events.id === id ? { ...events, hebdomadaire: e } : events)
          }))
        }else if(inputType === "hebdomadaireDuration"){
          
          /*this.setState(prev => ({
            events: prev.events.map(events => events.id === id ? { ...events, hebdomadaireDuration: e} : events),
            
          }))*/
          for(let i =1 ;i < this.state.events.length;i++){
            if(this.state.events[this.state.events.length - i ].id === id){
              console.log("ca match")
            
              if(!this.state.events[this.state.events.length - i].isHebdoBooking){
                console.log("AYAYAAAA")
              
                if(this.state.events[this.state.events.length - i].hebdomadaire){
                  console.log("SASAGEYO")
                  
                  let tableHour = [];
                  for(let j =1; j < (e*4);j++){
                    var resultStart = new Date(this.state.events[this.state.events.length - i].start);
                    resultStart.setDate(resultStart.getDate() + 7 * j);
                    var resultEnd = new Date(this.state.events[this.state.events.length - i].end);
                    resultEnd.setDate(resultEnd.getDate() + 7 * j);
                    //this.state.events[this.state.events.length - 1].title
                    
                    //this.newEvent(hebdomadaireNewEvent)
                    
          
                    console.log(this.state.events)
                    let idList = this.state.events.map(a => a.id)
                    let newId = Math.max(...idList) + j
                    console.log(newId)
                    
                    let hour = {
                      id: newId,
                      title: "Réservation hedbo commencée le " + this.cleanDateOnScreen(this.state.events[this.state.events.length - i].start),
                      allDay: false,
                      start: resultStart,
                      end: resultEnd,
                      type: "timeSlotHebdo",
                      isHebdoBooking: this.state.events[this.state.events.length - i].id
                    }
                    tableHour.push(hour)
                    console.log(tableHour)
                    
                  }
                  this.setState({
                    events: [ ...this.state.events, ...tableHour ],
                    newEvent : this.state.newEvent + tableHour.length,
                  })
                }
              }
            }
          }
          
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
      let type = event.type
      console.log(start)
      console.log(event)
      if (!event.allDay && droppedOnAllDaySlot) {
        
        allDay = true
        type = "allDay"
        end.setHours(0,0,0,0);
        start.setHours(0,0,0,0);
      } else if (event.allDay && !droppedOnAllDaySlot) {
        allDay = false
        if(start.getHours() !== 0){
          type = "timeSlot"
        }
        
      }
    
      this.currentBookList.current.querySelector("#CalendarInputStart"+event.id).value = moment(start).format('DD/MM/YYYY')
      this.currentBookList.current.querySelector("#CalendarInputEnd"+event.id).value = moment(end).format('DD/MM/YYYY')

      this.setState(prev => ({
        events: prev.events.map(events => events.id === event.id ? { ...events, start: new Date(moment(start,'DD/MM/YYYY').format('MM/DD/YYYY')),end: new Date(moment(end,'DD/MM/YYYY').format('MM/DD/YYYY')),allDay : allDay,type :type } : events)
      }))
  }
  // TODO: Resize avec les jours fériés/non dispos  */
  
    resizeEvent = ({ event, start, end }) => {
      const { events } = this.state
      let type = "timeSlot"
      for(let i =0;i < this.state.events.length;i++){
        if(this.state.events[i].type === "close"){
          if(moment(start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)') || moment(end).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)')){
            alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date")
            return false

          }else if(moment(this.state.events[i].start).isSame(moment(start)) || moment(this.state.events[i].start).isSame(moment(end))){
            alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date")
            return false
          }else if(moment(this.state.events[i].start).isBetween(moment(start),moment(end),'days', '[)')){
            console.log('allo')
            alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date")
            return false
          }
        }
      }
      if((end.getDate() - start.getDate()) === 0 && (start.getTime() - end.getTime()) === 0 || (end.getDate() - start.getDate()) === 1){
        if(event.type !== "close"){
          type = "allDay"
        }else{
          type = "close"
        }
      }else if((end.getDate() - start.getDate()) > 1 || (start.getDate() - end.getDate()) > 1){
        if(event.type !== "close"){
          if(this.daysInMonth(start.getMonth()+1,start.getFullYear()) === start.getDate() && end.getDate() === 1){
            type = "allDay"
          }
          else if(event.type === "holidays"){
            type= "holidays"
            end.setHours(0,0,0,0);
            start.setHours(0,0,0,0);
          }else{
            type = "multipleDays"
            end.setHours(0,0,0,0);
            start.setHours(0,0,0,0);
          }
        }else{
          type = "close"
        }
      }

      this.currentBookList.current.querySelector("#CalendarInputStart"+event.id).value = moment(start).format('DD/MM/YYYY')
      this.currentBookList.current.querySelector("#CalendarInputEnd"+event.id).value = moment(end).format('DD/MM/YYYY')

      this.setState(prev => ({
        events: prev.events.map(events => events.id === event.id ? { ...events, start: new Date(moment(start,'DD/MM/YYYY').format('MM/DD/YYYY')),end: new Date(moment(end,'DD/MM/YYYY').format('MM/DD/YYYY')),type :type } : events)
      }))
      }

    daysInMonth (month, year) { 
      return new Date(year, month, 0).getDate(); 
    }

    cleanDateOnScreen(myDate){
    return moment(myDate).format('DD/MM/YYYY');
    }

    newEvent(event) {
      let type = "timeSlot"
      for(let i =0;i < this.state.events.length;i++){
        if(this.state.events[i].type === "close"){
          if(moment(event.start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)') || moment(event.end).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)')){
            alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date")
            return false

          }else if(moment(this.state.events[i].start).isSame(moment(event.start)) || moment(this.state.events[i].start).isSame(moment(event.end))){
            alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date")
            return false
          }else if(moment(this.state.events[i].start).isBetween(moment(event.start),moment(event.end),'days', '[]')){
            alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date")
            return false
          }
        }
      }
      if(event.start.getDate())
      if((event.end.getDate() - event.start.getDate()) === 0 && (event.start.getTime() - event.end.getTime()) === 0 || (event.end.getDate() - event.start.getDate()) === 1){
        type = "allDay"
      }else if(event.end.getDate() - event.start.getDate() > 1 || (event.start.getDate() - event.end.getDate()) > 1){
        if(this.daysInMonth(event.start.getMonth()+1,event.start.getFullYear()) === event.start.getDate() && event.end.getDate() === 1){
          type = "allDay"
        }
        else{
          type = "multipleDays"

        }
      }
      let idList = this.state.events.map(a => a.id)
      let newId = Math.max(...idList) + 1
      let hour = {
        id: newId,
        title: <div className="BookingForm"><Link href="#currentBookList">Cliquez ici pour les options!</Link></div>,
        allDay: event.slots.length == 1,
        start: event.start,
        end: event.end,
        type: type,
      }
      this.setState({
        events: this.state.events.concat([hour]),
        newEvent : this.state.newEvent + 1,
      })
    }
    deleteEvent(e,index,tab){

      if(this.state.newEvent <= 0){        
        return console.log("plus rien à supprimer")
      }else{
        let id = parseInt(e.id.slice(15));
        let count =0;
        this.setState(prevState => ({
            events: prevState.events.filter(event => event.id !== id),
            newEvent: this.state.newEvent - 1
          }),() => {
            this.forceUpdate()

            for(let i = 0; i < tab.length; i++){
              if(tab[i].props.children.props.children[1].props.children[0].props.children[0].props.id === e.id){
                for(let j =  0 ; j <= tab.length ; j ++){
                  if(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (j + 1)].id)){
                    let TextPrinted 
                    if(typeof(this.state.events[this.state.events.length - (j + 1)].title) !== "object"){                    
                      this.currentBookList.current.children[j].querySelector('#CalendarInputId'+this.state.events[this.state.events.length - (j + 1)].id).value = this.state.events[this.state.events.length - (j + 1)].title
                    }else{                      
                      this.currentBookList.current.children[j].querySelector('#CalendarInputId'+this.state.events[this.state.events.length - (j + 1)].id).value = ""
                    }

                    if(this.state.events[this.state.events.length - (j + 1)].start){                      
                      this.currentBookList.current.children[j].querySelector("#CalendarInputStart"+this.state.events[this.state.events.length - (j + 1)].id).value = moment(this.state.events[this.state.events.length - (j + 1)].start).format('DD/MM/YYYY')
                    }else{                     
                      this.currentBookList.current.children[j].querySelector("#CalendarInputStart"+this.state.events[this.state.events.length - (j + 1)].id).value = ""                   
                    }

                    if(this.state.events[this.state.events.length - (j + 1)].end){                      
                      this.currentBookList.current.children[j].querySelector("#CalendarInputEnd"+this.state.events[this.state.events.length - (j + 1)].id).value = moment(this.state.events[this.state.events.length - (j + 1)].end).format('DD/MM/YYYY')
                    }else{
                      this.currentBookList.current.children[j].querySelector("#CalendarInputEnd"+this.state.events[this.state.events.length - (j + 1)].id).value = ""
                    }

                    if(this.state.events[this.state.events.length - (j + 1)].type){
                      console.log(this.state.events[this.state.events.length - (j + 1)].type)
                      console.log(this.state.events[this.state.events.length - (j + 2)].type)
                      
                      console.log(this.currentBookList.current.children)

                      //this.state.events[this.state.events.length - (j + 1)].type =this.state.events[this.state.events.length - (j + 2)].type
                      console.log(this.currentBookList.current.children[j].querySelector('.MuiSelect-nativeInput').value)
                      console.log(this.state.events[this.state.events.length - (j + 1)].type )
                      this.currentBookList.current.children[j].querySelector('.MuiSelect-nativeInput').value = this.state.events[this.state.events.length - (j + 1)].type  
                      console.log(this.currentBookList.current.children[j].querySelector('.MuiSelect-nativeInput').value)
                    
                      if(this.state.events[this.state.events.length - (j + 1)].type === "holidays"){                        
                        TextPrinted = "Vacances"
                      }else if(this.state.events[this.state.events.length - (j + 1)].type === "multipleDays"){                        
                        TextPrinted = "Plusieurs jours d'affilée"
                      }else if(  this.state.events[this.state.events.length - (j + 1)].type === "allDay"){                       
                        TextPrinted = "Toute la journée"
                      }else if( this.state.events[this.state.events.length - (j + 1)].type === "timeSlot"){                        
                        TextPrinted = "Plage d'heures"
                      }else if( this.state.events[this.state.events.length - (j + 1)].type === "timeSlotHebdo"){
                        TextPrinted = "Plage d'heures"

                        console.log('jsuis paumé');
                      }
                      this.currentBookList.current.children[j].querySelector("#CalendarSelectType"+this.state.events[this.state.events.length - (j + 1)].id).innerText = TextPrinted
                      console.log(this.currentBookList.current.children[j].querySelector("#CalendarSelectType"+this.state.events[this.state.events.length - (j + 1)].id))
                    }else{                  
                      this.currentBookList.current.children[j].querySelector('.MuiSelect-nativeInput').defaultValue = ""
                    }                    
                  }
                }
              }
            }
          }
        );
      }
    }
    
    render() {
        let customOptions = []
        let test = []
        for (let index = 0; index < this.state.newEvent; index++) {
          if(this.state.events[this.state.events.length - (this.state.newEvent - index )].type === "allDay"){ 
            customOptions.unshift(
            <Container key= {"container" + index} id={"container" + index} style={{marginBottom:"2em"}}>
              <fieldset style={{padding:'4em'}} className="border p-2 border-dark rounded">
                <legend className="w-auto">Réservation n°{this.state.newEvent - index}</legend>
                <Col>
                    <Row>                      
                      <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} InputLabelProps={{ shrink: true }} ></TextField>
                      <FormControl style={{margin:"0.5em"}}>
                        <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id}  shrink>Type</InputLabel>
                        <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} onChange={e => this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} placeholder="Type" defaultValue ={""}>
                          <MenuItem  value="timeSlot" disabled>Plage d'heures</MenuItem>
                          <MenuItem  value="allDay">Toute la journée</MenuItem>
                          <MenuItem  value="multipleDays" disabled>Plusieurs jours d'affilée</MenuItem>
                          <MenuItem  value="holidays" disabled>Vacances</MenuItem>
                          <MenuItem  value="close" >Fermé</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                      <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                    </Row>
                    <Row>
                      <Button onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id),index,customOptions) }>X</Button>
                    </Row> 
                </Col>
              </fieldset>
            </Container>);          
          }
          else if(this.state.events[this.state.events.length - (this.state.newEvent - index )].type === "multipleDays"){
            customOptions.unshift(
            <Container key= {"container" + index} id={"container" + index} style={{marginBottom:"2em"}}>
              <fieldset style={{padding:'4em'}} className="border p-2 border-dark rounded">
                <legend className="w-auto">Réservation n°{this.state.newEvent - index}</legend>
                <Col>
                  <Row>
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length -  (this.state.newEvent - index )].id } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} shrink>Type</InputLabel>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} onChange={e =>this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} placeholder="Type" defaultValue ={""}>
                     
                        <MenuItem  value="timeSlot" disabled>Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays">Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays">Vacances</MenuItem>
                        <MenuItem  value="close">Fermé</MenuItem>

                      </Select>
                    </FormControl>
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                  </Row>  
                  <Row>
                    <Button onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id),index,customOptions) }>X</Button>
                  </Row>                
                </Col>
              </fieldset>
            </Container>);
          }
          else if(this.state.events[this.state.events.length - (this.state.newEvent - index )].type === "holidays" ){
            customOptions.unshift(
            <Container key= {"container" + index} id={"container" + index} style={{marginBottom:"2em"}}>
              <fieldset style={{padding:'4em'}} className="border p-2 border-dark rounded">
                <legend className="w-auto">Réservation n°{this.state.newEvent - index}</legend>
                <Col>
                  <Row>
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id}  shrink>Type</InputLabel>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} onChange={e =>this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} placeholder="Type" defaultValue ={""} >
                        
                        <MenuItem  value="timeSlot" disabled>Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays">Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays">Vacances</MenuItem>
                        <MenuItem  value="close" disabled>Fermé</MenuItem>

                      </Select>
                    </FormControl>
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                  </Row>
                  <Row>
                    <Button onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id),index,customOptions) }>X</Button>
                  </Row>
                </Col>
              </fieldset>
            </Container>);          
          }
          else if(this.state.events[this.state.events.length - (this.state.newEvent - index )].type === "timeSlot"){
            customOptions.unshift(
            <Container key= {"container" + index} id={"container" + index} style={{marginBottom:"2em"}}>
              <fieldset style={{padding:'4em'}} className="border p-2 border-dark rounded">
                <legend className="w-auto">Réservation n°{this.state.newEvent - index}</legend>
                <Col>
                  <Row> 
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id}  shrink>Type</InputLabel>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id}  placeholder="Type" defaultValue ={""}>
                        <MenuItem  value="timeSlot" >Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays" disabled>Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays" disabled>Vacances</MenuItem>
                        <MenuItem  value="close" disabled>Fermé</MenuItem>

                      </Select>
                    </FormControl>              
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>

                  </Row>
                  <Row>
                    <FormControl style={{margin:"0.5em"}}>
                      <InputLabel htmlFor="CalendarSelect">Réservation hebdomadaire ?</InputLabel>
                      <Select ref={this.inputField} labelId="CalendarSelect" className="CalendarInput"  id="CalendarSelect" onChange={e =>this.updateValue(e.target.value,"hebdomadaire",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} placeholder="hebdomadaire" defaultValue ={"No"}>
                        <MenuItem  value="Yes">Oui</MenuItem>
                        <MenuItem  value="No">Non</MenuItem>
                      </Select>
                    </FormControl>
                    {this.state.events[this.state.events.length - (this.state.newEvent - index )].hebdomadaire === "Yes" 
                    ? <FormControl style={{margin:"0.5em"}}>
                        <InputLabel htmlFor="CalendarSelectRange">Sur combien de temps ?</InputLabel>
                        <Select ref={this.hebdomadaireDuration} labelId="CalendarSelectRange" className="CalendarInput"  id="CalendarSelectRange" onChange={e =>this.updateValue(e.target.value,"hebdomadaireDuration",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} placeholder="1 mois" defaultValue ={""}>
                          <MenuItem  value="1">1 mois</MenuItem>
                          <MenuItem  value="2">2 mois</MenuItem>
                          <MenuItem  value="3">3 mois</MenuItem>
                          <MenuItem  value="4">4 mois</MenuItem>
                        </Select>
                      </FormControl>
                    : <p>c'est un No</p>}

                    <Button onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id),index,customOptions) }>X</Button>

                  </Row>

                </Col>
              </fieldset>
            </Container>);          
          }else if(this.state.events[this.state.events.length - (this.state.newEvent - index )].type === "timeSlotHebdo"){
            customOptions.unshift(
            <Container key= {"container" + index} id={"container" + index} style={{marginBottom:"2em"}}>
              <fieldset style={{padding:'4em'}} className="border p-2 border-dark rounded">
                <legend className="w-auto">Réservation n°{this.state.newEvent - index}</legend>
                <Col>
                  <Row> 
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id } className="CalendarInput" value= {this.state.events[this.state.events.length - (this.state.newEvent - index )].title || ""} placeholder="Titre" style={{margin:"0.5em"}}  InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id}  shrink>Type</InputLabel>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} placeholder="Type" defaultValue ={""}>
                        <MenuItem  value="timeSlot" >Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays" disabled>Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays" disabled>Vacances</MenuItem>
                        <MenuItem  value="close" disabled>Fermé</MenuItem>

                      </Select>
                    </FormControl>              
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}} ></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}} ></TextField>
                  </Row>
                  <Row>
                    
                    <Button onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id),index,customOptions) }>X</Button>

                  </Row>

                </Col>
              </fieldset>
            </Container>);          
          }else if(this.state.events[this.state.events.length - (this.state.newEvent - index )].type === "close"){
            customOptions.unshift(
            <Container key= {"container" + index} id={"container" + index} style={{marginBottom:"2em"}}>
              <fieldset style={{padding:'4em'}} className="border p-2 border-dark rounded">
                <legend className="w-auto">Réservation n°{this.state.newEvent - index}</legend>
                <Col>
                  <Row>
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length -  (this.state.newEvent - index )].id } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} shrink>Type</InputLabel>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} onChange={e =>this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} placeholder="Type" defaultValue ={""}>
                     
                        <MenuItem  value="timeSlot" disabled>Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays" disabled>Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays" disabled>Vacances</MenuItem>
                        <MenuItem  value="close">Fermé</MenuItem>

                      </Select>
                    </FormControl>
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].id)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                  </Row>  
                  <Row>
                    <Button onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].id),index,customOptions) }>X</Button>
                  </Row>                
                </Col>
              </fieldset>
            </Container>);
          }
        }
        return (
            <>
                <DragAndDropCalendar
                selectable
                messages={messages}
                style={{minHeight : "60vh", margin : "3em"}}
                localizer={localizer}
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
                      
                      if (event.type == "timeSlot"){
                        newStyle.backgroundColor = "lightgreen"
                      }else if (event.type == "allday"){
                        newStyle.backgroundColor = "green"
                      }else if (event.type == "multipleDays"){
                        newStyle.backgroundColor = "red"
                      }else if (event.type == "holidays"){
                        newStyle.backgroundColor = "blue"
                      }else if (event.type == "timeSlotHebdo"){
                        newStyle.backgroundColor = "greenyellow"
                      }else if (event.type == "close"){
                        newStyle.backgroundColor = "grey"
                      }
                      
                      return {
                        className: "",
                        style: newStyle
                      };
                    }
                  }
                />
                <div id="currentBookList" ref={this.currentBookList}>
                {customOptions}{test}

                </div>

            </>
            
        );
    }
}

export default CreateNewBooking;