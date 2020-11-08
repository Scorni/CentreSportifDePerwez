import React, { Component } from 'react';
import { Mutation,useQuery } from 'react-apollo';
import gql from 'graphql-tag';

export const CREATE_ACTUALITY_MUTATION = gql`

    mutation CREATE_ACTUALITY_MUTATION(
        $title: String!
        $date: String!
        $content : String!
    )
        {
        createActuality(
            title: $title
            date: $date
            content : $content
        ){
            id
        }
    }
`;