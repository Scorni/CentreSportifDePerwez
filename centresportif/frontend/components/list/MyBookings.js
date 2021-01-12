import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import {MYBOOKINGS_QUERY} from '../../components/list/Query'
import Error from '../common/ErrorMessage';
import {Table} from 'reactstrap'
import { Button,Container, Row, } from 'reactstrap';
import {HeadGenerator} from '../sports/category/generator';
import PropTypes from 'prop-types';
import {DeleteBooking} from '../list/DeleteBooking';
import moment, { defaultFormat } from 'moment';


class MyBookings extends Component {
    static propTypes = {
        location: PropTypes.shape({
            id: PropTypes.string,
        }).isRequired, 
    };
    state = {
        id: "",
    }
    handleClick = (id) => {
        if(this.state.id === ""){
        this.setState({id : id})
        console.log(this.state.id)
        }
        console.log(this.state.id)
    }
    cleanDateOnScreen(myDate){
        return moment(myDate).format('DD/MM/YYYY HH:mm');
    }
    
    render() {
        return (
            <div>
                <HeadGenerator title="Mes réservations"/>
                <Query query={MYBOOKINGS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <Container className="themed-container">       
                                <Row className="mx-auto justify-content-center">
                                    <Table  hover responsive striped className='transparentTable' size="sm">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Titre</th>
                                                <th>Salle</th>
                                                <th>Début de la réservation</th>
                                                <th>Fin de la réservation</th>
                                                <th>Type de réservation</th>
                                                <th>Est-elle payée?</th>
                                                <th>Annuler ma réservation</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.bookingFilter.map(
                                                bookingFilter => 
                                                    <tr>
                                                        <td>{bookingFilter.id}</td>
                                                        <td>{bookingFilter.title}</td>
                                                        <td>{bookingFilter.room === "All" ? "Ensemble du complexe" : bookingFilter.room }</td>
                                                        <td>{this.cleanDateOnScreen(bookingFilter.start)}</td>
                                                        <td>{this.cleanDateOnScreen(bookingFilter.end)}</td>                                                        
                                                        <td>{bookingFilter.type}</td>
                                                        <td>{bookingFilter.is_paid ? "Oui" : "Non"}</td>                                                       
                                                        <td><DeleteBooking id={bookingFilter.id}></DeleteBooking></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table> 
                                </Row>
                            </Container>
                        }               
                    }
                </Query>
            </div>
        );
    }
}

export default MyBookings;