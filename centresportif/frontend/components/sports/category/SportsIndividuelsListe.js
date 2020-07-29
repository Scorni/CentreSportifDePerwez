import React from 'react';
import {CardGenerator} from './Generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

/** definir la taille pour la page des sports individuels */
const SportIndividuels = (props) => {
  const {width,height} = useWindowDimensions();

  
  if(width > 450){
    
    return (
      <Container className="themed-container">
        <Row className="mx-auto">
          <Col className =" mt-3" >
            <CardGenerator tabs = {"athletisme.jpg"} />
          </Col>
          <Col className =" mt-3">
            <CardGenerator tabs = {"athletisme.jpg"} />
          </Col>
          <Col className =" mt-3">
            <CardGenerator tabs = {"athletisme.jpg"} />
          </Col>
        </Row>
      </Container>
    )
  }else{
    return (
      <div>
        <p>cheh</p>
      </div>
    )
  }
}
  export default SportIndividuels;

  /** dimenension ==> >,1024,768,450,< */