import React, { useEffect }  from 'react';
import {CardGenerator} from './Generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

/** definir la taille pour la page des sports individuels */
const SportIndividuels = (props) => {
  const {width,height} = useWindowDimensions();

  useEffect(() => {
    console.log("it works");
  })
  if(width > 1024){
    
    return (
      <Container className="themed-container">
        <Row className="mx-5">
          <Col className =" mt-3 " sm={{offset : 2}} >
            <CardGenerator tabs = {"athlétisme.jpg"} title = {"Athlétisme"} />
          </Col>
          <Col className =" mt-3">
            <CardGenerator tabs = {"boxe.jpg"} title = {"Boxe anglaise"}/>
          </Col>
        </Row>
      </Container>
    )
  }else if(width > 768){
    return (
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
    )
  }else if(width > 450){
    return (
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
    )
  }else if(width < 450){
    return (
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
    )
  }else if(width){
    return (
      <p>
        salam
      </p>
    )
  }
}

  export default SportIndividuels;

  /** dimenension ==> >,1024,768,450,< */