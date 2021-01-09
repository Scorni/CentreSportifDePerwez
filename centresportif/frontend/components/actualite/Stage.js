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
import {STAGE_QUERY} from '../actualite/Query';
import {DELETE_STAGE} from '../actualite/Mutation';
import {DeleteStage} from '../actualite/DeleteStage';
import Pagination from './PaginationStage';
import User from '../common/User';
import { perPage } from '../../config';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));


class Stage extends Component {
    render(){
            return (
            <div className="customDivStage">
                <HeadGenerator title="Stages"/>
                <Pagination page={this.props.page}/>
                <Query query={STAGE_QUERY} 
                variables={{
                    skip:this.props.page * perPage - perPage,
                }}>
                    {({data,error,loading})=>{
                        if(loading) return <p>Chargement...</p>
                        if(error)   return <p>Erreur : {error.message}</p>
                        
                        return <div className="customAccordion">
                            {data.stages.map(stage =>
                                
                                        <Accordion style={{  background: "linear-gradient(225deg, rgba(43, 134, 197,0.5) 0%,rgba(120, 75, 160,0.5) 50%,rgba(145, 37, 60,0.5) 100% )" }}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography > {stage.date} |<b> {stage.title}</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails >
                                                <div className="customTypo"  dangerouslySetInnerHTML={{__html :stage.content}} />
                                            
                                            </AccordionDetails>
                                            <User>
                                            {({data}) => {
                                                const me = data ? data.me : null
                                                if(me){
                                                if(me.permissions[1] === "ADMIN" && me.permissions[2] === "SADMIN"){ 
                                                    return(                                        
                                                        <div className = "customNewsDivInside">
                                                            <DeleteStage stageId= {stage.id}></DeleteStage>
                                                        </div>
                                                    )
                                                    }else if(me.permissions[1] === "ADMIN"){
                                                        return(
                                                            <div className = "customNewsDivInside">
                                                                <DeleteStage stageId= {stage.id}></DeleteStage>
                                                            </div>
                                                        )
                                                    }
                                                else if(me.permissions[0] === "USER"){
                                                    return true;
                                                }}else{
                                                    return true;
                                                }}}
                                            </User>
                                        </Accordion>
                                )}
                                <User>
                                {({data}) => {
                                const me = data ? data.me : null
                                if(me){if(me.permissions[1] === "ADMIN" && me.permissions[2] === "SADMIN"){ 
                                    return(                                    
                                        <div className = "customNewsDivOutside">
                                            <Link 
                                                href={{
                                                    pathname: 'newStage',
                                                }}
                                            >
                                                <Button className="customActualityButton" style={{ marginTop : "1em"}}><a  role="button" >Ajouter un stage</a></Button>
                                            </Link>                                            
                                        </div>
                                        )
                                    }else if(me.permissions[1] === "ADMIN"){
                                        return(
                                        <div className = "customNewsDivOutside">
                                            <Link 
                                                href={{
                                                    pathname: 'newStage',
                                                }}
                                            >
                                                <Button className="customActualityButton" style={{ marginTop : "1em"}}><a  role="button" >Ajouter un stage</a></Button>
                                            </Link> 
                                        </div>
                                        )
                                    }
                                    else if(me.permissions[0] === "USER"){
                                        return true;
                                    }}
                                    else{
                                        return true;
                                    }}}
                                </User>
                                </div>
                    }}
                </Query>
                <Pagination page={this.props.page}/>
            </div>
        );
    }
  }
  
  export default Stage;