import React, { Component } from 'react';
import { Query,useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { perPage } from '../../config';

export const FAQ_QUERY = gql`

    query FAQ_QUERY($skip: Int = 0, $first: Int = ${perPage})
        {
        faqs(first: $first,skip: $skip,orderBy: date_DESC){
            question
            date
            answer
            id
        }
    }
`;
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
export const CONTACT_QUERY = gql`
    
    query CONTACT_QUERY {
        contacts{
            
            adress,
            fix,
            phone,
            fax,
            mail,
            memberOne,
            memberTwo,
            }
    }
`;
export const CONTACTFILTER_QUERY = gql`
    
    query CONTACTFILTER_QUERY (
        $id: String!
    ){

        contactFilter(id: $id){
            adress,
            fix,
            phone,
            fax,
            mail,
            memberOne,
            memberTwo,
        }
    }
`;