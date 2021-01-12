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
export const UPDATE_CONTACT_MUTATION= gql`
    mutation updateContact(
        $id : ID!
        $userId: ID!  
        $adress: String!  
        $fix: String!
        $phone: String!
        $fax: String!
        $mail: String!
        $memberOne: String!
        $memberTwo: String!
    ){
        updateContact(
            id : $id
            userId: $userId, 
            adress: $adress, 
            fix: $fix,
            phone: $phone,
            fax: $fax,
            mail: $mail,
            memberOne: $memberOne,
            memberTwo: $memberTwo,
        ){
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
export const CREATE_FAQ_MUTATION = gql`

    mutation CREATE_FAQ_MUTATION(
        $question: String!
        $formatedDate: String!
        $answer : String!
    )
        {
        createFaq(
            question: $question
            date: $formatedDate
            answer : $answer
        ){
            id
        }
    }
`;

export const DELETE_FAQ = gql`

        mutation DELETE_FAQ(
            $faqId: String!
        ){
            deleteFaq(
                faqId: $faqId
            ){
                id
            }
        }       
        
`;