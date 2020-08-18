import React, { useState } from 'react';
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button, 
} from 'reactstrap';

import MyDropdown from './Dropdown';
import { FaHome } from 'react-icons/fa';
import Link from "next/link";

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
                        <MyDropdown name ="Sports" list={"sports"}/>
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Actualité" list={"actualite"} />
                    </NavItem>
                    <NavItem className='mr-2 mt-1'>
                        <MyDropdown name ="Infos Pratiques" list={"infos"}/>
                    </NavItem>  
                    
                    <NavItem className='mr-2 mt-1 mb-1'>
                        <Link href='/list/clients'>
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