import React, { useEffect, useState }  from 'react';
import {HeadGenerator,CardGenerator} from './generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const Infrastructure = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){
    return (
      <div>
        <HeadGenerator title={"Infrastructure"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310974/interne_tmnlya.jpg"} title = {"Interne"} link ={"Interne"}/>
            </Col>
            <Col className =" mt-3" sm={{offset : 1}}>
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310911/externe_igsmrb.jpg"} title = {"Externe"} link ={"Externe"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 768){
    return (
      <div>
        <HeadGenerator title={"Infrastructure"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310974/interne_tmnlya.jpg"} title = {"Interne"} link ={"Interne"}/>
            </Col>
            <Col className =" mt-3" sm={{offset : 1}}>
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310911/externe_igsmrb.jpg"} title = {"Externe"} link ={"Externe"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 449){
    return (
      <div>
        <HeadGenerator title={"Infrastructure"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310974/interne_tmnlya.jpg"} title = {"Interne"} link ={"Interne"}/>
            </Col>
            <Col className =" mt-3" sm={{offset : 1}}>
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310911/externe_igsmrb.jpg"} title = {"Externe"} link ={"Externe"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width < 450){
    return (
      <div>
        <HeadGenerator title={"Infrastructure"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}}>
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310974/interne_tmnlya.jpg"} title = {"Interne"} link ={"Interne"}/>
            </Col>
            <Col className =" mt-3" sm={{offset : 1}}>
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310911/externe_igsmrb.jpg"} title = {"Externe"} link ={"Externe"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Infrastructure;