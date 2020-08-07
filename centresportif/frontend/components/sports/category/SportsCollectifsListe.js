import React  from 'react';
import {HeadGenerator,CardGenerator} from './Generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const SportsCollectifs = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){ 
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"} />
        <Container className="themed-container">
          <Row className="mx-5">
            <Col className =" mt-3 " sm={{offset : 2}} >
              <CardGenerator tabs = {"Volleyball.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"handball.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-5">
            <Col className =" mt-3 " sm={{offset : 4}} >
              <CardGenerator tabs = {"football.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 768){
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"Volleyball.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"handball.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 4}} >
              <CardGenerator tabs = {"football.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 450){
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"Volleyball.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"handball.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 4}} >
              <CardGenerator tabs = {"football.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width < 450){
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"Volleyball.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"handball.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"football.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default SportsCollectifs;