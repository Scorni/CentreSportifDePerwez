import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import {CREATE_USER_MUTATION} from './Mutation'
import { CURRENT_USER_QUERY } from '../common/Query';
import TextField from '@material-ui/core/TextField';
import {  
    Button, 
 } from 'reactstrap';
import Error from './ErrorMessage';
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
        <Mutation mutation={CREATE_USER_MUTATION} variables={this.state} refetchQueries={[{query : CURRENT_USER_QUERY}]} >
            {(signup, {data, loading, error}) =>(
            <form
            method='post'
            onSubmit={async e => {
                e.preventDefault();
                await signup();
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
            <Error error={error}/>
            <fieldset disabled={loading} aria-busy={loading}>
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
                    inputProps={{pattern:"(?=.*[a-z])(?=.*[A-Z]).{8,16}",title:"Un nombre,une majuscule et au moins une minuscule sont requis dans un mot de passe de 8 charactères minimum."}}
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
                <Button type="submit" color="secondary">S'enregistrer</Button>
                </fieldset>
            </form>)}
        </Mutation>
        )
    }
}
export default Signup;