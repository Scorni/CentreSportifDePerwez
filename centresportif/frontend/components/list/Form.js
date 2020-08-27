import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {HeadGenerator} from '../sports/category/Generator';
import { Container, Row, Col } from 'reactstrap';
import MaterialUIPickers from '../list/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MultilineTextFields from "../list/Select";
import handleSubmit from "../list/Select"

const StyledForm = (props) => {
  return (   
    <div>
        <HeadGenerator title={"Effectuer une réservation"} />
        <Container className="themed-container">        
            <form className ="styledForm">
                <MultilineTextFields type = {"Sport"}></MultilineTextFields>
            
            
            
            
            
            </form>       
        </Container>
    </div>
  );
}

export default StyledForm;