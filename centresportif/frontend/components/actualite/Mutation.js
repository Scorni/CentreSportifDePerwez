import React, { Component } from 'react';
import { Mutation,useQuery } from 'react-apollo';
import gql from 'graphql-tag';

export const CREATE_ACTUALITY_MUTATION = gql`

    mutation CREATE_ACTUALITY_MUTATION(
        $title: String!
        $formatedDate: String!
        $content : String!
    )
        {
        createActuality(
            title: $title
            date: $formatedDate
            content : $content
        ){
            id
        }
    }
`;