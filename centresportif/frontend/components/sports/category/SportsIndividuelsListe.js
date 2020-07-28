import React,{ useRef, useEffect, useState } from 'react';
import {CardGenerator} from './Generator';
import { Container, Row, Col } from 'reactstrap';


const SportIndividuels = (props) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  useEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);
  if(dimensions.width < 450){
    console.log(dimensions)
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
    <div>
      <p>cheh</p>
    </div>
  }
}
  export default SportIndividuels;

  /** dimenension ==> >,1024,768,450,< */