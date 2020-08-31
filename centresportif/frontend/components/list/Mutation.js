import React, { Component } from 'react';
import { Mutation,useQuery } from 'react-apollo';
import gql from 'graphql-tag';

/** userId replace with current user id through jwt,roomname = roomid */
export const CREATE_LOCATION_MUTATION = gql`

    mutation CREATE_LOCATION_MUTATION(
        $sport : String!
        $hour : String!
        $day : String!
        $roomName : String!
    ){
        createLocation(
            sport:  $sport
            hour: $hour
            day: $day
            roomName: $roomName
            is_paid: true
        ){
            sport
        }
    }
`;