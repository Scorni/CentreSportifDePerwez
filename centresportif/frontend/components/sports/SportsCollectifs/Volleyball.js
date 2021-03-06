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


export default function Volleyball() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000
        
      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Volley-ball"} />
  <Container className="themed-container ContainerCard" >
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"            
            image="https://res.cloudinary.com/csperwez/image/upload/v1610313973/clubs/SportsCollectifs/VolleyClubPerwez_duzo1z.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Volley Club Perwez
              </Typography>
              <Typography variant="body1"  component="p">
                Responsable : Christophe Becquevort<br/>
                <AiOutlinePhone className="icon"/> 0475/35.47.26<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:volleyclubperwez@gmail.com'>  volleyclubperwez@gmail.com</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/VCPerwez/" target="_blank"> Page Facebook</a>
              </Typography>             
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"            
            image="https://res.cloudinary.com/csperwez/image/upload/v1610313972/clubs/SportsCollectifs/VolleyClubEagles_xbgsjw.jpg"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Volley Club Eagles
              </Typography>
              <Typography variant="body1"  component="p">
                Responsable : Sébastien Callaerts<br/>
                <AiOutlinePhone className="icon"/> 0477/66.00.36<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:jessica.piraux-urbain@outlook.be'>  jessica.piraux-urbain@outlook.be</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/volleyclubeagles/" target="_blank"> Page Facebook</a>
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