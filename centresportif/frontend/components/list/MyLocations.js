import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {MYLOCATIONS_QUERY} from '../../components/list/Query'
import {Table} from 'reactstrap'
import { Button,Container, Row, } from 'reactstrap';
import {HeadGenerator} from '../sports/category/Generator';

class Locations extends Component {
    render() {
        return (
            <div>
                <HeadGenerator title="Liste de mes réservations"/>
                <Query query={MYLOCATIONS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        console.log(data)
                        return <>
                            <Container className="themed-container" fluid={true} className="" >       
                                <Row className=" justify-content-center">
                                    <Table dark hover responsive striped>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Sport</th>
                                                <th>Jour</th>
                                                <th>Heure</th>
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