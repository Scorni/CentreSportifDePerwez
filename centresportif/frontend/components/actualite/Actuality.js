import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {HeadGenerator} from '../sports/category/generator';
import { Query } from 'react-apollo';
import {ACTUALITY_QUERY} from '../actualite/Query';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Actuality = (props) => {
    const classes = useStyles();

  return (
      <>
        <HeadGenerator title="Actualités"/>
        <Query query={ACTUALITY_QUERY}>
            {({data,error,loading})=>{
                if(loading) return <p>Chargement...</p>
                if(error)   return <p>Erreur : {error.message}</p>
                
                return <Container className="themed-container newsvg" fluid={true}>
                    {data.actualities.map(actuality =>
                        
                        <Row className="mx-auto justify-content-center" key= {actuality.id}>
                            <Col>
                                <Accordion style={{  background: "linear-gradient(225deg, rgba(43, 134, 197,0.5) 0%,rgba(120, 75, 160,0.5) 50%,rgba(145, 37, 60,0.5) 100% )" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography > {actuality.date} |<b> {actuality.title}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <div className="customTypo"  dangerouslySetInnerHTML={{__html :actuality.content}} />
                                    </AccordionDetails>
                                </Accordion>
                            </Col>
                        </Row>
                        )}
                        </Container>
            }}
        </Query>
        
       
    </>
  );
  }
  
  export default Actuality;