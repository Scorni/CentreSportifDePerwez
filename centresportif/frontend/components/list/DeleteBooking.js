import React, { Component } from 'react';
import { Button,Container, Row, } from 'reactstrap';
import { Mutation } from 'react-apollo';
import {DELETE_MY_BOOKING} from './Mutation';
import {MYBOOKINGS_QUERY, BOOKINGS_QUERY} from './Query';

export class DeleteBooking extends Component {
    update = (cache, payload) => {
        //update cache
        //get all locations set in the cache
        const data = cache.readQuery({query : MYBOOKINGS_QUERY});
        //filter the deleted location of the page
        data.bookingFilter = data.bookingFilter.filter(bookingFilter => bookingFilter.id !== payload.data.deleteMyBooking.id);
        // put the location in the cache
        cache.writeQuery({ query: BOOKINGS_QUERY, data:data})

    }
    render() {
        return (
            <Mutation mutation={DELETE_MY_BOOKING} variables={{id: this.props.id}} update={this.update}>
                {(deleteMyBooking, {error,loading}) => (
                <Button onClick={() => {
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

export default DeleteBooking;