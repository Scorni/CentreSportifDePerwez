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



export function Badminton() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000

      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Badminton"} />
  <Container className="themed-container ContainerCard">
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            image="https://res.cloudinary.com/csperwez/image/upload/v1610313973/clubs/SportsDeRaquettes/LesFousDuVolant_uokmm8.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Les Fous du Volant
              </Typography>
              <Typography variant="body1"  component="p">
                Responsable : Christian Durie<br/>
                <AiOutlinePhone className="icon"/> 0478/28.05.79<br/> 
                <AiOutlinePhone className="icon"/> 010/88.00.06<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:christian.durie@gmail.com'>  christian.durie@gmail.com</a><br/>
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

export default Badminton;