import React, { Component } from 'react';
import { Query, Mutation,useMutation } from 'react-apollo';
import gql from "graphql-tag";
import {Calendar,momentLocalizer,Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import {BOOKINGS_QUERY} from '../list/Query';
import {CREATE_BOOKING_MUTATION} from '../list/Mutation'
import Error from '../common/ErrorMessage'
import { InMemoryCache, ApolloClient } from '@apollo/client';
import SweetAlert from 'react-bootstrap-sweetalert';
import moment, { defaultFormat } from 'moment';
import 'moment/locale/fr';
import { func } from 'prop-types';
import {    
    Button, Label,Input,Container,Col,Row, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import Link from "next/link";
import {TextField,Select,MenuItem,InputLabel,FormControl,Tooltip} from '@material-ui/core';
import { getDay } from 'date-fns';
import User from '../common/User';
import { FaTrashAlt } from 'react-icons/fa';
import {HeadGenerator} from '../sports/category/generator';

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
const rooms = [
  'ALL',
  'A1',
  'A2',
  'A3',
  'B1',
  'B2',
  'T1',
  'T2',
  'T3',
  'F1',
  'F2',
  'BV1',
  'BS1',
  'P1'
]
const types = {
    holidays : "Vacances",
    multipleDays : "Plusieurs jours d'affilées",
    allDay :"Toute la journée",
    timeSlot :"Plage d'heures",
    timeSlotHebdo :"Plage d'heures",
    close : "Fermé"
  
}

 const events = []


class CreateNewBooking extends Component {
    constructor(...args) {
        super(...args)
        this.selectType = React.createRef();
        this.selectRoom = React.createRef();
        this.currentBookList = React.createRef();
        this.title = React.createRef();
        this.hebdomadaireDuration = React.createRef();
        this.state = { 
          events,
          newEvent:0,
          displayDragItemInCell: true,
          tooltip: [
            {
              open : false,
              
            }
          ],
          tooltipRoom : [
            {
              open : false
            }
          ],
          succeededMessage:false,
          validatedEvents:true,
          modalOne: false,
          modalTwo: false,

        }
        this.moveEvent = this.moveEvent.bind(this)
        this.newEvent = this.newEvent.bind(this)
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this)       
    } 
    toggle() {          
      this.setState({
          modalOne: !this.state.modalOne
      });
    }
    toggle2() {
      this.setState({
          modalTwo: !this.state.modalTwo
      });           
    } 
    updateValue = (e,inputType,idBooking) => {
      let test;
      let regExp = /[a-zA-Z-!-\-@[-`{-~]/;
      if (this.state.newEvent > 0){
        if(inputType === "title"){   
          for(let i =0;i < this.state.events.length;i++){
            console.log(this.state.events[i].title)
            
            if(!this.state.events[i].room){
              test = true
            }else{
              test = false

            }
          }       
          
          this.setState(prev => ({
            events: prev.events.map(events => events.idBooking === idBooking ? { ...events, title: e } : events),
            validatedEvents : test
          }))
          if(e === ""){
            this.setState(prev => ({
              events: prev.events.map(events => events.idBooking === idBooking ? { ...events, title: "Veuillez choisir un titre de réservation" } : events)
            }))
          }
        }else if(inputType === "room"){
          for(let i =0;i < this.state.events.length;i++){
            for(let j =0;j < this.state.events.length;j++){
              if(this.state.events[i].idBooking === idBooking && this.state.events[i].idBooking !== this.state.events[j].idBooking)
              {
                if(e === this.state.events[j].room){
                  if(moment(this.state.events[j].start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'month', '[]')){
                    if(moment(this.state.events[j].start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)') || moment(this.state.events[j].end).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)')){
                      alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable pour la salle concernée")
                      this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).parentElement.querySelector('.MuiSelect-nativeInput').value  = this.state.events[j].room
                      this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).style.color = "red"
                      this.setState(prev => ({
                        tooltipRoom: prev.tooltipRoom.map(tooltipRoom => tooltipRoom.id === idBooking ? { ...tooltipRoom, open: true } : tooltipRoom)
                      }))
                      return false
          
                    }else if(moment(this.state.events[i].start).isSame(moment(this.state.events[j].start)) || moment(this.state.events[i].start).isSame(moment(this.state.events[j].end))){
                      alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable pour la salle concernée")
                      this.setState(prev => ({
                        tooltipRoom: prev.tooltipRoom.map(tooltipRoom => tooltipRoom.id === idBooking ? { ...tooltipRoom, open: true } : tooltipRoom)
                      }))
                      this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).style.color = "red"
                      this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).parentElement.querySelector('.MuiSelect-nativeInput').value  = this.state.events[j].room
                      return false
                    }else if(moment(this.state.events[i].start).isBetween(moment(this.state.events[j].start),moment(this.state.events[j].end),'days', '[]')){
                      alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable pour la salle concernée")
                      this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).style.color = "red"
                      this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).parentElement.querySelector('.MuiSelect-nativeInput').value  = this.state.events[j].room
                      this.setState(prev => ({
                        tooltipRoom: prev.tooltipRoom.map(tooltipRoom => tooltipRoom.id === idBooking ? { ...tooltipRoom, open: true } : tooltipRoom)
                      }))
                      return false
                    }
                  }
                  
                }
              }            
            }
          }
          for(let i =0;i < this.state.events.length;i++){
            console.log(this.state.events[i].title)
            
            if(!this.state.events[i].title || this.state.events[i].title === "Veuillez choisir un titre de réservation" || typeof this.state.events[i].title !== "string"){
              test = true
            }else{
              test = false

            }
          }
          this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).style.color = "black"
          this.setState(prev => ({
            events: prev.events.map(events => events.idBooking === idBooking ? { ...events, room: e } : events),
            tooltipRoom: prev.tooltipRoom.map(tooltipRoom => tooltipRoom.id === idBooking ? { ...tooltipRoom, open: false } : tooltipRoom),
            validatedEvents : test
          }))
        }
        else if(inputType === "type"){
          let TextPrinted;
          for(let i =0;i < this.state.events.length;i++){
            for(let j =0;j < this.state.events.length;j++){
              if(this.state.events[i].idBooking === idBooking && this.state.events[i].idBooking !== this.state.events[j].idBooking)
              {
                if(e === "close"){
                  if(!this.state.events[i].room){
                    alert("Veuillez choisir une/des salle(s) avant d'effectuer une fermeture")
                    this.setState(prev => ({
                      tooltipRoom: prev.tooltipRoom.map(tooltipRoom => tooltipRoom.id === idBooking ? { ...tooltipRoom, open: true } : tooltipRoom)
                    }))
                    return false
                  }
                  if(this.state.events[i].room === this.state.events[j].room || this.state.events[j].room === "All" || this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).parentElement.querySelector('.MuiSelect-nativeInput').value === this.state.events[j].room){
                    if(this.state.events[i].type === "holidays"){                        
                      TextPrinted = "Vacances"
                    }else if(this.state.events[i].type === "multipleDays"){                        
                      TextPrinted = "Plusieurs jours d'affilée"
                    }else if(  this.state.events[i].type === "allDay"){                       
                      TextPrinted = "Toute la journée"
                    }else if( this.state.events[i].type === "timeSlot"){                        
                      TextPrinted = "Plage d'heures"
                    }else if( this.state.events[i].type === "timeSlotHebdo"){
                      TextPrinted = "Plage d'heures"
                    }
                    if(moment(this.state.events[j].start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)') || moment(this.state.events[j].end).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)')){
                      alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable")
                      this.currentBookList.current.querySelector("#CalendarSelectType"+idBooking).parentElement.querySelector('.MuiSelect-nativeInput').value  = this.state.events[j].type
                      this.currentBookList.current.querySelector("#CalendarSelectType"+idBooking).style.color = "red"
                      this.setState(prev => ({
                        tooltip: prev.tooltip.map(tooltip => tooltip.id === idBooking ? { ...tooltip, open: true } : tooltip)
                      }))
                      return false
          
                    }else if(moment(this.state.events[i].start).isSame(moment(this.state.events[j].start)) || moment(this.state.events[i].start).isSame(moment(this.state.events[j].end))){
                      alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable")                    
                      this.setState(prev => ({
                        tooltip: prev.tooltip.map(tooltip => tooltip.id === idBooking ? { ...tooltip, open: true } : tooltip)
                      }))
                      this.currentBookList.current.querySelector("#CalendarSelectType"+idBooking).style.color = "red"
                      this.currentBookList.current.querySelector("#CalendarSelectType"+idBooking).parentElement.querySelector('.MuiSelect-nativeInput').value  = this.state.events[j].type
                      return false
                    }else if(moment(this.state.events[i].start).isBetween(moment(this.state.events[j].start),moment(this.state.events[j].end),'days', '[]')){
                      alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable")
                      this.currentBookList.current.querySelector("#CalendarSelectType"+idBooking).parentElement.querySelector('.MuiSelect-nativeInput').value  = this.state.events[j].type
                      this.setState(prev => ({
                        tooltip: prev.tooltip.map(tooltip => tooltip.id === idBooking ? { ...tooltip, open: true } : tooltip)
                      }))
                      this.currentBookList.current.querySelector("#CalendarSelectType"+idBooking).style.color = "red"

                      return false
                    }
                  }                  
                }else if(this.state.events[j].type === "close" && (this.currentBookList.current.querySelector("#CalendarSelectRoom"+idBooking).parentElement.querySelector('.MuiSelect-nativeInput').value === this.state.events[j].room)){
                  alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable")
                  this.setState(prev => ({
                    tooltip: prev.tooltip.map(tooltip => tooltip.id === idBooking ? { ...tooltip, open: true } : tooltip),
                    
                  }))
                  this.currentBookList.current.querySelector("#CalendarSelectType"+idBooking).style.color = "red"
                  return false
                }
              }            
            }
          }
          for(let i =0;i < this.state.events.length;i++){
            console.log(this.state.events[i].title)
            if(this.state.events[i].title === "Veuillez choisir un titre de réservation"){
              console.log('yii')
              }
            if(!this.state.events[i].room || !this.state.events[i].title || this.state.events[i].title === "Veuillez choisir un titre de réservation" || typeof this.state.events[i].title !== "string"){
              test = true
            }else{
              test = false

            }
          }
          this.currentBookList.current.querySelector("#CalendarSelectType"+idBooking).style.color = "black"
          this.setState(prev => ({
            events: prev.events.map(events => events.idBooking === idBooking ? { ...events, type: e } : events),
            tooltip: prev.tooltip.map(tooltip => tooltip.id === idBooking ? { ...tooltip, open: false } : tooltip),
          }))
          if(typeof this.state.events[this.state.events.length - 1].title !== 'string'){
            this.setState(prev => ({
              events: prev.events.map(events => events.idBooking === idBooking ? { ...events, title: "Veuillez choisir un titre de réservation" } : events)
            }))
          }
        }else if(inputType === "start"){
          
          for(let i =0;i < this.state.events.length;i++){
            for(let j =0;j < this.state.events.length;j++){
              
              if(this.state.events[i].idBooking === idBooking && this.state.events[i].idBooking !== this.state.events[j].idBooking){
                let defaultFormat = new Date(moment(e,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY HH:mm'))
                if(regExp.test(e)){
                  alert("La date rentrée n'est pas au bon format,veuillez entrer une date dans le format par défaut")
                  this.currentBookList.current.querySelector("#CalendarInputStart"+idBooking).value = moment(this.state.events[i].start).format('DD/MM/YYYY HH:mm')  
                  return false
                }else if(this.state.events[i].isHebdoBooking === idBooking || this.state.events[i].hebdomadaire){
                  alert("vous ne pouvez changer la date et l'heure d'une réservation hebdomadaire")
                  this.currentBookList.current.querySelector("#CalendarInputStart"+idBooking).value = moment(this.state.events[i].start).format('DD/MM/YYYY HH:mm')  
                  return false;
                }else if(!moment(e,'DD/MM/YYYY HH:mm').isValid()){
                  alert("La date rentrée n'est pas valide,veuillez entrer une date dans le format approprié")
                  this.currentBookList.current.querySelector("#CalendarInputStart"+idBooking).value = moment(this.state.events[i].start).format('DD/MM/YYYY HH:mm')  
                  return false;
                }
                if(this.state.events[i].type === 'close' || this.state.events[j].type === 'close'){
                  console.log(this.state.events[i].type)
                  if(moment(defaultFormat).isBetween(moment(this.state.events[j].start),moment(this.state.events[j].end),'days', '[]') || moment(defaultFormat - 1).isBetween(moment(this.state.events[j].start),moment(this.state.events[j].end),'days', '[]')){
                      alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable")
                      this.currentBookList.current.querySelector("#CalendarInputStart"+idBooking).value = moment(this.state.events[i].start).format('DD/MM/YYYY HH:mm')  
                      return false                    
                  }else if(moment(this.state.events[j].start).isSame(moment(defaultFormat - 1))){
                    alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date ")
                    this.currentBookList.current.querySelector("#CalendarInputStart"+idBooking).value = moment(this.state.events[i].start).format('DD/MM/YYYY HH:mm')  
                    return false
                  }
                }
              }            
            }
          }
          for(let i =0;i < this.state.events.length;i++){
            console.log(this.state.events[i].title)
            if(this.state.events[i].title === "Veuillez choisir un titre de réservation"){
              console.log('yii')
              }
            if(!this.state.events[i].room || !this.state.events[i].title || this.state.events[i].title === "Veuillez choisir un titre de réservation" || typeof this.state.events[i].title !== "string"){
              test = true
            }else{
              test = false

            }
          }
          this.setState(prev => ({
            events: prev.events.map(events => events.idBooking === idBooking ? { ...events, start: new Date(moment(e,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY HH:mm')) } : events),
            validatedEvents : test
          }))

        }else if(inputType === "end"){
          for(let i =0;i < this.state.events.length;i++){
            for(let j =0;j < this.state.events.length;j++){
              if(this.state.events[i].idBooking === idBooking && this.state.events[i].idBooking !== this.state.events[j].idBooking){
                let defaultFormat =new Date(moment(e,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY HH:mm'))
                if(regExp.test(e)){
                  alert("La date rentrée n'est pas au bon format,veuillez entrer une date dans le format par défaut")
                  this.currentBookList.current.querySelector("#CalendarInputEnd"+idBooking).value = moment(this.state.events[i].end).format('DD/MM/YYYY HH:mm')  
                  return false
                }else if(this.state.events[i].isHebdoBooking === idBooking || this.state.events[i].hebdomadaire){
                  alert("vous ne pouvez changer la date et l'heure d'une réservation hebdomadaire")
                  this.currentBookList.current.querySelector("#CalendarInputEnd"+idBooking).value = moment(this.state.events[i].end).format('DD/MM/YYYY HH:mm')  
                  return false;
                }else if(!moment(e,'DD/MM/YYYY HH:mm').isValid()){
                  alert("La date rentrée n'est pas valide,veuillez entrer une date dans le format approprié")
                  this.currentBookList.current.querySelector("#CalendarInputEnd"+idBooking).value = moment(this.state.events[i].end).format('DD/MM/YYYY HH:mm')  
                  return false;
                }
                if(this.state.events[i].type === 'close' || this.state.events[j].type === 'close'){
                  if(moment(defaultFormat).isBetween(moment(this.state.events[j].start),moment(this.state.events[j].end),'days', '[]') || moment(defaultFormat - 1).isBetween(moment(this.state.events[j].start),moment(this.state.events[j].end),'days', '[]')){
                      alert("vous ne pouvez pas ajouter un/des jour(s) de fermeture sur le(s) date(s) choisie(s) si une réservation existe au préalable")
                      this.currentBookList.current.querySelector("#CalendarInputEnd"+idBooking).value = moment(this.state.events[i].end).format('DD/MM/YYYY HH:mm')  
                      return false                    
                  }else if(moment(this.state.events[j].start).isSame(moment(defaultFormat - 1))){
                    alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date ")
                    this.currentBookList.current.querySelector("#CalendarInputEnd"+idBooking).value = moment(this.state.events[i].end).format('DD/MM/YYYY HH:mm')  
                    return false
                  }
                }
              }            
            }
          }
          for(let i =0;i < this.state.events.length;i++){
            console.log(this.state.events[i].title)
            if(this.state.events[i].title === "Veuillez choisir un titre de réservation"){
              console.log('yii')
              }
            if(!this.state.events[i].room || !this.state.events[i].title || this.state.events[i].title === "Veuillez choisir un titre de réservation" || typeof this.state.events[i].title !== "string"){
              test = true
            }else{
              test = false
            }
          }
          this.setState(prev => ({
            events: prev.events.map(events => events.idBooking === idBooking ? { ...events, end: new Date(moment(e,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY HH:mm')) } : events),
            validatedEvents : test
          }))

        }else if(inputType === "hebdomadaire"){
          for(let i =1 ;i < this.state.events.length;i++){
            if(this.state.events[this.state.events.length - i].isHebdoBooking === idBooking){
              alert("veuillez d'abord supprimer les réservations liées à celles-ci avant de changer le type de réservation");
              return false
            }
          }
          for(let i =0;i < this.state.events.length;i++){
            console.log(this.state.events[i].title)
            if(this.state.events[i].title === "Veuillez choisir un titre de réservation"){
              console.log('yii')
              }
            if(!this.state.events[i].room || !this.state.events[i].title || this.state.events[i].title === "Veuillez choisir un titre de réservation" || typeof this.state.events[i].title !== "string"){
              test = true
            }else{
              test = false
            }
          }
          this.setState(prev => ({
            events: prev.events.map(events => events.idBooking === idBooking ? { ...events, hebdomadaire: e } : events),
            validatedEvents : test
          }))
        }else if(inputType === "hebdomadaireDuration"){
          for(let i =1 ;i < this.state.events.length;i++){
            if(this.state.events[this.state.events.length - i].isHebdoBooking === idBooking){
              alert('Plusieurs réservations hebdomadaires ont été détectées pour cette date : ' + this.cleanDateOnScreen(this.state.events[this.state.events.length - i].start) + '. Veuillez les supprimer si vous souhaitez en effectuer une nouvelle ')
              return false
            }
            else if(this.state.events[this.state.events.length - i].isHebdoBooking !== idBooking){
              console.log(this.state.events[this.state.events.length - i].idBooking +" z " + idBooking)
              if(this.state.events[this.state.events.length - i ].idBooking === idBooking){            
                if(!this.state.events[this.state.events.length - i].isHebdoBooking){    
                    if(this.state.events[this.state.events.length - i].hebdomadaire){                  
                      let tableHour = [];
                      for(let j =1; j < (e*4);j++){
                        var resultStart = new Date(this.state.events[this.state.events.length - i].start);
                        resultStart.setDate(resultStart.getDate() + 7 * j);
                        var resultEnd = new Date(this.state.events[this.state.events.length - i].end);
                        resultEnd.setDate(resultEnd.getDate() + 7 * j);
                        let idList = this.state.events.map(a => a.idBooking)
                        let newId = Math.max(...idList) + j
                        console.log(newId)
                        
                        let hour = {
                          idBooking: newId,
                          title: "Réservation hedbo commencée le " + this.cleanDateOnScreen(this.state.events[this.state.events.length - i].start),
                          room: this.state.events[this.state.events.length - i].room,
                          allDay: false,
                          start: resultStart,
                          end: resultEnd,
                          type: "timeSlotHebdo",
                          isHebdoBooking: this.state.events[this.state.events.length - i].id
                        }
                        let tooltips = {
                          id : newId,
                          open : false
                        }
                        let tooltipsRoom = {
                          id : newId,
                          open : false
                        }
                        tableHour.push(hour)
                        for(let i =0;i < this.state.events.length;i++){
                          console.log(this.state.events[i].title)
                          if(this.state.events[i].title === "Veuillez choisir un titre de réservation"){
                          console.log('yii')
                          }

                          if(!this.state.events[i].room || !this.state.events[i].title || this.state.events[i].title === "Veuillez choisir un titre de réservation" || typeof this.state.events[i].title !== "string"){
                            test = true
                          }else{
                            test = false
                          }
                        }
                        this.setState({
                          events: [ ...this.state.events, ...tableHour ],
                          newEvent : this.state.newEvent + tableHour.length,   
                          tooltip: this.state.tooltip.concat([tooltips]),
                          tooltipRoom: this.state.tooltipRoom.concat([tooltipsRoom]),
                          validatedEvents : test
                        })
                      }                      
                    }
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
        idBooking: draggedEvent.idBooking,
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
      for(let i =0;i < this.state.events.length;i++){
        if(this.state.events[i].idBooking !== event.idBooking){

          if(this.state.events[i].type === "close"){
            
              if(moment(start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)') || moment(end - 1).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)')){
                alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date ")
                return false

              }else if(moment(this.state.events[i].start).isSame(moment(start)) || moment(this.state.events[i].start).isSame(moment(end - 1))){
                alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date ")
                return false
              }else if(moment(this.state.events[i].start).isBetween(moment(start),moment(end),'days', '[)')){
                alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date ")
                return false
              }
          }else if (event.type === 'close'){
            if(moment(start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)') || moment(end - 1).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)')){
              alert("Une réservation existe pour ce(s) jour(s),veuillez l'annuler avant d'organiser des jours de fermeture ")
              return false

            }else if(moment(this.state.events[i].start).isSame(moment(start)) || moment(this.state.events[i].start).isSame(moment(end - 1))){
              alert("Une réservation existe pour ce(s) jour(s),veuillez l'annuler avant d'organiser des jours de fermeture")
              return false
            }else if(moment(this.state.events[i].start).isBetween(moment(start),moment(end),'days', '[)')){
              alert("Une réservation existe pour ce(s) jour(s),veuillez l'annuler avant d'organiser des jours de fermeture")
              return false
            }
          }
        }else if(this.state.events[i].unchanging){
          alert("Hey bg,tu peux pas changer des réservations déjà effectuées,retourne te ronger les ongles 🏊‍♀️")
          return false
        }else if (moment(start).isBefore(new Date) || moment(end).isBefore(new Date)){
          alert("Vous ne pouvez effectuer de réservation dans le passé !")
          return false
        }
      }
      if(event.hebdomadaire === "Yes"){
        alert("Vous ne pouvez pas changer l'heure d'une réservation hebdomadaire")
        return false
      }
      if(event.type === 'timeSlotHebdo'){
        alert("Vous ne pouvez pas changer l'heure d'une réservation hebdomadaire")
        return false
      }
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
      this.currentBookList.current.querySelector("#CalendarInputStart"+event.idBooking).value = this.cleanDateOnScreen(start)
      this.currentBookList.current.querySelector("#CalendarInputEnd"+event.idBooking).value = this.cleanDateOnScreen(end)
      this.setState(prev => ({
        events: prev.events.map(events => events.idBooking === event.idBooking ? { ...events, start: new Date(moment(start,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY HH:mm')),end: new Date(moment(end,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY HH:mm')),type :type,allDay:allDay } : events)
      }))
  }
  
    resizeEvent = ({ event, start, end }) => {
      const { events } = this.state
      let type = "timeSlot"
      
      for(let i =0;i < this.state.events.length;i++){
        if(this.state.events[i].idBooking !== event.idBooking){
          if(this.state.events[i].type === "close" && event.type !== "close"){
            if(moment(start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)') || moment(end - 1).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)')){
              alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date ")
              return false

            }else if(moment(this.state.events[i].start).isSame(moment(start)) || moment(this.state.events[i].start).isSame(moment(end - 1))){
              alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date ")
              return false
            }else if(moment(this.state.events[i].start).isBetween(moment(start),moment(end),'days', '[)')){
              alert("vous ne pouvez pas réserver ce jour-ci,le centre est fermé,veuillez choisir une autre date ")
              return false
            }
          }else if (event.type === 'close'){
            if(moment(start).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)') || moment(end - 1).isBetween(moment(this.state.events[i].start),moment(this.state.events[i].end),'days', '[)')){
              alert("Une réservation existe pour ce(s) jour(s),veuillez l'annuler avant d'organiser des jours de fermeture ")
              return false

            }else if(moment(this.state.events[i].start).isSame(moment(start)) || moment(this.state.events[i].start).isSame(moment(end - 1))){
              alert("Une réservation existe pour ce(s) jour(s),veuillez l'annuler avant d'organiser des jours de fermeture")
              return false
            }else if(moment(this.state.events[i].start).isBetween(moment(start),moment(end),'days', '[)')){
              alert("Une réservation existe pour ce(s) jour(s),veuillez l'annuler avant d'organiser des jours de fermeture")
              return false
            }
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
      this.currentBookList.current.querySelector("#CalendarInputStart"+event.idBooking).value = this.cleanDateOnScreen(start)
      this.currentBookList.current.querySelector("#CalendarInputEnd"+event.idBooking).value = this.cleanDateOnScreen(end)
      this.setState(prev => ({
        events: prev.events.map(events => events.idBooking === event.idBooking ? { ...events, start: new Date(moment(start,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY HH:mm')),end: new Date(moment(end,'DD/MM/YYYY HH:mm').format('MM/DD/YYYY HH:mm')),type :type } : events)
      }))
      }

    daysInMonth (month, year) { 
      return new Date(year, month, 0).getDate(); 
    }

    cleanDateOnScreen(myDate){
    return moment(myDate).format('DD/MM/YYYY HH:mm');
    }

    newEvent(event) {
      this.setState({
        validatedEvents: true
      })
      let type = "timeSlot"
      if(moment(event.start).isBefore(new Date) || moment(event.end).isBefore(new Date)){
        alert('Vous ne pouvez effectuer de réservations dans le passé !');
        return false;
      }
      for(let i =0;i < this.state.events.length;i++){
        if(this.state.events[i].type === "close"){
          if(this.state.events[i].room === "All"){
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
      }
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
      let idList = this.state.events.map(a => a.idBooking)
      let newId = Math.max(...idList) + 1
      let hour = {
        idBooking: newId,
        title: <div className="BookingForm"><Link href="#currentBookList">Cliquez ici pour les options!</Link></div>,
        allDay: event.slots.length == 1,
        start: event.start,
        end: event.end,
        type: type,
        is_paid: false,
        DDSizeable : true
      }
      let tooltips = {
        id : newId,
        open : false
      }
      let tooltipsRoom = {
        id : newId,
        open : false
      }
      this.setState({
        events: this.state.events.concat([hour]),
        newEvent : this.state.newEvent + 1,
        tooltip: this.state.tooltip.concat([tooltips]),
        tooltipRoom: this.state.tooltipRoom.concat([tooltipsRoom])
      })
    }
    deleteEvent(e,index,tab){
      if(this.state.newEvent <= 0){        
        return console.log("plus rien à supprimer")
      }else{
        let idBooking = parseInt(e.id.slice(15));
        let count =0;
        
        this.setState(prevState => ({
            events: prevState.events.filter(event => event.idBooking !== idBooking),
            tooltipRoom: prevState.tooltipRoom.map(tooltipRoom => tooltipRoom.id === idBooking ? { ...tooltipRoom, open: false } : tooltipRoom),
            tooltip: prevState.tooltip.map(tooltip => tooltip.id === idBooking ? { ...tooltip, open: false } : tooltip),

            newEvent: this.state.newEvent - 1
          }),() => {
            this.forceUpdate()
            for(let i = 0; i < tab.length; i++){
              if(tab[i].props.children.props.children[1].props.children[0].props.children[0].props.id === e.idBooking){
                for(let j =  0 ; j <= tab.length ; j ++){
                  if(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (j + 1)].idBooking)){
                    let TextPrinted 
                    if(typeof(this.state.events[this.state.events.length - (j + 1)].title) !== "object"){                    
                      this.currentBookList.current.children[j].querySelector('#CalendarInputId'+this.state.events[this.state.events.length - (j + 1)].idBooking).value = this.state.events[this.state.events.length - (j + 1)].title
                    }else{                      
                      this.currentBookList.current.children[j].querySelector('#CalendarInputId'+this.state.events[this.state.events.length - (j + 1)].idBooking).value = ""
                    }

                    if(this.state.events[this.state.events.length - (j + 1)].start){                      
                      this.currentBookList.current.children[j].querySelector("#CalendarInputStart"+this.state.events[this.state.events.length - (j + 1)].idBooking).value = moment(this.state.events[this.state.events.length - (j + 1)].start).format('DD/MM/YYYY HH:mm')
                    }else{                     
                      this.currentBookList.current.children[j].querySelector("#CalendarInputStart"+this.state.events[this.state.events.length - (j + 1)].idBooking).value = ""                   
                    }

                    if(this.state.events[this.state.events.length - (j + 1)].end){                      
                      this.currentBookList.current.children[j].querySelector("#CalendarInputEnd"+this.state.events[this.state.events.length - (j + 1)].idBooking).value = moment(this.state.events[this.state.events.length - (j + 1)].end).format('DD/MM/YYYY HH:mm')
                    }else{
                      this.currentBookList.current.children[j].querySelector("#CalendarInputEnd"+this.state.events[this.state.events.length - (j + 1)].idBooking).value = ""
                    }
                    if(this.state.events[this.state.events.length - (j + 1)].room){
                      this.currentBookList.current.children[j].querySelector('.MuiSelect-nativeInput').value = this.state.events[this.state.events.length - (j + 1)].room   
                      for(let r = 0; r<  rooms.length; r++){
                        if(this.state.events[this.state.events.length - (j + 1)].room === rooms[r]){
                          TextPrinted = rooms[r]
                        }
                      }
                      this.currentBookList.current.children[j].querySelector("#CalendarSelectRoom"+this.state.events[this.state.events.length - (j + 1)].id).innerText = TextPrinted
                    }else{                  
                      this.currentBookList.current.children[j].querySelector('.MuiSelect-nativeInput').defaultValue = ""
                    } 
                    if(this.state.events[this.state.events.length - (j + 1)].type && (this.currentBookList.current.children[j].querySelector("#CalendarSelectTypeForm"+this.state.events[this.state.events.length - (j + 1)].id).querySelector('.MuiSelect-nativeInput').value)){
                      this.currentBookList.current.children[j].querySelector('.MuiSelect-nativeInput').value = this.state.events[this.state.events.length - (j + 1)].type   
                      for(const key in types){
                        if(this.state.events[this.state.events.length - (j + 1)].type === key){
                          TextPrinted = types[key]
                        }
                      }
                      this.currentBookList.current.children[j].querySelector("#CalendarSelectType"+this.state.events[this.state.events.length - (j + 1)].id).innerText = TextPrinted
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
                      <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} InputLabelProps={{ shrink: true }} ></TextField>
                      <FormControl id={"CalendarSelectRoomForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  style={{margin:"0.5em"}}>
                        <InputLabel htmlFor={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Salle/Terrain</InputLabel>
                        <Tooltip title="Veuillez choisir une autre salle" open={this.state.tooltipRoom[this.state.tooltipRoom.length - (this.state.newEvent - index )].open} id={"TooltipRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}>                       
                        <Select ref={this.selectRoom} labelId={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e => this.updateValue(e.target.value,"room",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Room" defaultValue ={""}>
                          <MenuItem  value="All">Ensemble du complexe</MenuItem>
                          <MenuItem  value="A1">A1</MenuItem>
                          <MenuItem  value="A2">A2</MenuItem>
                          <MenuItem  value="A3">A3</MenuItem>
                          <MenuItem  value="B1">B1</MenuItem>
                          <MenuItem  value="B2">B2</MenuItem>
                          <MenuItem  value="T1">T1</MenuItem>
                          <MenuItem  value="T2">T2</MenuItem>
                          <MenuItem  value="T3">T3</MenuItem>
                          <MenuItem  value="F1">F1</MenuItem>
                          <MenuItem  value="F2">F2</MenuItem>
                          <MenuItem  value="BV1">BV1</MenuItem>
                          <MenuItem  value="BS1">BS1</MenuItem>
                          <MenuItem  value="P1">P1</MenuItem>
                        </Select>
                        </Tooltip>
                      </FormControl>
                      <FormControl id={"CalendarSelectTypeForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} style={{margin:"0.5em"}}>
                        <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Type</InputLabel>
                        <Tooltip title="Veuillez changer le type de réservation" open={this.state.tooltip[this.state.tooltip.length - (this.state.newEvent - index )].open} id={"Tooltip"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}>                       
                        <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e => this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Type" defaultValue ={""}>
                          <MenuItem  value="timeSlot" disabled>Plage d'heures</MenuItem>
                          <MenuItem  value="allDay">Toute la journée</MenuItem>
                          <MenuItem  value="multipleDays" disabled>Plusieurs jours d'affilée</MenuItem>
                          <MenuItem  value="holidays" disabled>Vacances</MenuItem>
                          <MenuItem  value="close" >Fermé</MenuItem>
                        </Select>
                        </Tooltip>
                      </FormControl>
                      </Row>
                    <Row>
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                      <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                      <Tooltip title="Annuler la réservation" placement="top">
                        <Button className="deleteBookingButton" onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking),index,customOptions) }><FaTrashAlt></FaTrashAlt></Button>
                      </Tooltip>
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
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length -  (this.state.newEvent - index )].idBooking } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl id={"CalendarSelectRoomForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Salle/Terrain</InputLabel>
                      <Tooltip title="Veuillez choisir une autre salle" open={this.state.tooltipRoom[this.state.tooltipRoom.length - (this.state.newEvent - index )].open} id={"TooltipRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}>                       
                        <Select ref={this.selectRoom} labelId={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e => this.updateValue(e.target.value,"room",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Room" defaultValue ={""}>
                          <MenuItem  value="All">Ensemble du complexe</MenuItem>
                          <MenuItem  value="A1">A1</MenuItem>
                          <MenuItem  value="A2">A2</MenuItem>
                          <MenuItem  value="A3">A3</MenuItem>
                          <MenuItem  value="B1">B1</MenuItem>
                          <MenuItem  value="B2">B2</MenuItem>
                          <MenuItem  value="T1">T1</MenuItem>
                          <MenuItem  value="T2">T2</MenuItem>
                          <MenuItem  value="T3">T3</MenuItem>
                          <MenuItem  value="F1">F1</MenuItem>
                          <MenuItem  value="F2">F2</MenuItem>
                          <MenuItem  value="BV1">BV1</MenuItem>
                          <MenuItem  value="BS1">BS1</MenuItem>
                          <MenuItem  value="P1">P1</MenuItem>
                        </Select>
                        </Tooltip>
                    </FormControl>
                    <FormControl id={"CalendarSelectTypeForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} shrink>Type</InputLabel>
                      <Tooltip title="Veuillez changer le type de réservation" open={this.state.tooltip[this.state.tooltip.length - (this.state.newEvent - index )].open} id={"Tooltip"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e =>this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Type" defaultValue ={""}>
                        <MenuItem  value="timeSlot" disabled>Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays">Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays">Vacances</MenuItem>
                        <MenuItem  value="close">Fermé</MenuItem>
                      </Select>
                      </Tooltip>
                    </FormControl>
                    </Row>  
                  <Row>
                  <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                    <Tooltip title="Annuler la réservation" placement="top">
                      <Button className="deleteBookingButton" onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking),index,customOptions) }><FaTrashAlt></FaTrashAlt></Button>
                    </Tooltip>
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
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl id={"CalendarSelectRoomForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Salle/Terrain</InputLabel>
                      <Tooltip title="Veuillez choisir une autre salle" open={this.state.tooltipRoom[this.state.tooltipRoom.length - (this.state.newEvent - index )].open} id={"TooltipRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}>                       
                        <Select ref={this.selectRoom} labelId={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e => this.updateValue(e.target.value,"room",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Room" defaultValue ={""}>
                          <MenuItem  value="All">Ensemble du complexe</MenuItem>
                          <MenuItem  value="A1">A1</MenuItem>
                          <MenuItem  value="A2">A2</MenuItem>
                          <MenuItem  value="A3">A3</MenuItem>
                          <MenuItem  value="B1">B1</MenuItem>
                          <MenuItem  value="B2">B2</MenuItem>
                          <MenuItem  value="T1">T1</MenuItem>
                          <MenuItem  value="T2">T2</MenuItem>
                          <MenuItem  value="T3">T3</MenuItem>
                          <MenuItem  value="F1">F1</MenuItem>
                          <MenuItem  value="F2">F2</MenuItem>
                          <MenuItem  value="BV1">BV1</MenuItem>
                          <MenuItem  value="BS1">BS1</MenuItem>
                          <MenuItem  value="P1">P1</MenuItem>
                        </Select>
                        </Tooltip>
                    </FormControl>
                    <FormControl id={"CalendarSelectTypeForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Type</InputLabel>
                      <Tooltip title="Veuillez changer le type de réservation" open={this.state.tooltip[this.state.tooltip.length - (this.state.newEvent - index )].open} id={"Tooltip"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e =>this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Type" defaultValue ={""} >
                        <MenuItem  value="timeSlot" disabled>Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays">Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays">Vacances</MenuItem>
                        <MenuItem  value="close">Fermé</MenuItem>
                      </Select>
                      </Tooltip>
                    </FormControl>
                    </Row>
                  <Row>
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                    <Tooltip title="Annuler la réservation" placement="top">
                      <Button className="deleteBookingButton" onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking),index,customOptions) }><FaTrashAlt></FaTrashAlt></Button>
                    </Tooltip>
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
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl id={"CalendarSelectRoomForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Salle/Terrain</InputLabel>                      
                        <Select ref={this.selectRoom} labelId={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e => this.updateValue(e.target.value,"room",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Room" defaultValue ={""}>
                          <MenuItem  value="All">Ensemble du complexe</MenuItem>
                          <MenuItem  value="A1">A1</MenuItem>
                          <MenuItem  value="A2">A2</MenuItem>
                          <MenuItem  value="A3">A3</MenuItem>
                          <MenuItem  value="B1">B1</MenuItem>
                          <MenuItem  value="B2">B2</MenuItem>
                          <MenuItem  value="T1">T1</MenuItem>
                          <MenuItem  value="T2">T2</MenuItem>
                          <MenuItem  value="T3">T3</MenuItem>
                          <MenuItem  value="F1">F1</MenuItem>
                          <MenuItem  value="F2">F2</MenuItem>
                          <MenuItem  value="BV1">BV1</MenuItem>
                          <MenuItem  value="BS1">BS1</MenuItem>
                          <MenuItem  value="P1">P1</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl id={"CalendarSelectTypeForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Type</InputLabel>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e =>this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)}  placeholder="Type" defaultValue ={""}>
                        <MenuItem  value="timeSlot" >Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays" disabled>Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays" disabled>Vacances</MenuItem>
                        <MenuItem  value="close">Fermé</MenuItem>
                      </Select>
                    </FormControl>              
                  </Row>
                  <Row>
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>
                    <FormControl id={"CalendarSelectRoomForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  style={{margin:"0.5em"}}>
                      <InputLabel htmlFor="CalendarSelect">Réservation hebdomadaire ?</InputLabel>
                      <Select ref={this.inputField} labelId={"CalendarSelect"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelect"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e =>this.updateValue(e.target.value,"hebdomadaire",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="hebdomadaire" defaultValue ={"No"} disabled={!this.state.events[this.state.events.length - (this.state.newEvent - index )].room}>
                        <MenuItem  value="Yes">Oui</MenuItem>
                        <MenuItem  value="No">Non</MenuItem>
                      </Select>
                    </FormControl>
                    {this.state.events[this.state.events.length - (this.state.newEvent - index )].hebdomadaire === "Yes" 
                    ? <FormControl style={{margin:"0.5em"}}>
                        <InputLabel htmlFor="CalendarSelectRange">Sur combien de temps ?</InputLabel>
                        <Select ref={this.hebdomadaireDuration} labelId="CalendarSelectRange" className="CalendarInput"  id="CalendarSelectRange" onChange={e =>this.updateValue(e.target.value,"hebdomadaireDuration",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="1 mois" defaultValue ={""}>
                          <MenuItem  value="1">1 mois</MenuItem>
                          <MenuItem  value="2">2 mois</MenuItem>
                          <MenuItem  value="3">3 mois</MenuItem>
                          <MenuItem  value="4">4 mois</MenuItem>
                        </Select>
                      </FormControl>
                    : false}
                    <Tooltip title="Annuler la réservation" placement="top">
                      <Button className="deleteBookingButton" onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking),index,customOptions) }><FaTrashAlt></FaTrashAlt></Button>
                    </Tooltip>                  
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
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking } className="CalendarInput" value= {this.state.events[this.state.events.length - (this.state.newEvent - index )].title || ""} placeholder="Titre" style={{margin:"0.5em"}}  InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl id={"CalendarSelectRoomForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Salle/Terrain</InputLabel>
                        <Select ref={this.selectRoom} labelId={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e => this.updateValue(e.target.value,"room",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Room" defaultValue ={this.state.events[this.state.events.length - (this.state.newEvent - index )].room} disabled>
                          <MenuItem  value="All">Ensemble du complexe</MenuItem>
                          <MenuItem  value="A1">A1</MenuItem>
                          <MenuItem  value="A2">A2</MenuItem>
                          <MenuItem  value="A3">A3</MenuItem>
                          <MenuItem  value="B1">B1</MenuItem>
                          <MenuItem  value="B2">B2</MenuItem>
                          <MenuItem  value="T1">T1</MenuItem>
                          <MenuItem  value="T2">T2</MenuItem>
                          <MenuItem  value="T3">T3</MenuItem>
                          <MenuItem  value="F1">F1</MenuItem>
                          <MenuItem  value="F2">F2</MenuItem>
                          <MenuItem  value="BV1">BV1</MenuItem>
                          <MenuItem  value="BS1">BS1</MenuItem>
                          <MenuItem  value="P1">P1</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl id={"CalendarSelectTypeForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Type</InputLabel>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e =>this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Type" defaultValue ={"timeSlot" } disabled>
                        <MenuItem  value="timeSlot" >Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays" disabled>Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays" disabled>Vacances</MenuItem>
                        <MenuItem  value="close" disabled>Fermé</MenuItem>
                      </Select>
                    </FormControl>              
                    </Row>
                  <Row>
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}} disabled></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}} disabled></TextField>
                    <Tooltip title="Annuler la réservation" placement="top">
                      <Button className="deleteBookingButton" onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking),index,customOptions) }><FaTrashAlt></FaTrashAlt></Button>
                    </Tooltip>
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
                    <TextField ref={this.title} label="Titre" id={"CalendarInputId"+this.state.events[this.state.events.length -  (this.state.newEvent - index )].idBooking } className="CalendarInput"  placeholder="Titre" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"title",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} InputLabelProps={{ shrink: true }}></TextField>
                    <FormControl id={"CalendarSelectRoomForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}  shrink>Salle/Terrain</InputLabel>
                      <Tooltip title="Veuillez choisir une autre salle" open={this.state.tooltipRoom[this.state.tooltipRoom.length - (this.state.newEvent - index )].open} id={"TooltipRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}>                       
                        <Select ref={this.selectRoom} labelId={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectRoom"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e => this.updateValue(e.target.value,"room",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Room" defaultValue ={""}>
                          <MenuItem  value="All">Ensemble du complexe</MenuItem>
                          <MenuItem  value="A1">A1</MenuItem>
                          <MenuItem  value="A2">A2</MenuItem>
                          <MenuItem  value="A3">A3</MenuItem>
                          <MenuItem  value="B1">B1</MenuItem>
                          <MenuItem  value="B2">B2</MenuItem>
                          <MenuItem  value="T1">T1</MenuItem>
                          <MenuItem  value="T2">T2</MenuItem>
                          <MenuItem  value="T3">T3</MenuItem>
                          <MenuItem  value="F1">F1</MenuItem>
                          <MenuItem  value="F2">F2</MenuItem>
                          <MenuItem  value="BV1">BV1</MenuItem>
                          <MenuItem  value="BS1">BS1</MenuItem>
                          <MenuItem  value="P1">P1</MenuItem>
                        </Select>
                        </Tooltip>
                    </FormControl>
                    <FormControl id={"CalendarSelectTypeForm"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} style={{margin:"0.5em"}}>
                      <InputLabel htmlFor={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} shrink>Type</InputLabel>
                      <Tooltip title="Veuillez changer le type de réservation" open={this.state.tooltip[this.state.tooltip.length - (this.state.newEvent - index )].open} id={"Tooltip"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking}>
                      <Select ref={this.selectType} labelId={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput"  id={"CalendarSelectType"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} onChange={e =>this.updateValue(e.target.value,"type",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} placeholder="Type" defaultValue ={""}>
                        <MenuItem  value="timeSlot" disabled>Plage d'heures</MenuItem>
                        <MenuItem  value="allDay" disabled>Toute la journée</MenuItem>
                        <MenuItem  value="multipleDays" disabled>Plusieurs jours d'affilée</MenuItem>
                        <MenuItem  value="holidays" disabled>Vacances</MenuItem>
                        <MenuItem  value="close">Fermé</MenuItem>
                      </Select>
                      </Tooltip>
                    </FormControl>
                    </Row>  
                  <Row>
                    <TextField label="Date de début" id={"CalendarInputStart"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e => this.updateValue(e.target.value,"start",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].start) || ""} placeholder="Heure de début" style={{margin:"0.5em"}}></TextField>
                    <TextField label="Date de fin" id={"CalendarInputEnd"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking} className="CalendarInput" onBlur={e =>this.updateValue(e.target.value,"end",this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking)} defaultValue= {this.cleanDateOnScreen(this.state.events[this.state.events.length - (this.state.newEvent - index )].end) || ""} placeholder="Heure de fin" style={{margin:"0.5em"}}></TextField>                  
                    <Tooltip title="Annuler la réservation" placement="top">
                      <Button className="deleteBookingButton" onClick= {e => this.deleteEvent(document.getElementById("CalendarInputId"+this.state.events[this.state.events.length - (this.state.newEvent - index )].idBooking),index,customOptions) }><FaTrashAlt></FaTrashAlt></Button>
                    </Tooltip>
                  </Row>                
                </Col>
              </fieldset>
            </Container>);
          }
        }
        return (
            <>
              <HeadGenerator title="Effectuer une réservation"></HeadGenerator>
              <Query query={BOOKINGS_QUERY}>
                {({data,error,loading})=>{
                    if(loading) return <p>Chargement...</p>
                    if(error)   return <p>Erreur : {error.message}</p>
                    if(!this.state.events[0]){
                      data.bookings.map(booking =>
                        events.push(
                          {              
                            idBooking: booking.idBooking,              
                            title: booking.title,
                            allDay: booking.allDay,
                            start: booking.start,
                            end: booking.end,
                            room: booking.room,
                            type: booking.type,
                            is_paid: booking.is_paid,
                            unchanging: true
                          }
                        ),
                      )
                    }
                    
                    return <>
                    <DragAndDropCalendar
                    selectable
                    messages={messages}
                    style={{minHeight : "60vh", margin : "3em"}}
                    localizer={localizer}
                    events={this.state.events}
                    onEventDrop={this.moveEvent}
                    resizableAccessor={() => true}
                    draggableAccessor={event => event.DDSizeable ? true : false }

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
                    onSelectEvent={ event => Object.prototype.toString.call(event.room) === "[object String]" ? alert(event.room) : null }/** print title event */
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
                    <Container>
                      <Row>
                        <Button className="previewButton" onClick={this.toggle}>Aide</Button>
                        <Modal isOpen={this.state.modalOne} toggle={this.toggle} size="lg">
                            <ModalHeader toggle={this.toggle}>Comment effectuer une réservation ?</ModalHeader>
                            <ModalBody>
                              <p><b>Effectuer une nouvelle réservation :</b></p>
                              <li>Il suffit d'effectuer un click sur la date concernée.</li>
                              <li>Choisissez un titre pour votre réservation.</li>
                              <li>Choisissez votre salle ou votre terrain.</li>
                              <li>Choisissez votre type de réservation.</li>
                              <br />
                              <p><b>Modifiez les dates/heures de votre réservation(avant la réservation finale de celle-ci) :</b></p>
                              <b>Soit :</b>
                              <li>Effectuez un click sur la réservation concernée,de garder le click enfoncé et de déplacez l'évènement aux dates voulues.</li>
                              <b>Soit :</b>
                              <li>Changez les dates dans les champs correspondant tout en gardant les mêmes formats.</li>
                              <br />
                              <p><b>Ajouter des jours/heures à votre réservation(avant la réservation finale de celle-ci) :</b></p>
                              <b>Soit :</b>
                              <li>Choisir le type de vue voulue (en haut à droite : Mois/Semaine/Jour).</li>
                              <li>Retrouvez votre réservation.</li>
                              <li>En passant la souris sur votre réservation vous devriez remarqué 2 barres horizontales semblables à celles-ci "||".</li>
                              <li>Passez votre souris sur ces 2 barres et votre souris vous permettra d'aggrandir votre réservation.</li>
                              <b>Soit :</b>
                              <li>Changez les dates dans les champs correspondant tout en gardant les mêmes formats.</li>
                              <br />
                              <p><b>Effectuer une réservation hebdomadaire :</b></p>
                              <li>Choisissez le type de vue "Semaine" ou "Jour".</li>
                              <li>Cliquez sur la plage d'heures voulue.</li>
                              <li>Définissez un titre,choisissez la salle ou terrain voulu et choisissez "plage d'heures" comme type de réservation.</li>
                              <li>Une fois cela fait,le champs "réservation hebdomadaire devrait vous être accessible,choisissez "Oui".</li>
                              <li>Choisissez le nombre de mois voulu.</li>
                              <p> vous pouvez supprimer l'une de vos réservations hebdomaires si elle ne vous convient pas (avant de l'avoir valider).</p>
                              <br />
                              <p><b>Annuler ma réservation :</b></p>
                              <li>Cliquez sur le button "Mon Profil" en haut à droite de votre fenêtre.</li>
                              <li>Après chargement de la page,cliquez sur le button "Voir mes réservations" se trouvant au milieu de votre page.</li>
                              <li>Après chargement de la page,Cliquez sur le button "Annuler" se trouvant à côté de la réservation à annuler.</li>

                            </ModalBody>
                            <ModalFooter>
                                
                            </ModalFooter>
                        </Modal>
                        <Button onClick={this.toggle2}  className="previewButton">Plan du centre</Button>
                        <Modal isOpen={this.state.modalTwo} toggle={this.toggle2} contentClassName="customModalImg" size="lg" >
                          <ModalHeader toggle={this.toggle}>Plan du centre sportif</ModalHeader>
                          <ModalBody>
                            <img className="img-responsive-height" src="https://res.cloudinary.com/csperwez/image/upload/v1610913892/centre_retouch_d9z6u8.jpg"></img>
                          </ModalBody>
                          <ModalFooter>
                            <Link href="https://res.cloudinary.com/csperwez/image/upload/v1610913892/centre_retouch_d9z6u8.jpg"><a>Voir en annexe</a></Link>
                          </ModalFooter>
                        </Modal>
                      </Row>
                    </Container>
                      
                    </>
                }}
                </Query>
                <User>
                    {({data}) => {
                      const me = data ? data.me : null
                      if(me){
                        if(me.permissions[0] === "USER"){
                            return(
                              <Mutation mutation={CREATE_BOOKING_MUTATION} 
                              >
                              {(createBooking,{loading,error})=> (

                                
                                <form onSubmit={async e=> {
                                  e.preventDefault(); 
                                  for(let i =0;i<this.state.newEvent;i++){
                                    if(this.state.events[this.state.events.length - (this.state.newEvent - i)]){
                                      console.log(this.state.events[this.state.events.length - (this.state.newEvent - i)])
                                      const res = await createBooking({variables : 
                                        { idBooking :this.state.events[this.state.events.length - (this.state.newEvent - i)].idBooking,
                                          title: this.state.events[this.state.events.length - (this.state.newEvent - i)].title,
                                          allDay:this.state.events[this.state.events.length - (this.state.newEvent - i)].allDay,
                                          start:this.state.events[this.state.events.length - (this.state.newEvent - i)].start,
                                          end:this.state.events[this.state.events.length - (this.state.newEvent - i)].end,
                                          type:this.state.events[this.state.events.length - (this.state.newEvent - i)].type,
                                          room:this.state.events[this.state.events.length - (this.state.newEvent - i)].room,
                                          is_paid:this.state.events[this.state.events.length - (this.state.newEvent - i)].is_paid
                                        }
                                      });
                                      
                                      this.setState({
                                        succeededMessage: !this.state.succeededMessage
                                      });
                                    }else{
                                      return false
                                    }                                 
                                  }
                                  if(this.state.newEvent === 0){
                                    alert('Vous ne pouvez effectuer de réservation sans en avoir créé une ! 🏴‍☠️')
                                    return false
                                  }
                                  window.location.href = '/list/mybooking'
                                }}>
                                <Error error={error} />
                                
                                <div id="currentBookList" ref={this.currentBookList} >
                                {customOptions}{test}
                                  <Button className="previewButton" type="submit" disabled={loading || this.state.newEvent == 0 || this.state.validatedEvents}>Réserv{loading ? 'ation' : 'er' }</Button>

                                </div> 
                                {this.state.succeededMessage? <SweetAlert
                                  success
                                  title="Modification sauvegardée!"
                                  onConfirm={() => this.setState({ succeededMessage: false})}
                                  onCancel={() => this.setState({ succeededMessage: false})}
                                  timeout={2000}
                                  >
                                  Vos nouvelles données ont bien été mises à jour dans la base de données !
                                  </SweetAlert>: true}                 
                                </form>
                              )}
                            </Mutation>
                            )
                        }}else{
                            return(
                                <Container className="themed-container " fluid={true} >
                                    <Row className="mx-auto justify-content-center">
                                        <div className= "styledDiv bluredInformations">
                                            <p>
                                                <strong>
                                                    <h3>Vous devez être connecté pour effectuer une réservation !</h3>
                                                </strong>
                                            </p>
                                        </div>
                                    </Row>
                                </Container>
                            )
                        }}}
                    </User>
                   
                
              </>
            
        );
    }
}

export default CreateNewBooking;