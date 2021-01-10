import React  from 'react';
import {HeadGenerator,CardGenerator} from './generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const SportsCollectifs = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){ 
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"} />
        <Container className="themed-container ContainerCard">
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/volleyball_gxbfru.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310171/handball_nk82ak.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/football_vupsjf.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 1091){
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"}/>
        <Container className="themed-container ContainerCard">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/volleyball_gxbfru.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310171/handball_nk82ak.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/football_vupsjf.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 768){
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"}/>
        <Container className="themed-container ContainerCard">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/volleyball_gxbfru.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310171/handball_nk82ak.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-auto" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/football_vupsjf.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 450){
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"}/>
        <Container className="themed-container ContainerCard">
          <Row className="mx-auto">
            <Col className =" mt-auto"  >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/volleyball_gxbfru.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-auto">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310171/handball_nk82ak.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-auto" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/football_vupsjf.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width < 450){
    return (
      <div>
        <HeadGenerator title={"Sports Collectifs"}/>
        <Container className="themed-container ContainerCard">
          <Row className="mx-auto">
            <Col className =" mt-auto" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310170/volleyball_gxbfru.jpg"} title = {"Volley-ball"} link ={"Volleyball"}/>
            </Col>
            <Col className =" mt-auto" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310171/handball_nk82ak.jpg"} title = {"Handball"} link ={"Handball"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-auto" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/football_vupsjf.jpg"} title = {"Football"} link ={"Football"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default SportsCollectifs;