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

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));


class Faq extends Component {
    render(){
            return (
            <div className="customDivFaq">
                <HeadGenerator title="Foire aux questions"/>
                <Pagination page={this.props.page}/>
                <Query query={FAQ_QUERY} 
                variables={{
                    skip:this.props.page * perPage - perPage,
                }}>
                    {({data,error,loading})=>{
                        if(loading) return <p>Chargement...</p>
                        if(error)   return <p>Erreur : {error.message}</p>
                        
                        return <div className="customAccordion">
                            {data.faqs.map(faq =>
                                
                                        <Accordion style={{  background: "linear-gradient(225deg, rgba(43, 134, 197,0.5) 0%,rgba(120, 75, 160,0.5) 50%,rgba(145, 37, 60,0.5) 100% )" }}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography > {faq.date} |<b> {faq.question}</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails >
                                                <div className="customTypo"  dangerouslySetInnerHTML={{__html :faq.answer}} />
                                            
                                            </AccordionDetails>
                                            <User>
                                            {({data}) => {
                                                const me = data ? data.me : null
                                                if(me){
                                                if(me.permissions[1] === "ADMIN" && me.permissions[2] === "SADMIN"){ 
                                                    return(                                        
                                                        <div className = "customNewsDivInside">
                                                                <DeleteFaq faqId= {faq.id}></DeleteFaq>
                                                        </div>
                                                    )
                                                    }else if(me.permissions[1] === "ADMIN"){
                                                        return(
                                                            <div className = "customNewsDivInside">
                                                                <DeleteFaq faqId= {faq.id}></DeleteFaq>
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
                                                    pathname: 'newFaq',
                                                }}
                                            >
                                                <Button className="customActualityButton" style={{ marginTop : "1em"}}><a  role="button" >Ajouter une Q/R</a></Button>
                                            </Link>                                            
                                        </div>
                                        )
                                    }else if(me.permissions[1] === "ADMIN"){
                                        return(
                                        <div className = "customNewsDivOutside">
                                            <Link 
                                                href={{
                                                    pathname: 'newFaq',
                                                }}
                                            >
                                                <Button className="customActualityButton" style={{ marginTop : "1em"}}><a  role="button" >Ajouter une Q/R</a></Button>
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
  
  export default Faq;