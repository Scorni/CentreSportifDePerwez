import React, { Component } from 'react';
import { Button,Container, Row, } from 'reactstrap';
import { Mutation } from 'react-apollo';
import {DELETE_MY_BOOKING} from './Mutation';
import {MYBOOKINGS_QUERY, BOOKINGS_QUERY} from './Query';

export class DeleteAnyBooking extends Component {
    update = (cache, payload) => {
        //update cache
        //get all locations set in the cache
        const data = cache.readQuery({query : BOOKINGS_QUERY});
        //filter the deleted location of the page
        data.bookings = data.bookings.filter(bookings => bookings.id !== payload.data.deleteMyBooking.id);
        // put the location in the cache
        cache.writeQuery({ query: BOOKINGS_QUERY, data:data})

    }
    render() {
        return (
            <Mutation mutation={DELETE_MY_BOOKING}  variables={{id: this.props.id}} update={this.update}>
                {(deleteMyBooking, {error,loading}) => (
                <Button className="customActualityButton" style={{width: '100px'}} onClick={() => {
                    //onClick Popup
                    if(confirm('Voulez-vous vraiment annuler cette réservation ?')){
                        deleteMyBooking();
                    }
                }}>Annuler</Button>
                )}
            </Mutation>
        );
    }
}

export default DeleteAnyBooking;