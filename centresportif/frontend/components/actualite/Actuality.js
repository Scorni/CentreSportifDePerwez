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
        <div className={classes.root}>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>L'été est là !</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Profitez des merveilleux moments de l'été au sein de notre centre !
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={classes.heading}>L'été s'en va !</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Profitez du mauvais temps pour profitez de nos infrastructures internes de notre centre !

            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={classes.heading}>L'été dort !</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Profitez du mauvais temps pour profitez de nos infrastructures internes de notre centre !

            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={classes.heading}>L'été revient !</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Profitez des merveilleux moments de l'été au sein de notre centre !

            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    </>
  );
  }
  
  export default Actuality;