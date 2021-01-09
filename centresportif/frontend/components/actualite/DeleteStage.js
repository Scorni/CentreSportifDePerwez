import React, { Component } from 'react';
import { Button,Container, Row, } from 'reactstrap';
import { Mutation } from 'react-apollo';
import {DELETE_STAGE} from './Mutation';
import {STAGE_QUERY} from './Query';

export class DeleteStage extends Component {
    update = (cache, payload) => {
        //update cache
        //get all locations set in the cache
        const data = cache.readQuery({query : STAGE_QUERY});
        //console.log(data, payload);
        //filter the deleted location of the page
        data.stages = data.stages.filter(stage => stage.id !== payload.data.deleteStage.id);
        
        // put the location in the cache
        cache.writeQuery({ query: STAGE_QUERY, data})

    }
    render() {
        return (
            <Mutation mutation={DELETE_STAGE} variables={{stageId: this.props.stageId}} update={this.update}>
                {(deleteStage, {error,loading}) => (
                <Button className="customActualityButton" style={{ marginTop : "1em"}} onClick={() => {
                    //onClick Popup
                    if(confirm('Voulez-vous vraiment supprimer cette actualité ?')){
                        deleteStage();
                    }
                }}>Supprimer</Button>
                )}
            </Mutation>
        );
    }
}

export default DeleteStage;