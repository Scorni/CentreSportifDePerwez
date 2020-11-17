import React, { Component } from 'react';
import { Mutation} from "react-apollo";
import StyledForm from "../list/Form"
import gql from "graphql-tag";
import {Calendar,momentLocalizer,Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';
import { func } from 'prop-types';
import {   
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter } from 'reactstrap';

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
        valueNotReaded : "oui"
      },
      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2020, 2, 13, 0, 0, 0),
        end: new Date(2020, 2, 20, 0, 0, 0),
      },{
        id: 7,
        title: 'Lunch',
        start: new Date(2020, 2, 12, 12, 30, 0, 0),
        end: new Date(2020, 2, 12, 13, 30, 0, 0),
        desc: 'Power lunch',
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

let allViews = Object.keys(Views).map(k => Views[k])


class CreateNewBooking extends Component {
    constructor(...args) {
        super(...args)
        
        this.state = { events,modal:false }
        
    }

    toggle = () =>{
        this.setState( {modal : !this.state.modal});
    }
  
    afterOpenModal= e => {
      // references are now sync'd and can be accessed.
      console.log('yes');
    }
  
    closeModal= e =>{
        this.setState( {setIsOpen : false})
    }
    
    handleSelect = ({ start, end }) => {
        const title = window.prompt('Effectuer une réservation')
          
        if (title)
        this.setState({
            events: [
                ...this.state.events,
                {
                start,
                end,
                title,
                },
            ],
            
        })
        console.log(this.state.events)
    }
    openModal() {

    }
    render() {
        return (
            <div >
                <Calendar
                selectable
                messages={messages}
                style={{minHeight : "80vh", margin : "3em"}}
                localizer={localizer}
                views={allViews}
                events={this.state.events}
                startAccessor="start"
                endAccessor="end"  
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={this.toggle()}
                min={new Date(0, 10, 0, 8, 0, 0)}
                max={new Date(0, 10, 0, 23, 0, 0)} 
                eventPropGetter={
                    (event, start, end, isSelected) => {
                      let newStyle = {
                        backgroundColor: "green",
                        color: 'black',
                        borderRadius: "0px",
                        border: "none"
                      };
                      
                      if (event.title == "course"){
                        newStyle.backgroundColor = "lightgreen"
                      }
                
                      return {
                        className: "",
                        style: newStyle
                      };
                    }
                  }
                />
                <Modal isOpen={this.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>ouais</ModalHeader>
                    <ModalBody>
                        <br>aie</br>
                    </ModalBody>
                </Modal>
            </div>
            
        );
    }
}

export default CreateNewBooking;