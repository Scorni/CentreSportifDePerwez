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
const ListeSports = [
    {
        category : "Sport Individuel",
        name : "Tennis",
    },
    {   
        category : "Sport individuel",
        name:'Golf'
    }
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
                        <MyDropdown header={ListeSports[0]['category']} name ="Sports" />
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Actualité" liste = {ListeSports[1]['name']} />
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