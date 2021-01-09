import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {BOOKINGS_QUERY} from './Query'
import {Table} from 'reactstrap'
import { Button,Container, Row, } from 'reactstrap';
import {HeadGenerator} from '../sports/category/generator';
import moment, { defaultFormat } from 'moment';
import {DeleteAnyBooking} from '../list/DeleteAnyBooking';

class Bookings extends Component {
    cleanDateOnScreen(myDate){
        return moment(myDate).format('DD/MM/YYYY HH:mm');
        }
    
    render() {
        return (
            <div>
                <HeadGenerator title="Liste des réservations"/>
                <Query query={BOOKINGS_QUERY}>
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
                                                <th>Titre</th>
                                                <th>Salle</th>
                                                <th>Début de la réservation</th>
                                                <th>Fin de la réservation</th>
                                                <th>Type de réservation</th>
                                                <th>Est-elle payée?</th>
                                                <th>Nom</th>
                                                <th>Prénom</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.bookings.map(
                                                bookings => 
                                                    <tr>
                                                        <td>{bookings.id}</td>
                                                        <td>{bookings.title}</td>
                                                        <td>{bookings.room === "All" ? "Ensemble du complexe" : bookings.room }</td>
                                                        <td>{this.cleanDateOnScreen(bookings.start)}</td>
                                                        <td>{this.cleanDateOnScreen(bookings.end)}</td>                                                        
                                                        <td>{bookings.type}</td>
                                                        <td>{bookings.is_paid ? "Oui" : "Non"}</td>
                                                        <td>{bookings.userId.name}</td>
                                                        <td>{bookings.userId.surname}</td>
                                                        <td><DeleteAnyBooking id={bookings.id}></DeleteAnyBooking></td>

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

export default Bookings;