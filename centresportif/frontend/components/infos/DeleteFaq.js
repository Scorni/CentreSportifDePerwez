import React, { Component } from 'react';
import { Button,Container, Row, } from 'reactstrap';
import { Mutation } from 'react-apollo';
import {DELETE_FAQ} from '../infos/Mutation';
import {FAQ_QUERY} from '../infos/Query';

export class DeleteFaq extends Component {
    update = (cache, payload) => {
        //update cache
        //get all locations set in the cache
        const data = cache.readQuery({query : FAQ_QUERY});
        //console.log(data, payload);
        //filter the deleted location of the page
        data.faqs = data.faqs.filter(faq => faq.id !== payload.data.deleteFaq.id);
        
        // put the location in the cache
        cache.writeQuery({ query: FAQ_QUERY, data})

    }
    render() {
        return (
            <Mutation mutation={DELETE_FAQ} variables={{faqId: this.props.faqId}} update={this.update}>
                {(deleteFaq, {error,loading}) => (
                <Button className="customActualityButton" style={{ marginTop : "1em"}} onClick={() => {
                    //onClick Popup
                    if(confirm('Voulez-vous vraiment supprimer cette question/réponse ?')){
                        deleteFaq();
                    }
                }}>Supprimer</Button>
                )}
            </Mutation>
        );
    }
}

export default DeleteFaq;