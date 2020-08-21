import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  useWindowDimensions  from '../../common/WindowsProperties';
import { Container, Row, Col } from 'reactstrap';
import {HeadGenerator} from '../category/Generator';
import { AiOutlinePhone,AiOutlineMail,AiOutlineFacebook } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';



export default function Tennis() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000

      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Tennis"} />
  <Container className="themed-container">
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            image="../../../static/img/SportsDeRaquettes/TennisClubDePerwez.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tennis Club de Perwez
              </Typography>
              <Typography variant="body1"  component="p">
                Arnaud Graisse<br/>
                <AiOutlinePhone className="icon"/> 0478/21.00.42<br/> 
                Guy Charlet(Pilou) <br/>
                <AiOutlinePhone className="icon"/> 0478/37.67.22<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:tcperwez@gmail.com'>  tcperwez@gmail.com</a><br/>               
                <GiEarthAfricaEurope className="icon"  /><a href='http://www.tennisclubperwez.be/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/ArnaudGraisse/" target="_blank"> Page Facebook</a>
              </Typography>              
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            image="../../../static/img/Workinprogress.jpg"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Quality Tennis Developement
              </Typography>
              <Typography variant="body1"  component="p">
                WIP <br/>
                <AiOutlinePhone className="icon"/> 0471/23.45.67<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:wip.com'>  wip@gmail.com</a><br/>               
                <GiEarthAfricaEurope className="icon"  /><a href='http://www.wip.be/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/wip/" target="_blank"> Page Facebook</a>
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