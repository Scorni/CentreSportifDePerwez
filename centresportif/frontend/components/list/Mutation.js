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

export const DELETE_MY_LOCATION = gql`

        mutation DELETE_MY_LOCATION(
            $locationId: String!
        ){
            deleteMyLocation(
                locationId: $locationId
            ){
                id
            }
        }       
        
`;
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

/*export const CREATE_BOOKING_MUTATION= gql`
    mutation CREATE_BOOKING_MUTATION(
        $bookings: []*/