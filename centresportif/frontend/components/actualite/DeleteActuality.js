import React, { Component } from 'react';
import { Button,Container, Row, } from 'reactstrap';
import { Mutation } from 'react-apollo';
import {DELETE_ACTUALITY} from '../../components/actualite/Mutation';
import {ACTUALITY_QUERY} from '../../components/actualite/Query';

export class DeleteActuality extends Component {
    update = (cache, payload) => {
        //update cache
        //get all locations set in the cache
        const data = cache.readQuery({query : ACTUALITY_QUERY});
        //console.log(data, payload);
        //filter the deleted location of the page
        data.actualities = data.actualities.filter(actuality => actuality.id !== payload.data.deleteActuality.id);
        
        // put the location in the cache
        cache.writeQuery({ query: ACTUALITY_QUERY, data})

    }
    render() {
        return (
            <Mutation mutation={DELETE_ACTUALITY} variables={{actualityId: this.props.actualityId}} update={this.update}>
                {(deleteActuality, {error,loading}) => (
                <Button className="customActualityButton" style={{ marginTop : "1em"}} onClick={() => {
                    //onClick Popup
                    if(confirm('Voulez-vous vraiment supprimer cette actualité ?')){
                        deleteActuality();
                    }
                }}>Supprimer</Button>
                )}
            </Mutation>
        );
    }
}

export default DeleteActuality;