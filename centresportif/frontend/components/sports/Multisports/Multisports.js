import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  useWindowDimensions  from '../../common/WindowsProperties';
import { Container, Row, Col } from 'reactstrap';
import {HeadGenerator} from '../../sports/category/generator';
import { AiOutlinePhone,AiOutlineMail,AiOutlineFacebook } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';


export default function Multisports() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000
        
      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Multisports"} />
  <Container className="themed-container ContainerCard" >
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            
            image="../../../static/img/Multisports/Promosport.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Promosport
              </Typography>
              <Typography variant="body1"  component="p">
                Responsable : Denis Detinne<br/>
                <AiOutlinePhone className="icon"/> 010/45.93.00<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:info@promo-sport.be'>  info@promo-sport.be</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='https://www.promo-sport.be/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/asblpromosport/" target="_blank"> Page Facebook</a>
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            
            image="../../../static/img/Multisports/CopainsDuSport.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Les Copains Du Sport
              </Typography>
              <Typography variant="body1"  component="p">
                Responsables : Maxim Buts et Anaïs Godeau<br/>
                <AiOutlinePhone className="icon"/> 0498/06.02.56<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:lescopainsdusport@hotmail.com'>  lescopainsdusport@hotmail.com</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='http://www.lescopainsdusport.be/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/LesCopainsDuSport/" target="_blank"> Page Facebook</a>
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