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
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Terrain synthétique
                </Typography>
                <Typography variant="body1"  component="p">
                  -Constitué de granule de plastique.<br/>
                  -Dimension standard de terrain de football.<br/> 
                  -Adapté pour d'autres sports comme le Hockey sur gazon.

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
                  Terrain de Football en herbe
                </Typography>
                <Typography variant="body1"  component="p">
                  -Constitué d'herbe du désert du Sahara.<br/>
                  -Dimension standard de terrain de football.<br/>
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
              
              image="../../../static/img/Infrastructure/externe.jpg"
              title=""
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Piste d'Athlétisme
                </Typography>
                <Typography variant="body1"  component="p">
                  -Piste de 400m constitué d'un revêtement en caoutchouc.<br/>
                  -Plateau pour lancer du disque,du marteau et du poids.<br/>
                  -Zone de lancer de javelot.<br/>
                  -Zone de saut en longueur.<br/>
                  -Zone de saut en hauteur.<br/>
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
                Terrain de Beach Volley
                </Typography>
                <Typography variant="body1"  component="p">
                  -2 terrains aux normes standard.<br/>
                  -Sable provenant de la mer du Nord.<br/>
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
              
              image="../../../static/img/Infrastructure/externe.jpg"
              title=""
            ></CardMedia>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Terrain de Beach Soccer
                </Typography>
                <Typography variant="body1"  component="p">
                  -Terrain aux normes standards.<br/>
                  -Sable provenant du Litoral.<br/>
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
                  Parcours de Street Workout
                </Typography>
                <Typography variant="body1"  component="p">
                  -Barre de tractions,barre de dips,planche pour abdominaux,etc.<br/>
                  -Engin de réeducation et de mise en forme.<br/>
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