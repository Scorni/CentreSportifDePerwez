import React, { Component } from 'react';
import { Mutation} from "react-apollo";
import StyledForm from "../list/Form"
import gql from "graphql-tag";
import {Calendar,momentLocalizer,Views } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const propTypes = {}

const events = 
    [{
        id: 0,
        title: 'All Day Event very long title',
        allDay: false,
        start: new Date(2020, 3, 0),
        end: new Date(2020, 3, 1),
      },
      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2020, 2, 13, 0, 0, 0),
        end: new Date(2020, 2, 20, 0, 0, 0),
      },{
        id: 7,
        title: 'Lunch',
        start: new Date(2020, 3, 12, 12, 0, 0, 0),
        end: new Date(2020, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
      }]

let allViews = Object.keys(Views).map(k => Views[k])

class CreateNewBooking extends Component {
    constructor(...args) {
        super(...args)
    
        this.state = { events }
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
    }
    render() {
        return (
            <div >
                <Calendar
                selectable
                style={{minHeight : "80vh", margin : "2em"}}
                localizer={localizer}
                views={allViews}
                events={this.state.events}
                startAccessor="start"
                endAccessor="end"  
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={this.handleSelect}
                />
            </div>
            
        );
    }
}

export default CreateNewBooking;