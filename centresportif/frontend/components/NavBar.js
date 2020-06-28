import React, { useState } from 'react';
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter } from 'reactstrap';

import MyDropdown from './Dropdown';
import { FaHome } from 'react-icons/fa';


const ListeSports = [
    "Sports individuels",
    "Sports collectifs",   
    "Arts martiaux",
    "Sports de raquette",
    "Gymnastique/Danse",
    "Infrastructure",
]   




const MyNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand>Navigation</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className = 'mx-auto'>
                    <NavItem className='mr-2 mt-1'>
                        <Button href="/"><FaHome /></Button>
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Sports" liste={ListeSports}/>
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Actualité" />
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Infos Pratiques"/>
                    </NavItem>  
                    <NavItem className='mr-2 mt-1 mb-1'>
                        <MyDropdown name ="Réservation"/>
                    </NavItem>  
                </Nav>                
            </Collapse>
        </Navbar>
    </div>
  );
}

export default MyNavbar