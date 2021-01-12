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
              image="https://res.cloudinary.com/csperwez/image/upload/v1610311676/Salle_annexe_1_qgt71s.jpg"
              title=""
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Salle polyvalente 1
                </Typography>
                <Typography variant="body1"  component="p">
                <b>Dimensions</b> : 20m L X 6,30m l X 4m H<br/>
                <b>Descriptif</b> : Cette salle est destinée à la pratique de la danse, des arts martiaux, de la gymnastique d'entretien, du fitness,...<br/>
                <b>Les jeux de ballons y sont interdits.</b><br/>
                <b>Revêtement de sol</b> : Linoléum<br/>
                <b>Équipements sportifs disponibles</b> : <br/>
                - Barres de danse<br/>
                - Miroirs fixes<br/>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        <Col className =" mt-3">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/csperwez/image/upload/v1610311775/Salle_annexe_2_tntjo3.jpg"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Salle polyvalente 2
                </Typography>
                <Typography variant="body1"  component="p">
                <b>Dimensions</b> : 20m L X 6,30m l X 4m H<br/>
                <b>Descriptif</b> : Cette salle est destinée à la pratique de la danse, des arts martiaux, de la gymnastique d'entretien, du fitness,...<br/>
                <b>Les jeux de ballons y sont interdits.</b><br/>
                <b>Revêtement de sol</b> : Linoléum<br/>
                <b>Équipements sportifs disponibles</b> : <br/>
                - Miroirs mobiles<br/>
                - Potences pour sacs de frappe<br/>
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
              image="https://res.cloudinary.com/csperwez/image/upload/v1610311350/Tennis_gh5dtj.jpg"
              title=""
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Terrains de Tennis
                </Typography>
                <Typography variant="body1"  component="p">
                  Se situant dans le batiment annexe au Centre Sportif de Perwez<br/>
                  <b>Dimensions</b> : 3 terrains de tennis<br/>
                  <b>Revêtement</b> : Synthétique<br/>
                  <b>Équipements sportifs disponibles</b> :<br/>
                    - 3 ensembles d'équipement fixes pour tennis (poteaux et filet)<br/>
                    - 1 chaise d'arbitre par terrain<br/>
                    - Filets de séparation entre les terrains<br/>
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
              image="https://res.cloudinary.com/csperwez/image/upload/v1610310974/interne_tmnlya.jpg"
              title=""
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Hall omnisport                
                </Typography>
                <Typography variant="body1"  component="p">
                <b>Dimensions</b> : 44m L X 34m l X 14m H<br/>
                <b>Tracés au sol </b>: <br/>
                - Football en salle/Handball : 1 terrain<br/>
                - Volley-ball : 3 terrains<br/>
                - Tennis : 3 terrains<br/>
                - Basket-ball : 2 terrains<br/>
                - Badminton : 4 terrains<br/>
                <b>Revêtement de sol</b> : Taraflex<br/>
                <b>Équipements sportifs disponibles</b> : <br/>
                - 1 paire de buts de football en salle/handball<br/>
                - 3 kits de volley-ball (poteaux, filet et antenne)<br/>
                - 3 ensembles d'équipement pour tennis (poteaux et filet)<br/>
                - 4 ensembles d'équipement pour badminton (poteaux et filet)<br/>
                - Matériel de gymnastique<br/>
                - Bancs suédois<br/>
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