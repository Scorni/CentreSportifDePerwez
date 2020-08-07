import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  useWindowDimensions  from '../../common/WindowsProperties';
import { Container, Row, Col } from 'reactstrap';
import {HeadGenerator} from '../../sports/category/Generator';
import { AiOutlinePhone,AiOutlineMail } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';


export default function Jujutsu() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000
      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Ju-jutsu"} />
  <Container className="themed-container">
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            
            image="../../../static/img/ArtsMartiaux/Ju-jutsu.jpg"
            title=""
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Seishin Kyoiku, Ecole de Taï-Jutsu et Ju-Jutsu
              </Typography>
              <Typography variant="body1"  component="p">

                Présidence : Frédéric Villers<br/>
                <AiOutlinePhone className="icon"/> 0496/88.05.63<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:seishinkyoikuasbl@gmail.com'>  Mail</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='http://www.seishinkyoiku.be'>  Site web</a>
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