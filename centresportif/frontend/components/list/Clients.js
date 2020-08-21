import React, { Component } from 'react';
import { Query } from 'react-apollo';
import CLIENTS_QUERY from '../../components/list/Query'
import {Table} from 'reactstrap'
import clients from '../../pages/list/clients';

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
                        return <div>
                            <Table dark hover responsive striped>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Adresse</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.clients.map(
                                        clients => 
                                            <tr>
                                                <td>{clients.id}</td>
                                                <td>{clients.name}</td>
                                                <td>{clients.surname}</td>
                                                <td>{clients.adress}</td>
                                                <td>{clients.mail}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table> 
                        </div>
                    }}
                </Query>
            </div>
        );
    }
}

export default Clients;