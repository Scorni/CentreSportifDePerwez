import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import {MYLOCATIONS_QUERY} from '../../components/list/Query'
import Error from '../common/ErrorMessage';
import {Table} from 'reactstrap'
import { Button,Container, Row, } from 'reactstrap';
import {HeadGenerator} from '../sports/category/generator';
import PropTypes from 'prop-types';
import {DeleteLocation} from '../list/DeleteLocation';
class Locations extends Component {
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
            <div className="locationsvg">
                <HeadGenerator title="Mes réservations"/>
                <Query query={MYLOCATIONS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <>
                            <Container className="themed-container"   >       
                                <Row className="mx-auto justify-content-center">
                                    <Table  hover responsive striped className='bluredTable'>
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
                                            {data.locationFilter.map(
                                                locationFilter => 
                                                    <tr>
                                                        <td>{locationFilter.id}</td>
                                                        <td>{locationFilter.sport}</td>
                                                        <td>{locationFilter.day}</td>
                                                        <td>{locationFilter.hour + "H00"}</td>
                                                        <td><DeleteLocation locationId= {locationFilter.id}></DeleteLocation></td>
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