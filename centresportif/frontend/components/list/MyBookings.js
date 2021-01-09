import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import {MYBOOKINGS_QUERY} from '../../components/list/Query'
import Error from '../common/ErrorMessage';
import {Table} from 'reactstrap'
import { Button,Container, Row, } from 'reactstrap';
import {HeadGenerator} from '../sports/category/generator';
import PropTypes from 'prop-types';
import {DeleteBooking} from '../list/DeleteBooking';


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
    render() {
        return (
            <div console>
                <HeadGenerator title="Mes réservations"/>
                <Query query={MYBOOKINGS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <div className="locationsvg">
                            <Container className="themed-container"   >       
                                <Row className="mx-auto justify-content-center">
                                    <Table  hover responsive striped className='transparentTable' size="sm">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Sport</th>
                                                <th>Jour</th>
                                                <th>Heure</th>
                                                <th>Annuler sa réservation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.bookingFilter.map(
                                                bookingFilter => 
                                                    <tr>
                                                        <td>{bookingFilter.id}</td>
                                                        <td>{bookingFilter.type}</td>
                                                        <td>{bookingFilter.end}</td>
                                                        <td>{bookingFilter.start}</td>
                                                        <td><DeleteBooking id={bookingFilter.id}></DeleteBooking></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table> 
                                </Row>
                            </Container>
                        </div>
                        }               
                    }
                </Query>
            </div>
        );
    }
}

export default MyBookings;