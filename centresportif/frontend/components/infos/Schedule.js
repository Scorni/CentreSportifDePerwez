import React, { Component ,  useState }  from 'react';
import HeadGenerator from '../sports/category/generator';
import { Button,Container, Row,Table, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import { Query, Mutation } from 'react-apollo';
import {SCHEDULEFILTER_QUERY} from '../../components/infos/Query'
import {UPDATE_SCHEDULE_MUTATION} from '../../components/infos/Mutation';
import User from '../common/User';
import {TextField,Select,MenuItem,InputLabel,FormControl,Tooltip    } from '@material-ui/core';
import Error from '../common/ErrorMessage'
import SweetAlert from 'react-bootstrap-sweetalert';

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
const variablesSchedule = [{
    userId : "", 
    lundi : "",
    mardi : "",
    mercredi : "",
    jeudi : "",
    vendredi : "",
    samedi : "",
    dimanche : "",
    vacances : ""
}]
const variablesPermanent = [{
    userId : "", 
    lundi : "",
    mardi : "",
    mercredi : "",
    jeudi : "",
    vendredi : "",
    samedi : "",
    dimanche : "",
    vacances : ""
}]
class Schedule extends Component {
        constructor(props) {
            super(props);
            this.state = {
                modalOne: false,
                modalTwo: false,
                fade: false,
                variablesSchedule,
                variablesPermanent,
                succeededMessage:false
            };
            this.toggle = this.toggle.bind(this);            
            this.toggle2 = this.toggle2.bind(this)
        };
        
        toggle() {          
            this.setState({
                modalOne: !this.state.modalOne
            });
        }
        toggle2() {
            this.setState({
                modalTwo: !this.state.modalTwo
            });           
        }
        updateValue = (e,inputType,table) =>{
            if(table === "horaire"){
                this.setState(prevState => ({
                    variablesSchedule: {                   // object that we want to update
                        ...prevState.variablesSchedule,    // keep all other key-value pairs
                        [inputType]: e       // update the value of specific key
                    }
                }))
            }else if(table === "permanence"){
                this.setState(prevState => ({
                    variablesPermanent: {                   // object that we want to update
                        ...prevState.variablesPermanent,    // keep all other key-value pairs
                        [inputType]: e       // update the value of specific key
                    }
                }))
            }  
        }
        render () {
            return (
            <>
                <HeadGenerator  title="Horaire d'ouverture"></HeadGenerator>
                <Query key={'12515'} query={SCHEDULEFILTER_QUERY} variables={{id: 'ckjnfcn1obxrz094996hynkrf'}}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        if(this.state.variablesSchedule){
                            if(this.state.variablesSchedule[0]){
                            {data.scheduleFilter.map(
                                scheduleFilter => 
                                this.state.variablesSchedule  =(
                                    {              
                                        userId : "", 
                                        lundi : scheduleFilter.lundi,
                                        mardi : scheduleFilter.mardi,
                                        mercredi : scheduleFilter.mercredi,
                                        jeudi : scheduleFilter.jeudi,
                                        vendredi : scheduleFilter.vendredi,
                                        samedi : scheduleFilter.samedi,
                                        dimanche : scheduleFilter.dimanche,
                                        vacances : scheduleFilter.vacances
                                    }
                                ))}
                            }
                        }
                        return <Container className="themed-container"   >       
                                    <Row className="mx-auto justify-content-center">
                                        <Table hover responsive striped>
                                            
                                                    <tbody key={'mdr'}>
                                                     <tr>
                                                            <th></th>
                                                            <th>Classique</th>
                                                            <th>En vacances</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Lundi</th>
                                                            <td>{this.state.variablesSchedule.lundi}</td>
                                                            <td>{this.state.variablesSchedule.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mardi</th>
                                                            <td>{this.state.variablesSchedule.mardi}</td>
                                                            <td>{this.state.variablesSchedule.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mercredi</th>
                                                            <td>{this.state.variablesSchedule.mercredi}</td>
                                                            <td>{this.state.variablesSchedule.vacances}</td>
                                                        </tr>
                                                        <tr> 
                                                            <th>Jeudi</th>
                                                            <td>{this.state.variablesSchedule.jeudi}</td>
                                                            <td>{this.state.variablesSchedule.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Vendredi</th>
                                                            <td>{this.state.variablesSchedule.vendredi}</td>
                                                            <td>{this.state.variablesSchedule.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Samedi</th>
                                                            <td>{this.state.variablesSchedule.samedi}</td>
                                                            <td>{this.state.variablesSchedule.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Dimanche</th>
                                                            <td>{this.state.variablesSchedule.dimanche}</td>
                                                            <td>{this.state.variablesSchedule.vacances}</td>
                                                        </tr>    
                                                    </tbody>
                                        </Table> 
                                        <User>
                                            {({data}) => {
                                            const me = data ? data.me : null
                                            if(me){
                                                if(me.permissions[1] === "ADMIN" && me.permissions[2] === "SADMIN"){ 
                                                    return(
                                                        <>
                                                        <Button color="danger" onClick={this.toggle}  className="customActualityButton" style={{ marginBottom : "1em"}}>Modifier</Button>
                                                        <Modal isOpen={this.state.modalOne} toggle={this.toggle} >
                                                            <ModalHeader toggle={this.toggle}>Mettre à jour l'horaire du centre sportif</ModalHeader>
                                                            <ModalBody>
                                                            <TextField label="Lundi" id={"lundiHoraire"} placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"lundi","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesSchedule.lundi}></TextField>
                                                            <TextField label="Mardi" id={"mardiHoraire"}  placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"mardi","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesSchedule.mardi}></TextField>
                                                            <TextField label="Mercredi" id={"mercrediHoraire"}  placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"mercredi","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesSchedule.mercredi}></TextField>
                                                            <TextField label="jeudi" id={"jeudiHoraire"}  placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"jeudi","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesSchedule.jeudi}></TextField>
                                                            <TextField label="Vendredi" id={"vendrediHoraire"}  placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"vendredi","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesSchedule.vendredi}></TextField>
                                                            <TextField label="Samedi" id={"samediHoraire"}   placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"samedi","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesSchedule.samedi}></TextField>
                                                            <TextField label="Dimanche" id={"dimancheHoraire"}   placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"dimanche","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesSchedule.dimanche}></TextField>
                                                            <TextField label="Vacances" id={"vacancesHoraire"}   placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"vacances","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesSchedule.vacances}></TextField>

                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Mutation mutation={UPDATE_SCHEDULE_MUTATION}>
                                                                {(updateSchedule,{loading,error})=> (
                                                                    <form onSubmit={async e=> {
                                                                    e.preventDefault(); 
                                                                    const res = await updateSchedule({variables : 
                                                                        { 
                                                                            id: 'ckjnfcn1obxrz094996hynkrf',                                                                            
                                                                            userId: me.id, 
                                                                            lundi: this.state.variablesSchedule.lundi,
                                                                            mardi: this.state.variablesSchedule.mardi,
                                                                            mercredi: this.state.variablesSchedule.mercredi,
                                                                            jeudi: this.state.variablesSchedule.jeudi,
                                                                            vendredi: this.state.variablesSchedule.vendredi,
                                                                            samedi: this.state.variablesSchedule.samedi,
                                                                            dimanche: this.state.variablesSchedule.dimanche,
                                                                            vacances: this.state.variablesSchedule.vacances
                                                                        }
                                                                        
                                                                    });
                                                                    this.setState({
                                                                        succeededMessage: !this.state.succeededMessage
                                                                    });
                                                                    //window.location.href = '/list/mylocations'
                                                                    }}>
                                                                    <Error error={error} />
                                                                    <Button type="submit" className="customActualityButton" disabled={loading}>Confirm{loading ? 'ation' : 'er' }</Button>         
                                                                    {this.state.succeededMessage? <SweetAlert
                                                                    success
                                                                    title="Modification sauvegardée!"
                                                                    onConfirm={() => this.setState({ succeededMessage: false,modalOne: false })}
                                                                    onCancel={() => this.setState({ succeededMessage: false,modalOne: false })}
                                                                    timeout={2000}
                                                                    >
                                                                    Vos nouvelles données ont bien été mises à jour dans la base de données !
                                                                    </SweetAlert>: true}</form>
                                                                )}
                                                                </Mutation>
                                                            </ModalFooter>
                                                            
                                                            
                                                        </Modal>
                                                    </>
                                                    )}}}}
                                        </User>
                                        
                                    </Row>
                                </Container>
                        }               
                    }
                </Query>
                
                <HeadGenerator  title="Permanence téléphonique"></HeadGenerator>
                <Query key={'1251544'} query={SCHEDULEFILTER_QUERY} variables={{id: 'ckjnffadwby7g0949bifj4kqx'}}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        if(this.state.variablesPermanent){
                            if(this.state.variablesPermanent[0]){
                            {data.scheduleFilter.map(
                                scheduleFilter => 
                                this.state.variablesPermanent  =(
                                    {              
                                        userId : "", 
                                        lundi : scheduleFilter.lundi,
                                        mardi : scheduleFilter.mardi,
                                        mercredi : scheduleFilter.mercredi,
                                        jeudi : scheduleFilter.jeudi,
                                        vendredi : scheduleFilter.vendredi,
                                        samedi : scheduleFilter.samedi,
                                        dimanche : scheduleFilter.dimanche,
                                        vacances : scheduleFilter.vacances
                                    }
                                ))}
                            }
                        }
                        return <Container className="themed-container"   >       
                                    <Row className="mx-auto justify-content-center">
                                        <Table hover responsive striped>
                                                    <tbody key={'lol'}>
                                                        <tr >
                                                            <th> </th>
                                                            <th>Classique</th>
                                                            <th>En vacances</th>
                                                        </tr>
                                                        <tr >
                                                            <th>Lundi</th>
                                                            <td>{this.state.variablesPermanent.lundi}</td>
                                                            <td>{this.state.variablesPermanent.vacances}</td>
                                                        </tr>
                                                        <tr >
                                                            <th>Mardi</th>
                                                            <td>{this.state.variablesPermanent.mardi}</td>
                                                            <td>{this.state.variablesPermanent.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mercredi</th>
                                                            <td>{this.state.variablesPermanent.mercredi}</td>
                                                            <td> {this.state.variablesPermanent.vacances}</td>
                                                        </tr>
                                                        <tr> 
                                                            <th>Jeudi</th>
                                                            <td>{this.state.variablesPermanent.jeudi}</td>
                                                            <td>{this.state.variablesPermanent.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Vendredi</th>
                                                            <td>{this.state.variablesPermanent.vendredi}</td>
                                                            <td>{this.state.variablesPermanent.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Samedi</th>
                                                            <td>{this.state.variablesPermanent.samedi}</td>
                                                            <td>{this.state.variablesPermanent.vacances}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Dimanche</th>
                                                            <td>{this.state.variablesPermanent.dimanche}</td>
                                                            <td>{this.state.variablesPermanent.vacances}</td>
                                                        </tr>  
                                                    </tbody>
                                        </Table> 
                                        <User>
                                            {({data}) => {
                                            const me = data ? data.me : null
                                            if(me){
                                                if(me.permissions[1] === "ADMIN" && me.permissions[2] === "SADMIN"){ 
                                                    return(
                                                        <>
                                                        <Button color="danger" onClick={this.toggle2}  className="customActualityButton" style={{ marginBottom : "1em"}} >Modifier</Button>
                                                        <Modal isOpen={this.state.modalTwo} toggle={this.toggle2} >
                                                            <ModalHeader toggle={this.toggle2}>Mettre à jour les permanence téléphoniques du centre sportif</ModalHeader>
                                                            <ModalBody>
                                                            <TextField label="Lundi" id={"lundiPermanence "} placeholder="Permanence " style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"lundi","permanence")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesPermanent.lundi}></TextField>
                                                            <TextField label="Mardi" id={"mardiPermanence "}  placeholder="Permanence " style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"mardi","permanence")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesPermanent.mardi}></TextField>
                                                            <TextField label="Mercredi" id={"mercrediPermanence "}  placeholder="Permanence " style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"mercredi","permanence")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesPermanent.mercredi}></TextField>
                                                            <TextField label="jeudi" id={"jeudiPermanence "}  placeholder="Permanence " style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"jeudi","permanence")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesPermanent.jeudi}></TextField>
                                                            <TextField label="Vendredi" id={"vendrediPermanence "}  placeholder="Permanence " style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"vendredi","permanence")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesPermanent.vendredi}></TextField>
                                                            <TextField label="Samedi" id={"samediPermanence "}   placeholder="Permanence " style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"samedi","permanence")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesPermanent.samedi}></TextField>
                                                            <TextField label="Dimanche" id={"dimanchePermanence "}   placeholder="Permanence " style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"dimanche","permanence")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesPermanent.dimanche}></TextField>
                                                            <TextField label="Vacances" id={"vacancesPermanence "}   placeholder="Permanence " style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"vacances","permanence")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.variablesPermanent.vacances}></TextField>

                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Mutation mutation={UPDATE_SCHEDULE_MUTATION}>
                                                                {(updateSchedule,{loading,error})=> (
                                                                    <form onSubmit={async e=> {
                                                                    e.preventDefault(); 
                                                                    console.log(me)
                                                                        console.log(this.state.variablesPermanent.lundi)
                                                                        const res = await updateSchedule({variables : 
                                                                            { 
                                                                                id: 'ckjnffadwby7g0949bifj4kqx',                                                                            
                                                                                userId: me.id, 
                                                                                lundi: this.state.variablesPermanent.lundi,
                                                                                mardi: this.state.variablesPermanent.mardi,
                                                                                mercredi: this.state.variablesPermanent.mercredi,
                                                                                jeudi: this.state.variablesPermanent.jeudi,
                                                                                vendredi: this.state.variablesPermanent.vendredi,
                                                                                samedi: this.state.variablesPermanent.samedi,
                                                                                dimanche: this.state.variablesPermanent.dimanche,
                                                                                vacances: this.state.variablesPermanent.vacances
                                                                            }
                                                                        });
                                                                    this.setState({
                                                                        succeededMessage: !this.state.succeededMessage
                                                                    });
                                                                    console.log('yyy')
                                                                    //window.location.href = '/list/mylocations'
                                                                    }}>
                                                                    <Error error={error} />
                                                                    <Button type="submit" className="customActualityButton" disabled={loading}>Confirm{loading ? 'ation' : 'er'
                                                                    
                                                                    }</Button>         
                                                                    {this.state.succeededMessage? <SweetAlert
                                                                    success
                                                                    title="Modification sauvegardée!"
                                                                    onConfirm={() => this.setState({ succeededMessage: false,modalTwo: false  })}
                                                                    onCancel={() => this.setState({ succeededMessage: false,modalTwo: false  })}
                                                                    timeout={2000}
                                                                    >
                                                                    Vos nouvelles données ont bien été mises à jour dans la base de données !
                                                                    </SweetAlert>: true}
                                                                    </form>
                                                                )}
                                                                </Mutation>
                                                            </ModalFooter>
                                                            
                                                            
                                                        </Modal>
                                                    </>
                                                    )}}}}
                                        </User>
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