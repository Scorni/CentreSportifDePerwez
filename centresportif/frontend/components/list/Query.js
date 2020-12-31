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
export const BOOKINGS_QUERY = gql`
    
    query BOOKINGS_QUERY {
        bookings{
            idBooking
            title,
            allDay,
            start,
            end,
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

export const MYLOCATIONS_QUERY = gql`
    
    query LOCATIONS_QUERY {
        locationFilter{
            id
            sport
            day
            hour
            is_paid
            }
    }
`;
export default USERS_QUERY