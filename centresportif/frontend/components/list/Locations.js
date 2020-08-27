import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {LOCATIONS_QUERY} from '../../components/list/Query'
import {Table} from 'reactstrap'

class Locations extends Component {
    render() {
        console.log(<Query query={LOCATIONS_QUERY}>
            {({ data, error, loading }) => {
                if(loading) return <p> Loading...</p>
                if(error) return <p> Error : { error.message }</p>
                return <div>
                    <Table dark hover responsive striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Salle</th>
                                <th>Sports</th>
                                <th>Nom du client</th>
                                <th>Prénom du client</th>
                                <th>Est-elle payée ?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.locations.map(
                                locations => 
                                    <tr>
                                        <td>{locations.id}</td>
                                        <td>{locations.roomName.name}</td>
                                        <td>{locations.sport}</td>
                                        <td>{locations.userId.name}</td>
                                        <td>{locations.userId.surname}</td>
                                        <td>{locations.is_paid}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table> 
                </div>
                }               
            }
        </Query>)
        return (
            <div>
                <p> Les réservations </p>
                <Query query={LOCATIONS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <div>
                            <Table dark hover responsive striped>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Salle</th>
                                        <th>Sports</th>
                                        <th>Nom du client</th>
                                        <th>Prénom du client</th>
                                        <th>Est-elle payée ?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.locations.map(
                                        locations => 
                                            <tr>
                                                <td>{locations.id}</td>
                                                <td>{locations.roomName.name}</td>
                                                <td>{locations.sport}</td>
                                                <td>{locations.userId.name}</td>
                                                <td>{locations.userId.surname}</td>
                                                <td>{locations.is_paid}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table> 
                        </div>
                        }               
                    }
                </Query>
            </div>
        );
    }
}

export default Locations;