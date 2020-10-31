import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  useWindowDimensions  from '../../common/WindowsProperties'
import {HeadGenerator} from '../../sports/category/generator';
import { Container, Row, Col } from 'reactstrap';





export default function interne() {
    const {width,height} = useWindowDimensions();
    const useStyles = makeStyles({
        root: {
          maxWidth: {width},
        },
      });
  const classes = useStyles();

  return (
    <div>
    <HeadGenerator title={"Infrastructure interne"} />
    <Container className="themed-container ContainerCard">
      <Row className="mx-auto">
        <Col className =" mt-3" >
          <Card className={classes.root}>
            <CardMedia
              component="img"
              
              image="../../../static/img/Infrastructure/interne.jpg"
              title=""
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Salle omnisports
                </Typography>
                <Typography variant="body1"  component="p">
                  -Composée de 3 plateaux.<br/>
                  -revêtement en ... <br/>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        <Col className =" mt-3">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="../../../static/img/Infrastructure/interne.jpg"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  2 salles polyvalentes
                </Typography>
                <Typography variant="body1"  component="p">
                  -possibilité de différent revêtement(ex: tatami).<br/>
                  -une des 2 salles possédant un miroir.<br/>
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
              
              image="../../../static/img/Infrastructure/interne.jpg"
              title=""
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  3 terrains de Tennis
                </Typography>
                <Typography variant="body1"  component="p">
                  -Se situant dans le batiment annexe au Centre Sportif de Perwez<br/>
                  -Le revetement des terrains est constitué de terre battue.<br/>
                  -Ventilation du terrain.<br/>
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