import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { perPage } from '../../config';

export const ACTUALITY_QUERY = gql`

    query ACTUALITY_QUERY($skip: Int = 0, $first: Int = ${perPage})
        {
        actualities(first: $first,skip: $skip,orderBy: date_DESC){
            title
            date
            content
            id
        }
    }
`;