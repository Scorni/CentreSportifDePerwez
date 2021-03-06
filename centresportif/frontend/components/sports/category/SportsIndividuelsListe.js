import React, { useEffect, useState }  from 'react';
import {HeadGenerator,CardGenerator} from './generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const SportIndividuels = (props) => {
  const {width,height} = useWindowDimensions();
  if(width > 1024){
    return (
      <>
        <HeadGenerator title={"Sports Individuels"} />
        <Container className="themed-container">
          <Row className="mx-auto justify-content-center">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/athl%C3%A9tisme_jqdbfj.jpg"} title = {"Athlétisme"} link ={"Athletisme"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/boxe_gnsopl.jpg"} title = {"Boxe anglaise"} link ={"BoxeAnglaise"}/>
            </Col>
          </Row>
        </Container>
      </>
    )
  }else if(width > 768){
    return (
      <>
        <HeadGenerator title={"Sports Individuels"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/athl%C3%A9tisme_jqdbfj.jpg"} title = {"Athlétisme"} link ={"Athletisme"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/boxe_gnsopl.jpg"} title = {"Boxe anglaise"} link ={"BoxeAnglaise"}/>
            </Col>
          </Row>
        </Container>
      </>
    )
  }else if(width > 449){
    return (
      <>
        <HeadGenerator title={"Sports Individuels"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/athl%C3%A9tisme_jqdbfj.jpg"} title = {"Athlétisme"} link ={"Athletisme"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/boxe_gnsopl.jpg"} title = {"Boxe anglaise"} link ={"BoxeAnglaise"}/>
            </Col>
          </Row>
        </Container>
      </>
    )
  }else if(width < 450){
    return (
      <>
        <HeadGenerator title={"Sports Individuels"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}}>
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/athl%C3%A9tisme_jqdbfj.jpg"} title = {"Athlétisme"} link ={"Athletisme"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/boxe_gnsopl.jpg"} title = {"Boxe anglaise"} link ={"BoxeAnglaise"}/>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default SportIndividuels;