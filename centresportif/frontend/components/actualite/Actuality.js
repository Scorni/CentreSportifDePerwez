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
                        
                        <Row className="mx-auto justify-content-center ">
                            <Col>
                                <Accordion style={{  background: "linear-gradient(225deg, rgba(43, 134, 197,0.5) 0%,rgba(120, 75, 160,0.5) 50%,rgba(145, 37, 60,0.5) 100% )" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography className={classes.heading}> {actuality.date} |<b> {actuality.title}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <div className="customTypo" dangerouslySetInnerHTML={{__html : actuality.content}} />
                                    </AccordionDetails>
                                </Accordion>
                            </Col>
                        </Row>
                        )}
                        </Container>
            }}
        </Query>
        <Container className="themed-container newsvg" fluid={true}>
                                        
            <Row className="mx-auto justify-content-center ">
                <Col>
                    <Accordion style={{  background: "linear-gradient(225deg, rgba(43, 134, 197,0.5) 0%,rgba(120, 75, 160,0.5) 50%,rgba(145, 37, 60,0.5) 100% )" }}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}> 28/10/20 |<b> CO-VID19 : Mesures mises en place</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography className="customTypo" >
                                Suite aux mesures sanitaires imposées par le gouvernement, diverses mersures sont également mises en place au sein de nos infrastructures : <br></br>
                                <li style={{listStyleType:"none"}}>- Espace de 1.5m entre chaque personne</li>
                                <li style={{listStyleType:"none"}}>- Les sports de contact sont interdits</li>
                                <li style={{listStyleType:"none"}}>- Port du masque non-obligatoire en extérieure</li>
                                

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Col>
            </Row>
            <Row className="mx-auto justify-content-center">
                <Col>
                    <Accordion style={{  background: "linear-gradient(225deg, rgba(43, 134, 197,0.5) 0%,rgba(120, 75, 160,0.5) 50%,rgba(145, 37, 60,0.5) 100% )" }}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography className={classes.heading}>01/09/20 | <b>C'est la rentrée !</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="customTypo">
                            A l'occasion de la rentrée,voici un récapitulatif des heures d'ouverture du centre :<br></br>
                            Lundi : de 9h à 15h et de 17h à 20h<br></br>
                            Mardi : de 8h à 19h30<br></br>
                            Mercredi : de 8h à 14h<br></br>
                            Jeudi : de 8h à 19h30<br></br>
                            vendredi : de 8h à 14h et de 17h à 20h Samedi : de 8h à 12h

                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Col>
            </Row> 
            <Row className="mx-auto justify-content-center">
                <Col>
                <Accordion style={{  background: "linear-gradient(225deg, rgba(43, 134, 197,0.5) 0%,rgba(120, 75, 160,0.5) 50%,rgba(145, 37, 60,0.5) 100% )" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>21/06/20 | <b>Journées sportives</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="customTypo">
                        Du 21 juin au 26 se dérouleront les Journées sportives au sein de nos infrastructures, permettant aux enfants de découvrir de nouvelles activités sportives.<br/>
                        Ces journées sportives regroupent les écoles de la commune de Perwez<br/>
                        Je souhaite avoir des informations en tant que :
                        <li style={{listStyleType:"none"}}>- Parent d'élève(s) | Elèves : <br/>
                            <li style={{listStyleType:"none"}}>Veuillez contacter l'école concernée par l'élève</li>
                            <li style={{listStyleType:"none"}}>Vous pouvez nous contacter en vous rendant ici :<b><Link href="/">Mettre lien vers la page de contact</Link></b> </li>
                        </li>
                        <li style={{listStyleType:"none"}}>- Clubs :</li>



                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Col>
            </Row>
            <Row className="mx-auto justify-content-center">
                <Col>
                <Accordion style={{  background: "linear-gradient(225deg, rgba(43, 134, 197,0.5) 0%,rgba(120, 75, 160,0.5) 50%,rgba(145, 37, 60,0.5) 100% )" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>15/06/20 |<b> L'été revient !</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className="customTypo">
                        Profitez des merveilleux moments de l'été au sein de notre centre !

                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Col>  
            </Row>
        </Container>
       
    </>
  );
  }
  
  export default Actuality;