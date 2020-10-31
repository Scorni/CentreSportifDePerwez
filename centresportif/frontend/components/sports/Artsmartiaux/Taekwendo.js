import React from 'react';
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


export function Taekwendo() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000
        
      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Taekwen-Do"} />
  <Container className="themed-container ContainerCard" >
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            
            image="../../../static/img/ArtsMartiaux/Taekwendo.jpg"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Taekwen-Do Club Perwez
              </Typography>
              <Typography variant="body1"  component="p">
                <AiOutlinePhone className="icon"/> 0475/82.78.44<br/> 
                <AiOutlinePhone className="icon"/> 0494/57.29.78<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:contact@po-eun.be'>  contact@po-eun.be</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='http://www.po-eun.be/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/po.eun.1" target="_blank"> Page Facebook</a>

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

export default Taekwendo;