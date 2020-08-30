import React, { Component } from 'react';
import { Mutation,useQuery } from 'react-apollo';
import gql from 'graphql-tag';

/** userId replace with current user id through jwt,roomname = roomid */
export const CREATE_USER_MUTATION = gql`

    mutation CREATE_USER_MUTATION(
        $email : String!   
        $password : String!
        $name : String!
        $surname : String!
        $adress : String!
        $city : String!
    ){
        signup(
            email:  $email
            password: $password
            name: $name
            surname: $surname
            adress: $adress
            city: $city
            has_bill: false
            is_Admin: false
            is_SAdmin: false
        ){
            name
        }
    }
`;