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




export default function Externe() {
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
          image="../../../static/img/Infrastructure/Externe.jpg"
          title="Contemplative Reptile"
        />
     
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Infrastructure externe
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
  );
}