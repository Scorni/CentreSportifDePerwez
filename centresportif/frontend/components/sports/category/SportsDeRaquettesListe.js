import React  from 'react';
import {HeadGenerator,CardGenerator} from './Generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const SportsDeRaquettes = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){
    return (
      <div>
        <HeadGenerator title={"Sports de Raquettes"} />
        <Container className="themed-container">
          <Row className="mx-5">
            <Col className =" mt-3 " sm={{offset : 2}} >
              <CardGenerator tabs = {"tennis.jpg"} title = {"Tennis"} link ={"Tennis"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"pingpong.jpg"} title = {"Tennis de Table"} link ={"TennisDeTable"} />
            </Col>
          </Row>
          <Row className="mx-5">
            <Col className =" mt-3 " sm={{offset : 4}} >
              <CardGenerator tabs = {"badminton.jpg"} title = {"Badminton"} link ={"Badminton"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 768){
    return (
      <div>
        <HeadGenerator title={"Sports de Raquettes"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"tennis.jpg"} title = {"Tennis"} link ={"Tennis"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"pingpong.jpg"} title = {"Tennis de Table"} link ={"TennisDeTable"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 4}} >
              <CardGenerator tabs = {"badminton.jpg"} title = {"Badminton"} link ={"Badminton"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 450){
    return (
      <div>
        <HeadGenerator title={"Sports de Raquettes"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"tennis.jpg"} title = {"Tennis"} link ={"Tennis"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"pingpong.jpg"} title = {"Tennis de Table"} link ={"TennisDeTable"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 4}} >
              <CardGenerator tabs = {"badminton.jpg"} title = {"Badminton"} link ={"Badminton"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width < 450){
    return (
      <div>
        <HeadGenerator title={"Sports de Raquettes"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"tennis.jpg"} title = {"Tennis"} link ={"Tennis"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"pingpong.jpg"} title = {"Tennis de Table"} link ={"TennisDeTable"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"badminton.jpg"} title = {"Badminton"} link ={"Badminton"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default SportsDeRaquettes;