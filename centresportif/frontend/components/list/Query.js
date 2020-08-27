import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

 export const CLIENTS_QUERY = gql`
    
    query CLIENTS_QUERY {
        clients{
            id
            name,
            surname,
            adress,
            mail
        }
    }
`;

export const USERS_QUERY = gql`
    
    query USERS_QUERY {
        users{
            id
            name,
            surname,
            adress,
            mail
        }
    }
`;

export const LOCATIONS_QUERY = gql`
    
    query LOCATIONS_QUERY {
        locations{
            id
            sport,
            is_paid,
            roomName{name},
            userId{name,surname}
            }
    }
`;

export default CLIENTS_QUERY