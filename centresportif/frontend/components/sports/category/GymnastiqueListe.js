import React  from 'react';
import {HeadGenerator,CardGenerator} from './generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const Gymnastique = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){
    return (
      <div>
        <HeadGenerator title={"Gymnastique"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310181/musculation_f8iioa.jpg"} title = {"Musculation"}  link ={"Musculation"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/relaxation_a0losx.jpg"} title = {"Relaxation"} link ={"Relaxation"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 768){
    return (
      <div>
        <HeadGenerator title={"Gymnastique"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310181/musculation_f8iioa.jpg"} title = {"Musculation"} link ={"Musculation"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/relaxation_a0losx.jpg"} title = {"Relaxation"} link ={"Relaxation"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 450){
    return (
      <div>
        <HeadGenerator title={"Gymnastique"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310181/musculation_f8iioa.jpg"} title = {"Musculation"} link ={"Musculation"}/>
            </Col>
            <Col className =" mt-3">
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/relaxation_a0losx.jpg"} title = {"Relaxation"} link ={"Relaxation"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width < 450){
    return (
      <div>
        <HeadGenerator title={"Gymnastique"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310181/musculation_f8iioa.jpg"} title = {"Musculation"} link ={"Musculation"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/relaxation_a0losx.jpg"} title = {"Relaxation"} link ={"Relaxation"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Gymnastique;