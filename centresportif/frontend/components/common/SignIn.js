import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import {SIGNIN_MUTATION} from './Mutation'
import { CURRENT_USER_QUERY } from '../common/Query';
import TextField from '@material-ui/core/TextField';
import {  
    Button, 
 } from 'reactstrap';
import Error from './ErrorMessage';
class Signin extends Component{
  state = {
    email : "",
    password : "",
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    }; 

render(){
    return(
        <Mutation 
        mutation={SIGNIN_MUTATION} 
        variables={this.state} 
        refetchQueries={[{query : CURRENT_USER_QUERY}]} 
        >
            {(signup, {data, loading, error}) =>(
            <form
            method='post'
            onSubmit={async e => {
                e.preventDefault();
                await signup();
            this.setState({
                email: '',
                password: '',
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
                    
                    />
                </label>
                <br/><br/>
                <Button type="submit" color="secondary">Se connecter</Button>
                </fieldset>
            </form>)}
        </Mutation>
        )
    }
}
export default Signin;