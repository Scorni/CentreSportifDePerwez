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


export default function Danse() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000
        
      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Danse"} />
  <Container className="themed-container" >
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"           
            image="../../../static/img/Danse/Phenomena.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Phenomena Academy - Danse moderne / Step / Hip-Hop
              </Typography>
              <Typography variant="body1"  component="p">
                Présidence : Pasqualina Grede<br/> 
                <AiOutlinePhone className="icon"/> 0479/87.21.67<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:pasqualina.grede@gmail.com'>  pasqualina.grede@gmail.com</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='http://www.phenomena-academy.com/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/phenomenacademy/" target="_blank"> Page Facebook</a>
              </Typography>             
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"           
            image="../../../static/img/Danse/Scenetic.jpg"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Scenetic Dance School
              </Typography>
              <Typography variant="body1"  component="p"> 
                <br/>
                Présidence : Melody Lecocq <br/>
                <AiOutlinePhone className="icon"/> 0473/13.88.06<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:sceneticdanceperwez@gmail.com'>  sceneticdanceperwez@gmail.com</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='https://www.sceneticdanceschool.com/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/sceneticschool/" target="_blank"> Page Facebook</a>
              </Typography>             
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
    </Row> 
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"           
            image="../../../static/img/Danse/Entrartist.jpg"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Entr'Artist
              </Typography>
              <Typography variant="body1"  component="p"> 
                <br/>

                <AiOutlinePhone className="icon"/> 0496/23.52.44<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:entrartist@skynet.be'>  entrartist@skynet.be</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='http://www.entr-artist.be/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/entrartist1030/" target="_blank"> Page Facebook</a>
              </Typography>             
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"           
            image="../../../static/img/Danse/twodonstage.jpg"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                2d on stage
              </Typography>
              <Typography variant="body1"  component="p"> 
                <br/>
                Work in progress <br/>
                <AiOutlinePhone className="icon"/> 0473/13.88.06<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:entrartist@skynet.be'>  entrartist@skynet.be</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='http://www.entr-artist.be/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/entrartist1030/" target="_blank"> Page Facebook</a>
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