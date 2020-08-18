import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CLIENTS_QUERY = gql`
    
    query CLIENTS_QUERY {
        clients{
            name,
            surname
        }
    }
`;

export default CLIENTS_QUERY;