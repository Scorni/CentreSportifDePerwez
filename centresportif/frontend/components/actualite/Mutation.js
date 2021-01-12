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

export const DELETE_ACTUALITY = gql`

        mutation DELETE_ACTUALITY(
            $actualityId: String!
        ){
            deleteActuality(
                actualityId: $actualityId
            ){
                id
            }
        }       
        
`;
export const CREATE_STAGE_MUTATION = gql`

mutation CREATE_STAGE_MUTATION(
    $title: String!
    $formatedDate: String!
    $content : String!
)
    {
    createStage(
        title: $title
        date: $formatedDate
        content : $content
    ){
        id
    }
}
`;

export const DELETE_STAGE = gql`

    mutation DELETE_STAGE(
        $stageId: String!
    ){
        deleteStage(
            stageId: $stageId
        ){
            id
        }
    }       
    
`;