import React  from 'react';
import {HeadGenerator,CardGenerator} from './generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const Multisports = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){
    return (
      <div>
        <HeadGenerator title={"Multisports"} />
        <Container className="themed-container">
          <Row className="mx-5">
            <Col className =" mt-3 " sm={{offset : 3}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/multisports_kowkb2.jpg"} title = {"Multisports"} link ={"Multisports"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 768){
    return (
      <div>
        <HeadGenerator title={"Multisports"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 4}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/multisports_kowkb2.jpg"} title = {"Multisports"} link ={"Multisports"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 450){
    return (
      <div>
        <HeadGenerator title={"Multisports"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 4}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/multisports_kowkb2.jpg"} title = {"Multisports"} link ={"Multisports"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width < 450){
    return (
      <div>
        <HeadGenerator title={"Multisports"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310174/multisports_kowkb2.jpg"} title = {"Multisports"} link ={"Multisports"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Multisports;