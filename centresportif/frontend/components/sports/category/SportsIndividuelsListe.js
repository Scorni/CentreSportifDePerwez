import React, { useEffect, useState }  from 'react';
import {HeadGenerator,CardGenerator} from './Generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const SportIndividuels = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){
    return (
      <div>
        <HeadGenerator title={"Sports Individuels"} />
        <Container className="themed-container">
          <Row className="mx-5">
            <Col className =" mt-3 " sm={{offset : 2}} >
              <CardGenerator tabs = {"athlétisme.jpg"} title = {"Athlétisme"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"boxe.jpg"} title = {"Boxe anglaise"} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 768){
    return (
      <div>
        <HeadGenerator />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"athlétisme.jpg"} title = {"Athlétisme"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"boxe.jpg"} title = {"Boxe anglaise"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 449){
    return (
      <div>
        <HeadGenerator />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"athlétisme.jpg"} title = {"Athlétisme"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"boxe.jpg"} title = {"Boxe anglaise"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width < 450){
    return (
      <div>
        <HeadGenerator />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"athlétisme.jpg"} title = {"Athlétisme"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"boxe.jpg"} title = {"Boxe anglaise"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default SportIndividuels;