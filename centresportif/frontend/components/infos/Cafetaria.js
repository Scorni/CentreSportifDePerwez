import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  useWindowDimensions  from '../common/WindowsProperties';
import { Container, Row, Col } from 'reactstrap';
import {HeadGenerator} from '../sports/category/generator';
import { AiOutlinePhone,AiOutlineMail,AiOutlineFacebook } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';


export default function Cafetaria() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000
        
      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Cafétaria"} />
  <Container className="themed-container ContainerCard" >
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"           
            image="https://res.cloudinary.com/csperwez/image/upload/v1610293525/MontageCafet_nkht52.jpg"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Brasserie et Glacier du Centre Sportif de Perwez              
              </Typography>
              <Typography variant="body1"  component="p">
                
                <AiOutlinePhone className="icon"/> 081/37/16/01<br/> 
                Pour toutes informations complémentaires,veuillez vous diriger sur leur site en suivant le lien ci-dessous :<br/>
                <GiEarthAfricaEurope className="icon"  /><a href='https://brasserie-et-glacier-du-centre-sportif-de-perwez.business.site/?utm_source=gmb&utm_medium=referral' target="_blank">  Site web</a><br/>
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