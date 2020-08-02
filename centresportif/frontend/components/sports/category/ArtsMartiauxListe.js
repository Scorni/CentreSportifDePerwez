import React from 'react';
import {HeadGenerator,CardGenerator} from './Generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const ArtsMartiaux = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){
    
    return (
      <div>
        <HeadGenerator title={"Arts Martiaux"} />
        <Container className="themed-container">
          <Row className="mx-5">
            <Col className =" mt-3 " sm={{offset : 2}} >
              <CardGenerator tabs = {"judo.jpg"} title = {"Judo"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"jujutsu.jpg"} title = {"Ju-jutsu"} />
            </Col>
          </Row>
          <Row className="mx-5">
            <Col className =" mt-3 " sm={{offset : 2}} >
              <CardGenerator tabs = {"taekwendo.jpg"} title = {"Taekwendo"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"kravmaga.jpg"} title = {"Krav-maga"} />
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
              <CardGenerator tabs = {"judo.jpg"} title = {"Judo"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"jujutsu.jpg"} title = {"Ju-jutsu"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"taekwendo.jpg"} title = {"Taekwendo"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"kravmaga.jpg"} title = {"Krav-maga"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 450){
    return (
      <div>
        <HeadGenerator />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"judo.jpg"} title = {"Judo"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"jujutsu.jpg"} title = {"Ju-jutsu"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"taekwendo.jpg"} title = {"Taekwendo"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"kravmaga.jpg"} title = {"Krav-maga"}/>
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
              <CardGenerator tabs = {"judo.jpg"} title = {"Judo"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"jujutsu.jpg"} title = {"Ju-jutsu"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"taekwendo.jpg"} title = {"Taekwendo"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"kravmaga.jpg"} title = {"Krav-maga"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default ArtsMartiaux;