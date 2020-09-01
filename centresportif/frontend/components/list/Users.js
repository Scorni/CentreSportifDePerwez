import React, { Component } from 'react';
import { Query } from 'react-apollo';
import USERS_QUERY from '../../components/list/Query'
import {Table} from 'reactstrap'
import User from '../common/User';
import Link from "next/link";
import { Button,Container, Row, } from 'reactstrap';
import {HeadGenerator} from '../sports/category/Generator';

class Users extends Component {
    render() {
        return (
            <div>
            <HeadGenerator title={"Liste des utilisateurs"} />
            <User>
                {({data}) => {
                  const me = data ? data.me : null
                  if(me.permissions[1] === "ADMIN"){ 
                    return(
                      <>
                      <Container className="themed-container" fluid={true} className="" >
                        <Row className="mx-auto justify-content-center">
                        <Query query={USERS_QUERY}>
                            {({ data, error, loading }) => {
                                if(loading) return <p> Loading...</p>
                                if(error) return <p> Error : { error.message }</p>
                                console.log(data);
                                return <div><Container className="themed-container" fluid={true} className="" >
                                <Row className="mx-auto justify-content-center">
                                    
                                    <Table dark hover responsive striped>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nom</th>
                                                <th>Prénom</th>
                                                <th>Adresse</th>
                                                <th>Ville</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.users.map(
                                                users => 
                                                    <tr>
                                                        <td>{users.id}</td>
                                                        <td>{users.name}</td>
                                                        <td>{users.surname}</td>
                                                        <td>{users.adress}</td>
                                                        <td>{users.city}</td>
                                                        <td>{users.email}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table> 
                                    </Row>
                                    </Container>
                                </div>
                            }}
                        </Query>
                        </Row>
                        </Container>
                      </>
                    )
                  }
                }}
                </User>
        </div>
        );
    }
}

export default Users;