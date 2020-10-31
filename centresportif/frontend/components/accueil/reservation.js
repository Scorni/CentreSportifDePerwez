import React, { useState } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import Link from "next/link";
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    } from 'reactstrap';

const MyReservation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div>
                <Nav className="customNav" >
                    <Navbar light expand="md"  >
                        <NavbarBrand  style={{color: "white"}} >Reservation</NavbarBrand>
                    </Navbar>
                </Nav>
            </div>
            <div className="locationHomeSvg">
                <Container className="themed-container " fluid={true}   >
                    <div className="locationHomeQ">
                        <h5 style={{padding:"auto"}}>
                            <span className = "bluredTitle">
                                Effectuer une réservation?
                            </span>
                        </h5>
                        <Link  href={'/createLocation'}>
                            <Button style={{marginTop:"10px"}} className="customReservationButton">Cliquez ici !</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
  }
  
  export default MyReservation;