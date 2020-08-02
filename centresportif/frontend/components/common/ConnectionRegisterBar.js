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

    const MyModal = (props) => {
        const {
            buttonLabel,
            className
          } = props;
        
          const [modal, setModal] = useState(false);
        
          const toggle = () => setModal(!modal);
        
          return (
            <div>
              <Button onClick={toggle}>{buttonLabel}</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          );
    }

    const MyConnectionRegistrerBar = (props) => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggle = () => setIsOpen(!isOpen);
    
        return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand>Connexion</NavbarBrand>
                <NavbarToggler onClick={toggle} className ="ml-auto"></NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className = 'ml-auto'>
                       
                        <NavItem className='mr-1 mt-1'>
                            <MyModal buttonLabel="Se connecter"></MyModal>
                        </NavItem>
                        <NavItem className='mr-1 mt-1'>
                            <MyModal buttonLabel="S'enregistrer"></MyModal>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
      );
    }
export default MyConnectionRegistrerBar;