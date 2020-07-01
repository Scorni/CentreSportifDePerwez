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
import Link from "next/link";
import styled from 'styled-components';
import { Dropdown,DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';



const ListSports = [
    "Sports individuels",
    "Sports collectifs",   
    "Arts martiaux",
    "Sports de raquette",
    "Gymnastique",
    "Danse",
    "Infrastructure",
]   
const ListNews = [
    "Actualité Sportives",
    "Evènements",
    "Actualité du Centre",
    "Stage"
]
const ListeInfos= [
    "Histoire du Centre",
    "Cafétaria",
    "Foire aux questions",
    "Contact",
    "Horaire"
]

const StyledLink = styled(Link)`
    color: white;
    text-color:white;
`


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
                    <Link href='/'>
                        <Button>
                            <a style={{color: "white"}}>
                                <FaHome />                                    
                            </a>
                        </Button>  
                    </Link>
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Sports" list={ListSports}/>
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Actualité" list={ListNews} />
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Infos Pratiques" list={ListeInfos}/>
                    </NavItem>  
                    
                    <NavItem className='mr-2 mt-1 mb-1'>
                        <Link href='/creation'>
                            <Button style={{width:"140px"}}>
                                <a style={{color: "white"}}>Réservation</a>
                            </Button>
                        </Link>
                    </NavItem>  
                </Nav>                
            </Collapse>
        </Navbar>
    </div>
  );
}

export default MyNavbar