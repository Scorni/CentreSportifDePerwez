import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import Link from "next/link";

const MyReservation = (props) => {
    return (
    <div >
        <Container style={{padding:"10px"}} >
            <Row style={{padding:"15px",boxShadow :"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"}}>
                <Col sm={{ size: 'auto', offset: 3 }}>
                    <h5>Souhaitez-vous effectuer une réservation?
                    <Link  href={'/clients'}>
                        <Button style={{marginLeft:"30px"}}>Cliquez ici !</Button>
                    </Link>
                    </h5>
                </Col>
            </Row>
        </Container>
    </div>
 
    );
  }
  
  export default MyReservation;