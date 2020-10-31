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



export default function BoxeAnglaise() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000

      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Boxe Anglaise"} />
  <Container className="themed-container ContainerCard">
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            image="../../../static/img/SportsIndividuels/SimbaWarriors.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Simba Warriors
              </Typography>
              <Typography variant="body1"  component="p">
                Responsable : Charly MUTAMBAIE<br/>
                <AiOutlinePhone className="icon"/> 0488/48.11.02<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:simbawarriors@hotmail.com'>  simbawarriors@hotmail.com</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/thesimbawarriors/" target="_blank"> Page Facebook</a>
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