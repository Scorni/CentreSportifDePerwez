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



export function Aikido() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000

      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Aïkido"} />
  <Container className="themed-container ContainerCard">
    <Row className="mx-auto" >
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            
            image="https://res.cloudinary.com/csperwez/image/upload/v1610313947/clubs/ArtsMartiaux/AikidoPerwez_n5nxjx.png"
            title=""
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Aïkido Perwez
              </Typography>
              <Typography variant="body1"  component="p">

                Responsable : Jean-Christophe Muret<br/>
                
                <AiOutlinePhone className="icon"/> 0476/42.26.53<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:jcmuret@gmail.com'>  jcmuret@gmail.com</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='http://aikidoperwez.weebly.com/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/MuretJC/" target="_blank"> Page Facebook</a>

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

export default Aikido;