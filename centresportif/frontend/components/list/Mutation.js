import React, { Component } from 'react';
import { Mutation,useQuery } from 'react-apollo';
import gql from 'graphql-tag';

/** userId replace with current user id through jwt,roomname = roomid */
export const CREATE_LOCATION_MUTATION = gql`

    mutation CREATE_LOCATION_MUTATION(
        $sport : String!
        $hour : String!
        $day : String!
        
    ){
        createLocation(
            sport:  $sport
            hour: $hour
            day: $day
            roomName: "ckecqhr5ypm7v0a32faivetpj"
            userId: "ckecqhpxepm7j0a32tra1552l"
            is_paid: true
        ){
            sport
        }
    }
`;