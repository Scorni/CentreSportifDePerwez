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
import { AiOutlinePhone,AiOutlineMail,AiOutlineFacebook } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';


export default function Handball() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000
        
      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Handball"} />
  <Container className="themed-container" >
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"            
            image="../../../static/img/SportsCollectifs/HCPerwez.png"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              HC Perwez
              </Typography>
              <Typography variant="body1"  component="p">
                Président : Gaëtan Marchal<br/>
                <AiOutlinePhone className="icon"/> 0470/55.13.05<br/> 
                Secrétaire : Anne De Boeck<br/>
                <AiOutlinePhone className="icon"/> 0475/36.80.22<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:hcperwez@gmail.com'>  hcperwez@gmail.com</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/HcPerwez/" target="_blank"> Page Facebook</a>
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