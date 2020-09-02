import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {LOCATIONS_QUERY} from '../../components/list/Query'
import {Table} from 'reactstrap'
import { Button,Container, Row, } from 'reactstrap';
import {HeadGenerator} from '../sports/category/generator';

class Locations extends Component {
    render() {
        return (
            <div>
                <HeadGenerator title="Liste des réservations"/>
                <Query query={LOCATIONS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <>
                            <Container className="themed-container" fluid={true}  >       
                                <Row className="mx-auto justify-content-center">
                                    <Table dark hover responsive striped>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Salle</th>
                                                <th>Sport</th>
                                                <th>Jour</th>
                                                <th>Heure</th>
                                                <th>Nom du client</th>
                                                <th>Prénom du client</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.locations.map(
                                                locations => 
                                                    <tr>
                                                        <td>{locations.id}</td>
                                                        <td>{locations.roomName.name}</td>
                                                        <td>{locations.sport}</td>
                                                        <td>{locations.day}</td>
                                                        <td>{locations.hour + "H00"}</td>
                                                        <td>{locations.userId.name}</td>
                                                        <td>{locations.userId.surname}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table> 
                                </Row>
                            </Container>
                        </>
                        }               
                    }
                </Query>
            </div>
        );
    }
}

export default Locations;