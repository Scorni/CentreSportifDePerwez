import React, { Component } from 'react';
import { Mutation,useQuery } from 'react-apollo';
import gql from 'graphql-tag';

export const UPDATE_SCHEDULE_MUTATION= gql`
    mutation updateSchedule(
        $id : ID!
        $userId: ID!  
        $lundi: String!
        $mardi: String!
        $mercredi: String!
        $jeudi: String!
        $vendredi: String!
        $samedi: String!
        $dimanche: String!
        $vacances: String!
    ){
        updateSchedule(
            id : $id
            userId: $userId, 
            lundi: $lundi,
            mardi: $mardi,
            mercredi: $mercredi,
            jeudi: $jeudi,
            vendredi: $vendredi,
            samedi: $samedi,
            dimanche: $dimanche,
            vacances: $vacances
        ){
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