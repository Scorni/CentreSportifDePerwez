import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MDBContainer,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView,MDBCarouselCaption } from 'mdbreact';
import  useWindowDimensions  from '../../common/WindowsProperties'




export default function interne() {
    const {width,height} = useWindowDimensions();
    const useStyles = makeStyles({
        root: {
          maxWidth: {width},
        },
      });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          height= {height/2}
          
          image="../../../static/img/Infrastructure/Interne.jpg"
          title="Contemplative Reptile"
        />
     
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Infrastructure interne
          </Typography>
          <Typography variant="body1"  component="p">
            Le centre sportif de Perwez met à votre disposition  :
            <br/>-Une salle omnisports composée de 3 plateaux
            <br/>-2 salles polyvalentes
            <br/>-3 terrains de tennis
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}