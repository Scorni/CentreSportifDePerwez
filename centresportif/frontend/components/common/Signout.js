import React, { Component } from 'react';
import { Mutation } from  'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import  { Button } from 'reactstrap';
import Link from "@material-ui/core/Link";

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION{
        signout{
            message
        }
    }
`;
const Signout = props => (
    <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{query: CURRENT_USER_QUERY}]}>
        {(signout) => <Link href='/' ><Button onClick={signout} className = "customButton">Se déconnecter</Button></Link>}       
    </Mutation>
)

export default Signout;