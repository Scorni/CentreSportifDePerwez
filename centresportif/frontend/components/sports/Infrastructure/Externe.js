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
    <Container className="themed-container ContainerCard">
      <Row className="mx-auto">
        <Col className =" mt-3" >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/csperwez/image/upload/v1610313388/Streetworkoutcomplete_jqs5pn.jpg"
              title=""
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Terrain synthétique
                </Typography>
                <Typography variant="body1"  component="p">
                <b>Dimensions</b> : 106m L X 66m l<br/>
                <b>Revêtement</b> : Gazon synthétique<br/>
                <b>Équipements sportifs disponibles </b> :<br/>
                  - 1 paire de buts de football seniors<br/>
                  - 4 paires de buts de football juniors<br/>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        <Col className =" mt-3">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/csperwez/image/upload/v1610313388/Streetworkoutcomplete_jqs5pn.jpg"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Terrain de Football en herbe
                </Typography>
                <Typography variant="body1"  component="p">
                <b>Dimensions</b> : 108m L X 69m l<br/>
                <b>Revêtement</b> : Gazon naturel<br/>
                <b>Équipements sportifs disponibles </b> :<br/>
                  - 1 paire de buts de football seniors<br/>
                  - 4 paires de buts de football juniors<br/>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
      </Row>
      <Row className="mx-auto">
      <Col className =" mt-3" >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/csperwez/image/upload/v1610313388/Streetworkoutcomplete_jqs5pn.jpg"
              title=""
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Piste d'Athlétisme
                </Typography>
                <Typography variant="body1"  component="p">
                <b>Dimensions</b> : Piste d'athlétisme de 6 couloirs sur 400m et 8 couloirs sur 100m et 110m haies<br/>
                <b>Revêtement</b> : Tartan<br/>
                <b>Équipements sportifs disponibles</b> :<br/>
                - 1 sautoir à la perche<br/>
                - 1 sautoir en hauteur<br/>
                - 2 sautoirs en longueur<br/>
                - 1 aire de lancer du poids<br/>
                - 1 aire de lancer du javelot<br/>
                - 1 cage de lancer du disque <br/>
                - 1 fosse de steeple<br/>
                - Haies<br/>
                <b>Attention, le lancer du marteau est interdit sur le site</b><br/>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        <Col className =" mt-3">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/csperwez/image/upload/v1610313388/Streetworkoutcomplete_jqs5pn.jpg"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Terrain de Beach Volley
                </Typography>
                <Typography variant="body1"  component="p">
                  <b>Dimensions</b> : 34m L X 10m l<br/>
                  <b>Revêtement</b> : Sable<br/>
                  <b>Équipements sportifs disponibles</b> :<br/>
                  - 2 kits de beach volley (poteaux et filet)<br/>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
      </Row>
      <Row className="mx-auto">
      <Col className =" mt-3" >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/csperwez/image/upload/v1610313388/Streetworkoutcomplete_jqs5pn.jpg"
              title=""
            ></CardMedia>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Terrain de Beach Soccer
                </Typography>
                <Typography variant="body1"  component="p">
                  <b>Revêtement</b> : Sable<br/>
                  <b>Équipements sportifs disponibles</b> :<br/>
                  - 1 paire de buts de beach soccer
                  </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        <Col className =" mt-3">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/csperwez/image/upload/v1610313388/Streetworkoutcomplete_jqs5pn.jpg"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Parcours de Street Workout
                </Typography>
                <Typography variant="body1"  component="p">
                <b>Équipements disponibles</b> :<br/>
                  -table de ping-pong.<br/>
                  -parcours Street workout.<br/>
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