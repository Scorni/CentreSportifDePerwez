import React, { Component } from 'react';
import { Query} from 'react-apollo';
import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
 query CURRENT_USER_QUERY(
    $id: String!
    ) {
    me (id: $id){
    id
    email
    name
    surname
    permissions
  }
}
`;
