import React, { Component } from 'react';
import { Query} from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

export const CURRENT_USER_QUERY = gql`
 query {
    me {
    id
    email
    name
    surname
    permissions
  }
}
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export const ALL_USERS_QUERY = gql`
query {
   users {
   id
   name
   email
   permissions
 }
}
`;
export default User;