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



export default function Tennisdetable() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000

      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Tennis de Table"} />
  <Container className="themed-container ContainerCard">
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            image="https://res.cloudinary.com/csperwez/image/upload/v1610313973/clubs/SportsDeRaquettes/CTT_obzxpk.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Club de Tennis de Table de Perwez
              </Typography>
              <Typography variant="body1"  component="p">
                
                Présidence : Philippe Thirion<br/>
                <AiOutlinePhone className="icon"/> 0472/78.94.96<br/> 
                Secrétariat : Kevin De Wilde <br/>
                <AiOutlinePhone className="icon"/> 0499.23.61.50<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:thirionphil75@yahoo.fr'>  thirionphil75@yahoo.fr</a><br/>               
                <GiEarthAfricaEurope className="icon"  /><a href='https://www.cttperwez.com/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/Club-de-Tennis-de-Table-de-Perwez-202264923175855/" target="_blank"> Page Facebook</a>
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