import React, { Component } from 'react';
import { Query,useQuery } from 'react-apollo';
import gql from 'graphql-tag';



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
export const BOOKINGS_QUERY = gql`
    
    query BOOKINGS_QUERY {
        bookings{
            idBooking,
            id,
            title,
            allDay,
            start,
            end,
            room,
            type,
            is_paid,
            userId{name,surname}
            }
    }
`;
export const MYBOOKINGS_QUERY = gql`
    
    query BOOKINGS_QUERY {
        bookingFilter{
            id,
            title,
            start,
            end,
            room,
            type,
            is_paid,
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