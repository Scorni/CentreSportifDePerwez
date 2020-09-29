import React, { Component } from 'react';
import { Button,Container, Row, } from 'reactstrap';
import { Mutation } from 'react-apollo';
import {DELETE_MY_LOCATION} from '../../components/list/Mutation';
import {MYLOCATIONS_QUERY, LOCATIONS_QUERY} from '../../components/list/Query';

export class DeleteLocation extends Component {
    update = (cache, payload) => {
        //update cache
        //get all locations set in the cache
        const data = cache.readQuery({query : MYLOCATIONS_QUERY});
        //filter the deleted location of the page
        data.locationFilter = data.locationFilter.filter(locationDilter => locationDilter.id !== payload.data.deleteMyLocation.id);
        // put the location in the cache
        cache.writeQuery({ query: LOCATIONS_QUERY, data:data})

    }
    render() {
        return (
            <Mutation mutation={DELETE_MY_LOCATION} variables={{locationId: this.props.locationId}} update={this.update}>
                {(deleteMyLocation, {error,loading}) => (
                <Button onClick={() => {
                    //onClick Popup
                    if(confirm('Voulez-vous vraiment annuler cette réservation ?')){
                        deleteMyLocation();
                    }
                }}>Annuler</Button>
                )}
            </Mutation>
        );
    }
}

export default DeleteLocation;