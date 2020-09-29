import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  useWindowDimensions  from '../../common/WindowsProperties';
import { Container, Row, Col } from 'reactstrap';
import {HeadGenerator} from '../category/generator';
import { AiOutlinePhone,AiOutlineMail,AiOutlineFacebook } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';


export default function Football() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000
        
      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Football"} />
  <Container className="themed-container" >
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"            
            image="../../../static/img/SportsCollectifs/RFCPerwez.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Royal Football Club Perwez
              </Typography>
              <Typography variant="body1"  component="p">
                Président : Stéphane LACOURT<br/>
                <AiOutlinePhone className="icon"/> 0475/84.16.16<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:stephanelacourt@hotmail.be'>  stephanelacourt@hotmail.be</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://fr-fr.facebook.com/pg/RfcPerwez/" target="_blank"> Page Facebook</a>
              </Typography>             
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
    </Row> 
  </Container>
</div>
  );
}