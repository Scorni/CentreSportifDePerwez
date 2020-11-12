import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const ACTUALITY_QUERY = gql`

    query ACTUALITY_QUERY
        {
        actualities{
            title
            date
            content
            id
        }
    }
`;