import React, { useState, Component } from 'react';
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

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Signup from '../common/Signup';




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
          <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
          <ModalBody>
            <Signup />
          </ModalBody>
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
                      <MyModal title = {"Se connecter"} buttonLabel="Se connecter"></MyModal>
                  </NavItem>
                  <NavItem className='mr-1 mt-1'>
                      <MyModal title = {"S'enregistrer"} buttonLabel="S'enregistrer"></MyModal>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>
  </div>
);
}
export default MyConnectionRegistrerBar;