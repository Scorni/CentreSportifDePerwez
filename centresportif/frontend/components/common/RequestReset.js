import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { REQUEST_RESET_MUTATION } from './Mutation'
import { CURRENT_USER_QUERY } from '../common/Query';
import TextField from '@material-ui/core/TextField';
import {  
    Button, 
 } from 'reactstrap';
import Error from './ErrorMessage';
class RequestReset extends Component{
  state = {
    email : "",
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    }; 

render(){
    return(
        <Mutation 
        mutation={REQUEST_RESET_MUTATION} 
        variables={this.state} 
        >
            {(requestReset, {data, loading, error, called}) =>(
            <form
            method='post'
            onSubmit={async e => {
                e.preventDefault();
                await requestReset();
            this.setState({
                email: '',
            });
            }}
            >
            <Error error={error}/>
            {!error && !loading && called && <p>Demande effectuée !<br/> Vous allez recevoir un lien dans votre boite mail pour changer votre mot de passe.</p>}
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
                <Button type="submit" color="secondary">Confirmer</Button>
                </fieldset>
            </form>)}
        </Mutation>
        )
    }
}
export default RequestReset;