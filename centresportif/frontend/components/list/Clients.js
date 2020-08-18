import React, { Component } from 'react';
import { Query } from 'react-apollo';
import CLIENTS_QUERY from '../../components/list/Query'

class Clients extends Component {
    render() {
        return (
            <div>
                <p> Les clients </p>
                <Query query={CLIENTS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        console.log(data);
                        return <div>{data.clients.map(clients => <li> {clients.name + " || " + clients.surname + " || " + clients.mail + " || " + clients.adress }</li>)} </div>
                    }}
                </Query>
            </div>
        );
    }
}

export default Clients;