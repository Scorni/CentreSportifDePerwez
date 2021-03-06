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


export function Kravmaga() {
  const {width,height} = useWindowDimensions();
  const useStyles = makeStyles({
      root: {
        maxWidth : 1000

      },
    });
const classes = useStyles();

return (
<div>
  <HeadGenerator title={"Krav Maga"} />
  <Container className="themed-container ContainerCard">
    <Row className="mx-auto">
      <Col className =" mt-3" >
        <Card className={classes.root}>
          <CardMedia
            component="img"
            
            image="https://res.cloudinary.com/csperwez/image/upload/v1610313947/clubs/ArtsMartiaux/Kravmaga_k2usxv.png"
            title=""
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Krav Maga Perwez KMG
              </Typography>
              <Typography variant="body1"  component="p">
                <AiOutlinePhone className="icon"/> 0495/78.80.41<br/> 
                <AiOutlineMail className="icon" /><a href='mailto:infos@actiasluna.be'>  infos@actiasluna.be</a><br/>
                <GiEarthAfricaEurope className="icon"  /><a href='https://www.kravmaga.be/' target="_blank">  Site web</a><br/>
                <AiOutlineFacebook className="icon"/><a href="https://www.facebook.com/pg/kravmagaperwezkmg/posts/?ref=page_internal" target="_blank"> Page Facebook</a>
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

export default Kravmaga;