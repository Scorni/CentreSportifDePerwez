import React, { Component } from 'react';
import { Query } from 'react-apollo';
import USERS_QUERY from '../../components/list/Query'
import {Table} from 'reactstrap'
import User from '../common/User';
import Link from "next/link";
import { Button,Container, Row, } from 'reactstrap';
import {HeadGenerator} from '../sports/category/generator';
import SVGTest from '../../public/static/img/svg/generatedJsFromsvg/profile.js';
class Profile extends Component {
    render() {
        return (
            <div>
                <HeadGenerator title={"Mon Profil"} />
                <User>
                    {({data}) => {
                      const me = data ? data.me : null
                      if(me){
                        if(me.permissions[1] === "ADMIN" && me.permissions[2] === "SADMIN"){ 
                            return(
                                <>
                                    <Container className="themed-container" fluid={true}>
                                        
                                        <Row className="mx-auto justify-content-center">
                                            <div className="styledDiv" >
                                                <h2>Informations personnelles</h2>
                                                <p><strong>Prenom :</strong> {me.surname}</p>
                                                <p><strong>Nom :</strong> {me.name}</p>
                                                <p><strong>Adresse mail :</strong> {me.email}</p>
                                                <p><strong>Adresse :</strong> {me.adress}</p>
                                                <p><strong>Ville :</strong> {me.city}</p>
                                                <p><strong>Identifiant :</strong> {me.id}</p>
                                            </div>
                                        </Row>
                                        <Row className="mx-auto justify-content-center">
                                            <Link href='/list/locations' >
                                                <Button className="m-2 mt-1">Liste des réservations</Button>
                                            </Link>
                                            <Link href='/list/users'>
                                                <Button className="m-2 mt-1 ">Liste des utilisateurs</Button>
                                            </Link>
                                            <Link href='/permissions'>
                                                <Button className="m-2 mt-1 ">Gérer les permissions</Button>
                                            </Link>
                                        </Row>
                                    </Container>
                                </>
                            )
                            }else if(me.permissions[1] === "ADMIN"){
                                return(
                                    <>
                                        <Container className="themed-container profilesvg" fluid={true}>
                                            
                                            <Row className="mx-auto justify-content-center">
                                                <div className="styledDiv" >
                                                    <h2>Informations personnelles</h2>
                                                    <p><strong>Prenom :</strong> {me.surname}</p>
                                                    <p><strong>Nom :</strong> {me.name}</p>
                                                    <p><strong>Adresse mail :</strong> {me.email}</p>
                                                    <p><strong>Adresse :</strong> {me.adress}</p>
                                                    <p><strong>Ville :</strong> {me.city}</p>
                                                    <p><strong>Identifiant :</strong> {me.id}</p>
                                                </div>
                                            </Row>
                                            <Row className="mx-auto justify-content-center">
                                                <Link href='/list/locations' >
                                                    <Button className="m-2 mt-1">Liste des réservations</Button>
                                                </Link>
                                                <Link href='/list/users'>
                                                    <Button className="m-2 mt-1 ">Liste des utilisateurs</Button>
                                                </Link>
                                            </Row>
                                        </Container>
                                    </>
                                )
                            }
                        else if(me.permissions[0] === "USER"){
                            return(
                            <Container className="themed-container profilesvg" fluid={true}>   
                                <Row className="mx-auto justify-content-center ">
                                    <div className="styledDiv bluredInformations" >
                                        <h2>Informations personnelles</h2>
                                        <p><strong>Prenom :</strong> {me.surname}</p>
                                        <p><strong>Nom :</strong> {me.name}</p>
                                        <p><strong>Adresse mail :</strong> {me.email}</p>
                                        <p><strong>Adresse :</strong> {me.adress}</p>
                                        <p><strong>Ville :</strong> {me.city}</p>
                                        <p><strong>Identifiant :</strong> {me.id}</p>
                                    </div>
                                </Row>
                                <Row className="mx-auto justify-content-center">
                                    <Link href='/list/mylocations' >
                                        <Button className="m-2 mt-1">Voir mes réservations</Button>
                                    </Link>
                                </Row>
                            </Container>
                            )
                        }}else{
                            return(
                                <Container className="themed-container profilesvg" fluid={true} >
                                    <Row className="mx-auto justify-content-center">
                                        <div className= "styledDiv">
                                            <p>
                                                <strong>
                                                    <h3>Vous devez être connecté pour accéder à cette page</h3>
                                                </strong>
                                            </p>
                                        </div>
                                    </Row>
                                </Container>
                            )
                        }}}
                    </User>
            </div>
        );
    }
}

export default Profile;