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
        <Navbar  light expand="md" className="customNav">
            <NavbarBrand style={{color: "white"}}>Navigation</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className = 'mx-auto'>
                    <NavItem className='mr-2 mt-1'>
                    <Link href='/' style={{color: "white"}}>
                        <Button color="light" className = "customButton">
                            
                                <FaHome />                                    
                            
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
                        <Link href='/createLocation'>
                            <Button className = "customButton">
                                Réservation
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