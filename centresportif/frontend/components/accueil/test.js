import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import Link from "next/link";
import {CURRENT_USER_QUERY} from '../common/Query'

import { Query} from 'react-apollo';
import gql from 'graphql-tag';


const User = props => (
<Query query={CURRENT_USER_QUERY}>
    {({ data, error, loading }) => {
        return(data.name)
    }}
</Query>
);

const Test = () => {
    
    return (
        <Query query={CURRENT_USER_QUERY} variables={{id:"ckeh6lpjt79u90a32i3zzqpey"}}>
        {({ data, error, loading }) => {
        if(data){
            console.log(data)
            return(<div>lul</div>)
        }else{
            return(<div>lul</div>)
        }
        }}
    </Query>
    );
   };
  
  export default Test;