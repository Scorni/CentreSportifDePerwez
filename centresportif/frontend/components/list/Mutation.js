import React, { Component } from 'react';
import { Mutation,useQuery } from 'react-apollo';
import gql from 'graphql-tag';


export const CREATE_BOOKING_MUTATION= gql`
    mutation CREATE_BOOKING_MUTATION(
        $idBooking : Int!
        $title: String!
        $allDay: Boolean!
        $start: String!
        $end: String!
        $room: String!
        $type: String!
        $is_paid: Boolean!
    ){
        createBooking(
        idBooking : $idBooking
        title : $title
        allDay : $allDay
        start : $start
        end : $end
        room: $room
        type : $type
        is_paid : $is_paid
        ){
            id
        }
    }
`
export const DELETE_MY_BOOKING = gql`

        mutation DELETE_MY_BOOKING(
            $id: String!
        ){
            deleteMyBooking(
                id: $id
            ){
                id
            }
        }       
        
`;