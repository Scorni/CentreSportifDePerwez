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


export default function Judo() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000

      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Judo"} />
  <Container className="themed-container">
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            
            image="../../../static/img/ArtsMartiaux/JudoClubThorembais.png"
            title=""
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Judo Club Thorembais
              </Typography>
              <Typography variant="body1"  component="p">

                Présidence : Detraux Norman<br/>
                <AiOutlinePhone className="icon"/> 0473/35.76.88<br/> 
                Secrétariat : Landry Johan<br/>
                <AiOutlinePhone className="icon"/> 0476/42.26.53<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:judoclubthorembais@gmail.com'>  Mail</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='https://judoclubthorembais.be/'>  Site web</a>
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