import React, { Component } from 'react';
import { Query,useQuery } from 'react-apollo';
import gql from 'graphql-tag';

export const SCHEDULE_QUERY = gql`
    
    query SCHEDULE_QUERY {
        bookings{
            
            lundi,
            mardi,
            mercredi,
            jeudi,
            vendredi,
            samedi,
            dimanche,

            }
    }
`;
export const SCHEDULEFILTER_QUERY = gql`
    
    query SCHEDULEFILTER_QUERY (
        $id: String!
    ){

        scheduleFilter(id: $id){
            lundi,
            mardi,
            mercredi,
            jeudi,
            vendredi,
            samedi,
            dimanche,
            vacances
        }
    }
`;