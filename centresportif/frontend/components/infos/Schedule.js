import React, { Component } from 'react';
import HeadGenerator from '../sports/category/generator';
import { Button,Container, Row,Table } from 'reactstrap';
import { Query, Mutation } from 'react-apollo';
import {SCHEDULEFILTER_QUERY} from '../../components/infos/Query'
import {UPDATE_SCHEDULE_MUTATION} from '../../components/infos/Mutation';
/*<Mutation mutation={UPDATE_SCHEDULE_MUTATION} 
                    variables={{
                        userId: this.state.userId, 
                        lundi: this.state.lundi,
                        mardi: this.state.mardi,
                        mercredi: this.state.mercredi,
                        jeudi: this.state.jeudi,
                        vendredi: this.state.vendredi,
                        samedi: this.state.samedi,
                        dimanche: this.state.dimanche,
                        vacances: this.state.vacances
                    }}>
                        {(updateSchedule, {loading,error})=>(
                            
                    <>  
                    <Error error={{error}}/> 
                    </>
                    )}
                    </Mutation>*/
class Schedule extends Component {

        render() {
            return (
            <>
                <HeadGenerator  title="Horaire d'ouverture"></HeadGenerator>
                <Query query={SCHEDULEFILTER_QUERY} variables={{id: 'ckjnfcn1obxrz094996hynkrf'}}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <Container className="themed-container"   >       
                                    <Row className="mx-auto justify-content-center">
                                        <Table hover responsive striped>
                                            
                                            <tbody>
                                                {data.scheduleFilter.map(
                                                            scheduleFilter => 
                                                    <>
                                                        <th></th>
                                                        <th>Classique</th>
                                                        <th>En vacances</th>

                                                        <tr>
                                                            <th>Lundi</th>
                                                            <td>{scheduleFilter.lundi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mardi</th>
                                                            <td>{scheduleFilter.mardi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mercredi</th>
                                                            <td>{scheduleFilter.mercredi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Jeudi</th>
                                                            <td>{scheduleFilter.jeudi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Vendredi</th>
                                                            <td>{scheduleFilter.vendredi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Samedi</th>
                                                            <td>{scheduleFilter.samedi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Dimanche</th>
                                                            <td>{scheduleFilter.dimanche}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>  
                                                    </>
                                                )}
                                            </tbody>
                                        </Table> 
                                    </Row>
                                </Container>
                        }               
                    }
                </Query>
                
                <HeadGenerator  title="Permanence téléphonique"></HeadGenerator>
                <Query query={SCHEDULEFILTER_QUERY} variables={{id: 'ckjnffadwby7g0949bifj4kqx'}}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <Container className="themed-container"   >       
                                    <Row className="mx-auto justify-content-center">
                                        <Table hover responsive striped>
                                            
                                            <tbody>
                                                {data.scheduleFilter.map(
                                                            scheduleFilter => 
                                                    <>
                                                        <th></th>
                                                        <th>Classique</th>
                                                        <th>En vacances</th>

                                                        <tr>
                                                            <th>Lundi</th>
                                                            <td>{scheduleFilter.lundi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mardi</th>
                                                            <td>{scheduleFilter.mardi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mercredi</th>
                                                            <td>{scheduleFilter.mercredi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Jeudi</th>
                                                            <td>{scheduleFilter.jeudi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Vendredi</th>
                                                            <td>{scheduleFilter.vendredi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Samedi</th>
                                                            <td>{scheduleFilter.samedi}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Dimanche</th>
                                                            <td>{scheduleFilter.dimanche}</td>
                                                            <td>{scheduleFilter.vacances}</td>
                                                        </tr>  
                                                    </>
                                                )}
                                            </tbody>
                                        </Table> 
                                    </Row>
                                </Container>
                        }               
                    }
                </Query>
            
            </>
            
        );
    }
}

export default Schedule;