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



export default function Externe() {
    const {width,height} = useWindowDimensions();
    const useStyles = makeStyles({
        root: {
          maxWidth: 500,
        },
      });
  const classes = useStyles();

  return (
  <div>
    <HeadGenerator title={"Infrastructure externe"} />
    <Container className="themed-container">
      <Row className="mx-auto">
        <Col className =" mt-3" >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              
              image="../../../static/img/Infrastructure/externe.jpg"
              title=""
            ></CardMedia>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Terrain synthétique
                </Typography>
                <Typography variant="body1"  component="p">
                  Le centre sportif de Perwez met à votre disposition  :
                  <br/>-1 terrain synthètique
                  <br/>-1 terrain de football en synthétique
                  <br/>-1 piste d'athlétisme
                  <br/>-1 terrain de beach soccer
                  <br/>-2 terrains de beach volley
                  <br/>-1 parcours de street workout et fitness
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        <Col className =" mt-3">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="../../../static/img/Infrastructure/externe.jpg"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Terrain de football en herbe
                </Typography>
                <Typography variant="body1"  component="p">
                  Le centre sportif de Perwez met à votre disposition  :
                  <br/>-1 terrain synthètique
                  <br/>-1 terrain de football en synthétique
                  <br/>-1 piste d'athlétisme
                  <br/>-1 terrain de beach soccer
                  <br/>-2 terrains de beach volley
                  <br/>-1 parcours de street workout et fitness
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col className =" mt-3" >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              
              image="../../../static/img/Infrastructure/externe.jpg"
              title=""
            ></CardMedia>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Piste d'Athlétisme
                </Typography>
                <Typography variant="body1"  component="p">
                  Le centre sportif de Perwez met à votre disposition  :
                  <br/>-1 terrain synthètique
                  <br/>-1 terrain de football en synthétique
                  <br/>-1 piste d'athlétisme
                  <br/>-1 terrain de beach soccer
                  <br/>-2 terrains de beach volley
                  <br/>-1 parcours de street workout et fitness
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        <Col className =" mt-3">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="../../../static/img/Infrastructure/externe.jpg"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Terrain de beach soccer
                </Typography>
                <Typography variant="body1"  component="p">
                  Le centre sportif de Perwez met à votre disposition  :
                  <br/>-1 terrain synthètique
                  <br/>-1 terrain de football en synthétique
                  <br/>-1 piste d'athlétisme
                  <br/>-1 terrain de beach soccer
                  <br/>-2 terrains de beach volley
                  <br/>-1 parcours de street workout et fitness
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