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
    ModalFooter, 
    Button} from 'reactstrap';

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
const title ="";
let allViews = Object.keys(Views).map(k => Views[k])


class CreateNewBooking extends Component {
    constructor(...args) {
        super(...args)
        
        this.state = { events }
        
    }
    
    closeModal = () => {
        this.setState({modalIsOpen : false})
    }
    handleChange(e){
        this.setState({title: e.target.value});

    }
    reg = () => {
        this.props.onRegister(this.state.title);
    }
    renderModal = () => {
        if (!this.state.modalIsOpen) return;
        return(
          <Modal
            isOpen={this.state.modalIsOpen}
            >
      
            <button onClick={this.closeModal}>close</button>
            <div>Add event</div>
            <form onSubmit={this.onFormSubmit}>
              <input value={this.state.name} onChange={this.handleChange}/>
      
              <Button onClick={this.reg} value="Submit" />
            </form>
          </Modal>
        );
    }
    
    handleSelect = ({ start, end }) => {
        this.setState({
            title :"",
            modalIsOpen: true
            
          });
        const title = this.state.title
        
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
                onSelectEvent={event => alert(event.title)}/** print title event */
                onSelectSlot={this.handleSelect}
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
                      {this.renderModal()}

            </div>
            
        );
    }
}

export default CreateNewBooking;