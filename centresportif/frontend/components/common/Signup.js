import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import {CREATE_USER_MUTATION} from './Mutation'
import TextField from '@material-ui/core/TextField';
import {  
    Button, 
 } from 'reactstrap';
class Signup extends Component{
  state = {
    name : "",
    surname : "",
    email : "",
    password : "",
    adress:"",
    city:""
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    }; 

render(){
    return(
        <Mutation mutation={CREATE_USER_MUTATION} >
            {(signup, {data, loading, error}) =>(
            <form
            method='post'
            onSubmit={async e => {
                e.preventDefault();
                const response = await signup({ variables :{
                    email : this.state.email,
                    name : this.state.name,
                    surname : this.state.surname,
                    password : this.state.password, 
                    adress : this.state.adress, 
                    city : this.state.city }});

            console.log(response);
            this.setState({
                name: '',
                email: '',
                surname: '',
                password: '',
                adress:'',
                city:''
            });
            }}
            >
                <label htmlFor="email">
                    <TextField
                    re
                    type="email"
                    name="email"
                    label="Adresse mail"
                    value={this.state.email}
                    onChange={this.saveToState}
                />
                </label>
                <br/>
                <label htmlFor="password">
                    <TextField
                    type="password"
                    name="password"
                    label="Mot de passe"
                    value={this.state.password}
                    onChange={this.saveToState}
                    />
                </label>
                <br/>
                <label htmlFor="name">
                    <TextField
                    type="name"
                    name="name"
                    label="Nom"
                    value={this.state.name}
                    onChange={this.saveToState}
                    />
                </label>
                <br/>
                <label htmlFor="surname">
                    <TextField
                    type="surname"
                    name="surname"
                    label="Prénom"
                    value={this.state.surname}
                    onChange={this.saveToState}
                    />
                </label>
                <br/>
                <label htmlFor="adress">
                    <TextField
                    type="adress"
                    name="adress"
                    label="Adresse"
                    value={this.state.adress}
                    onChange={this.saveToState}
                    />
                </label>
                <br/>
                <label htmlFor="city">
                    
                    <TextField
                    type="city"
                    name="city"
                    label="Ville"
                    value={this.state.city}
                    onChange={this.saveToState}
                    />
                </label>
                <br/><br/>
                <Button type="submit" color="secondary">Cancel</Button>
            </form>)}
        </Mutation>
        )
    }
}
export default Signup;