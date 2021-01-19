import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {HeadGenerator} from '../sports/category/generator';
import { Query, Mutation } from 'react-apollo';
import {FAQ_QUERY} from '../infos/Query';
import {DELETE_FAQ} from '../infos/Mutation';
import {DeleteFaq} from '../infos/DeleteFaq';
import Pagination from '../infos/Pagination';
import User from '../common/User';
import { perPage } from '../../config';
import TextLoop from "react-text-loop";

class Evenements extends Component {
    render(){
            return (
            <div style={{width:"100%",height:"70vh"}}className="customDivWIP">
                <HeadGenerator title={'Evènements'}></HeadGenerator>
                <div className="customDivWIPInside">
                    <TextLoop style={{}}>
                        <h3>Cette partie du site&nbsp;</h3>
                        <h3>Cette page&nbsp;</h3>
                        <h3>Cet endroit vide&nbsp;</h3>
                    </TextLoop>{" "}
                    <TextLoop>
                        <h3>est actuellement en travaux</h3>
                        <h3>est actuellement en maintenance</h3>
                        <h3>se trouve dans les mains du développeur</h3>
                    </TextLoop>{" "}
                </div>
                    
                
            </div>
        );
    }
  }
  
  export default Evenements;