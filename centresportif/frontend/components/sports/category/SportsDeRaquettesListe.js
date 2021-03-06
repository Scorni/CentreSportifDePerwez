import React  from 'react';
import {HeadGenerator,CardGenerator} from './generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const SportsDeRaquettes = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){
    return (
      <div>
        <HeadGenerator title={"Sports de Raquettes"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310161/tennis_ywgxqx.jpg"} title = {"Tennis"} link ={"Tennis"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310182/pingpong_omkfdq.jpg"} title = {"Tennis de Table"} link ={"Tennisdetable"} />
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310167/badminton_qfx2fj.jpg"} title = {"Badminton"} link ={"Badminton"}/>
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
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310161/tennis_ywgxqx.jpg"} title = {"Tennis"} link ={"Tennis"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310182/pingpong_omkfdq.jpg"} title = {"Tennis de Table"} link ={"Tennisdetable"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310167/badminton_qfx2fj.jpg"} title = {"Badminton"} link ={"Badminton"}/>
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
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310161/tennis_ywgxqx.jpg"} title = {"Tennis"} link ={"Tennis"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310182/pingpong_omkfdq.jpg"} title = {"Tennis de Table"} link ={"Tennisdetable"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310167/badminton_qfx2fj.jpg"} title = {"Badminton"} link ={"Badminton"}/>
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
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310161/tennis_ywgxqx.jpg"} title = {"Tennis"} link ={"Tennis"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310182/pingpong_omkfdq.jpg"} title = {"Tennis de Table"} link ={"Tennisdetable"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310167/badminton_qfx2fj.jpg"} title = {"Badminton"} link ={"Badminton"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default SportsDeRaquettes;