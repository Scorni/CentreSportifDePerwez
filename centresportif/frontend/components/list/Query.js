import React, { Component } from 'react';
import { Query,useQuery } from 'react-apollo';
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
            city,
            email
        }
    }
`;

export const LOCATIONS_QUERY = gql`
    
    query LOCATIONS_QUERY {
        locations{
            id
            sport,
            is_paid,
            hour,
            day
            roomName{name,id},
            userId{name,surname}
            }
    }
`;
export const ROOMS_QUERY = gql`
    
    query ROOMS_QUERY {
        rooms{
            name,
            id,
            uniqueNameSport,
            sport
            }
    }
`;
export const ROOMSFILTER_QUERY = gql`
    
    query ROOMSFILTER_QUERY (
        $name: String!
        $sport: String!
    ){

        roomsFilter(name: $name,sport:$sport){
            id
        }
    }
`;

export default USERS_QUERY