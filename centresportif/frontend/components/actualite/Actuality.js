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
import User from '../common/User';

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
                
                return <div className="customAccordion">
                    {data.actualities.map(actuality =>
                        
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
                                        <User>
                                      {({data}) => {
                                        const me = data ? data.me : null
                                        if(me){
                                          if(me.permissions[1] === "ADMIN" && me.permissions[2] === "SADMIN"){ 
                                              return(
                                                  <>
                                                      <Container className="themed-container profilesvg" fluid={true}>
                                                          
                                                          <Row className="mx-auto justify-content-center">
                                                              <div className="styledDiv bluredInformations" >
                                                                  <h2>Informations personnelles</h2>
                                                                  <p><strong>Prenom :</strong> {me.surname}</p>
                                                                  <p><strong>Nom :</strong> {me.name}</p>
                                                                  <p><strong>Adresse mail :</strong> {me.email}</p>
                                                                  <p><strong>Adresse :</strong> {me.adress}</p>
                                                                  <p><strong>Ville :</strong> {me.city}</p>
                                                                  <p><strong>Identifiant :</strong> {me.id}</p>
                                                              </div>
                                                          </Row>
                                                          <Row className="mx-auto justify-content-center">
                                                              <Link href='/list/locations' >
                                                                  <Button className="m-2 mt-1">Liste des réservations</Button>
                                                              </Link>
                                                              <Link href='/list/users'>
                                                                  <Button className="m-2 mt-1 ">Liste des utilisateurs</Button>
                                                              </Link>
                                                              <Link href='/permissions'>
                                                                  <Button className="m-2 mt-1 ">Gérer les permissions</Button>
                                                              </Link>
                                                          </Row>
                                                      </Container>
                                                  </>
                                              )
                                              }else if(me.permissions[1] === "ADMIN"){
                                                  return(
                                                      <div>
                                                          <Button>Supprimer</Button>
                                                          <Button>Modifier</Button>
                                                      </div>
                                                  )
                                              }
                                          else if(me.permissions[0] === "USER"){
                                            return true;
                                          }}else{
                                            return true;
                                          }}}
                                      </User>
                                    </AccordionDetails>
                                </Accordion>
                        )}
                        </div>
            }}
        </Query>
        
        
       
    </>
  );
  }
  
  export default Actuality;