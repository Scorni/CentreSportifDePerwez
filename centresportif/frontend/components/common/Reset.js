import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { RESET_MUTATION } from './Mutation'
import { CURRENT_USER_QUERY } from '../common/Query';
import TextField from '@material-ui/core/TextField';
import {  
    Button, 
 } from 'reactstrap';
import Error from './ErrorMessage';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

class Reset extends Component{
    static propTypes = {
        resetToken: PropTypes.string.isRequired
    }
  state = {
    password : "",
    confirmPassword: ""
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    }; 

render(){
    return(
        <Mutation 
        mutation={RESET_MUTATION} 
        variables={{
            resetToken : this.props.resetToken,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword
        }}
        refetchQueries={[{query : CURRENT_USER_QUERY}]}
        >
            
                    {(requestReset, {data, loading, error, called}) =>(
                        <Container className="themed-container" fluid={true} className="" >
                        <Row className="mx-auto justify-content-center">
                    <form
                    method='post'
                    onSubmit={async e => {
                        e.preventDefault();
                        await requestReset();
                    this.setState({
                        password: '',
                        confirmPassword: ''
                    });
                    }}
                    >
                    <Error error={error}/>
                    <fieldset disabled={loading} aria-busy={loading}>
                        <label htmlFor="password">
                            <TextField
                            required
                            type="password"
                            name="password"
                            label="Mot de passe"
                            value={this.state.password}
                            onChange={this.saveToState}
                        />
                        </label>
                        <br/>
                        <label htmlFor="confirmPassword">
                            <TextField
                            required
                            type="password"
                            name="confirmPassword"
                            label="Mot de passe confirmé"
                            value={this.state.confirmPassword}
                            onChange={this.saveToState}
                        />
                        </label>
                        <br/>
                        <Button type="submit" color="secondary">Changer votre mot de passe</Button>
                    </fieldset>
                    </form>
                    </Row>
                
                    </Container>
                    )
                    }
                    
        </Mutation>
        )
    }
}
export default Reset;