import React, { Component ,  useState }  from 'react';
import HeadGenerator from '../sports/category/generator';
import { Button,Container, Row,Col,Table, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import { Query, Mutation } from 'react-apollo';
import {CONTACTFILTER_QUERY} from './Query'
import {UPDATE_CONTACT_MUTATION} from './Mutation';
import User from '../common/User';
import {TextField,Select,MenuItem,InputLabel,FormControl,Tooltip    } from '@material-ui/core';
import Error from '../common/ErrorMessage'
import SweetAlert from 'react-bootstrap-sweetalert';
import mapboxgl from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';
import Link from 'next/link';


const mapStyle = {
    width: '100%',
    height: '50vh',
    
}
const params = {
    country: "be"
}
const mapboxApiKey = 'pk.eyJ1Ijoic2Nvcm5pIiwiYSI6ImNranFhMDVyaTFrM2EycnFwOTJxbWRlZnMifQ.nGuZzx-y_vTyPaOr1QKPyw';
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
const contact = [{
    userId : "", 
    adress : "", 
    fix : "",
    phone : "",
    fax : "",
    mail : "",
    memberOne : "",
    memberTwo : "",
}]
class Contact extends Component {
        constructor(props) {
            super(props);
            this.state = {
                modalOne: false,
                fade: false,
                contact,
                succeededMessage:false,
                viewport: {
                    latitude: 50.62514769900056,
                    longitude: 4.805663982551348,
                    zoom: 16
                }
            };
            this.toggle = this.toggle.bind(this);            
        };
        toggle() {          
            this.setState({
                modalOne: !this.state.modalOne
            });
        }
        updateValue = (e,inputType,table) =>{
            if(table === "horaire"){
                this.setState(prevState => ({
                    contact: {                   // object that we want to update
                        ...prevState.contact,    // keep all other key-value pairs
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
            const { viewport } = this.state;
            return (
            <>
            
                <HeadGenerator  title="Contact"></HeadGenerator>
                <Query key={'12515'} query={CONTACTFILTER_QUERY} variables={{id: 'ckjpxrtx7rw5c0949o5rxm2v2'}}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        if(this.state.contact){
                            if(this.state.contact[0]){
                            {data.contactFilter.map(
                                contactFilter => 
                                this.state.contact  =(
                                    {              
                                        userId : "", 
                                        adress : contactFilter.adress,
                                        fix : contactFilter.fix,
                                        phone : contactFilter.phone,
                                        fax : contactFilter.fax,
                                        mail : contactFilter.mail,
                                        memberOne : contactFilter.memberOne,
                                        memberTwo : contactFilter.memberTwo,
                                    }
                                ))}
                            }
                        }
                        return <Container className="themed-container"   >       
                                    <Row className="mx-auto justify-content-center">
                                        <Table hover responsive striped>
                                            
                                                    <tbody key={'mdr'}>
                                                        <tr>
                                                            <th>Adresse</th>
                                                            <td>{this.state.contact.adress}</td>
                                                            <td></td>

                                                        </tr>
                                                        <tr>
                                                            <th>Téléphone fix</th>
                                                            <td>{this.state.contact.fix}</td>
                                                            <td><Link href='/infos/schedule' ><a className="linkToSchedule">Permanence téléphonique</a></Link></td>

                                                        </tr>
                                                        <tr>
                                                            <th>Téléphone</th>
                                                            <td>{this.state.contact.phone}</td>
                                                            <td></td>

                                                        </tr>
                                                        <tr> 
                                                            <th>Fax</th>
                                                            <td>{this.state.contact.fax}</td>
                                                            <td></td>

                                                        </tr>
                                                        <tr>
                                                            <th>Adresse mail</th>
                                                            <td>{this.state.contact.mail}</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Membre du service</th>
                                                            <td>{this.state.contact.memberOne}</td>
                                                            <td>{this.state.contact.memberTwo}</td>
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
                                                            <ModalHeader toggle={this.toggle}>Mettre à jour les informations de contact</ModalHeader>
                                                            <ModalBody>
                                                            <TextField label="Adresse" id={"Adresse"} placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"adress","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.contact.adress}></TextField>
                                                            <TextField label="Téléphone fix" id={"TéléphoneFix"}  placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"fix","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.contact.fix}></TextField>
                                                            <TextField label="Téléphone" id={"Téléphone"}  placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"phone","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.contact.phone}></TextField>
                                                            <TextField label="Fax" id={"Fax"}  placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"fax","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.contact.fax}></TextField>
                                                            <TextField label="Adresse mail" id={"AdresseMail"}  placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"mail","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.contact.mail}></TextField>
                                                            <TextField label="Membre n°1" id={"MemberOne"}   placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"memberOne","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.contact.memberOne}></TextField>
                                                            <TextField label="Membre n°2" id={"MemberTwo"}   placeholder="Horaire" style={{margin:"0.5em"}} onBlur={e => this.updateValue(e.target.value,"memberTwo","horaire")} InputLabelProps={{ shrink: true }} defaultValue ={this.state.contact.memberTwo}></TextField>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <Mutation mutation={UPDATE_CONTACT_MUTATION}>
                                                                {(updateContact,{loading,error})=> (
                                                                    <form onSubmit={async e=> {
                                                                    e.preventDefault(); 
                                                                    const res = await updateContact({variables : 
                                                                        { 
                                                                            id: 'ckjpxrtx7rw5c0949o5rxm2v2',                                                                            
                                                                            userId: me.id, 
                                                                            adress: this.state.contact.adress,
                                                                            fix: this.state.contact.fix,
                                                                            phone: this.state.contact.phone,
                                                                            fax: this.state.contact.fax,
                                                                            mail: this.state.contact.mail,
                                                                            memberOne: this.state.contact.memberOne,
                                                                            memberTwo: this.state.contact.memberTwo,
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
                                                                    </SweetAlert>: null}</form>
                                                                )}
                                                                </Mutation>
                                                            </ModalFooter>
                                                        </Modal>
                                                    </>
                                                    )}else{
                                                        return(null)
                                                    }
                                            }else{
                                                return(null)
                                            }}}
                                        </User>
                                        
                                    </Row>
                                    <Row>
                                        <Col style={{marginBottom:'2em'}}>
                                        <ReactMapGL
                                        mapboxApiAccessToken={mapboxApiKey}
                                        mapStyle="mapbox://styles/mapbox/streets-v11"
                                        {...viewport}
                                        {...mapStyle}
                                        onViewportChange={(viewport) => this.setState({viewport})}
                                    
                                        >
                                        </ReactMapGL>
                                        
                                        
                                        </Col>
                                    
                                    </Row>
                                </Container>
                        }               
                    }
                </Query>
                
            </>
            
        );
    }
}

export default Contact;