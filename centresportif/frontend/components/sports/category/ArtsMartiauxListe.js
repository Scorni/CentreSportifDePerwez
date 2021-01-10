import React from 'react';
import {HeadGenerator,CardGenerator} from './generator';
import { Container, Row, Col } from 'reactstrap';
import  useWindowDimensions  from '../../common/WindowsProperties'

const ArtsMartiaux = (props) => {
  const {width,height} = useWindowDimensions();
  
  if(width > 1024){
    
    return (
      <div>
        <HeadGenerator title={"Arts Martiaux"} />
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310178/judo_grk0rh.jpg"} title = {"Judo"} link ={"Judo"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310179/jujutsu_nodd2b.jpg"} title = {"Ju-jutsu"} link ={"Jujutsu"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310163/taekwendo_elxq50.jpg"} title = {"Taekwendo"} link ={"Taekwendo"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310173/kravmaga_rlcwje.jpg"} title = {"Krav-maga"} link ={"Kravmaga"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3 " sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310161/aikido_yossxq.jpg"} title = {"Aïkido"} link ={"Aikido"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 768){
    return (
      <div>
        <HeadGenerator title={"Arts Martiaux"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
            <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310178/judo_grk0rh.jpg"} title = {"Judo"} link ={"Judo"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310179/jujutsu_nodd2b.jpg"} title = {"Ju-jutsu"} link ={"Jujutsu"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310163/taekwendo_elxq50.jpg"} title = {"Taekwendo"} link ={"Taekwendo"}/>
            </Col>
            <Col className =" mt-3" >
             <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310173/kravmaga_rlcwje.jpg"} title = {"Krav-maga"} link ={"Kravmaga"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310161/aikido_yossxq.jpg"} title = {"Aïkido"} link ={"Aikido"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width > 450){
    return (
      <div>
        <HeadGenerator title={"Arts Martiaux"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
            <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310178/judo_grk0rh.jpg"} title = {"Judo"} link ={"Judo"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310179/jujutsu_nodd2b.jpg"} title = {"Ju-jutsu"} link ={"Jujutsu"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310163/taekwendo_elxq50.jpg"} title = {"Taekwendo"} link ={"Taekwendo"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310173/kravmaga_rlcwje.jpg"} title = {"Krav-maga"} link ={"Kravmaga"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 2}}>
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310161/aikido_yossxq.jpg"} title = {"Aïkido"} link ={"Aikido"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }else if(width < 450){
    return (
      <div>
        <HeadGenerator title={"Arts Martiaux"}/>
        <Container className="themed-container">
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
            <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310178/judo_grk0rh.jpg"} title = {"Judo"} link ={"Judo"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310163/taekwendo_elxq50.jpg"} title = {"Taekwendo"} link ={"Taekwendo"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}} >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310163/taekwendo_elxq50.jpg"} title = {"Taekwendo"} link ={"Taekwendo"}/>
            </Col>
            <Col className =" mt-3" >
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310173/kravmaga_rlcwje.jpg"} title = {"Krav-maga"} link ={"Kravmaga"}/>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className =" mt-3" sm={{offset : 1}}>
              <CardGenerator tabs = {"https://res.cloudinary.com/csperwez/image/upload/v1610310161/aikido_yossxq.jpg"} title = {"Aïkido"} link ={"Aikido"}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default ArtsMartiaux;