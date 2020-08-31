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
import Signin from '../common/SignIn';
import User from '../common/User';
import Link from "next/link";
import Signout from './Signout';
import RequestReset from './RequestReset';



const MyModalSignUp = (props) => {
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
const MyModalSignIn = (props) => {
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
            <Signin/>
            <br></br>
            <MyModalRequestReset title = {" Demandez un nouveau mot de passe ! "} buttonLabel="Mot de passe oublié"></MyModalRequestReset>
          </ModalBody>
        </Modal>
      </div>
    );
}

const MyModalRequestReset = (props) => {
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
            <RequestReset />
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
                <User>
                    {({data}) => {
                      console.log(data)
                      const me = data ? data.me : null
                      if(me){ 
                        return(
                          <>
                            <NavItem className='mr-1 mt-1'>
                            <Link href='/profile'>
                                <Button>
                                    <a style={{color: "white"}}>
                                        Mon Profil                                  
                                    </a>
                                </Button>  
                            </Link>
                            </NavItem>
                            <NavItem className='mr-1 mt-1'>
                            <Link href='/'>
                                <Signout />
                            </Link>
                            </NavItem>
                          </>
                        )
                      }else if (!me){
                        return(
                          <>
                            <NavItem className='mr-1 mt-1'>
                              <MyModalSignUp title = {"S'enregistrer"} buttonLabel="S'enregistrer"></MyModalSignUp>
                            </NavItem>
                            <NavItem className='mr-1 mt-1'>
                              <MyModalSignIn title = {"Se connecter"} buttonLabel="Se connecter"></MyModalSignIn>
                            </NavItem>
                          </>
                        )
                      }
                    }}
                </User>
              </Nav>
          </Collapse>
      </Navbar>
  </div>
);
}
export default MyConnectionRegistrerBar;