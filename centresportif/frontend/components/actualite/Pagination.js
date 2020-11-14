import react from "react";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {perPage } from '../../config';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'reactstrap';

const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY
        {
        actualitiesConnection{
            aggregate {
                count
            }
        }
    }
`;
const Pagination = props => {
    return(
        <>
        <Query query={PAGINATION_QUERY}>
            {({data,loading,error}) =>{
                if (loading) return <p>Loading...</p>
                    const count = data.actualitiesConnection.aggregate.count;
                    const pages = Math.ceil(count / perPage);
                    const page = props.page;
                return(
                        <>
                        <Head>
                            <title>
                                Actualité Page {page} sur {pages}
                            </title>
                        
                        </Head>
                        <Link 
                            prefetch 
                            href={{
                                pathname: 'actuality',
                                query: { page: page - 1}
                            }}
                        >
                            <Button disabled={page <= 1}><a className="precedent" role="button" >Précédent</a></Button>
                        </Link>
                        <p>Page {page} sur {pages}</p>
                        <p>Nombre d'actualités : {count}</p>
                        <Link 
                            prefetch 
                            href={{
                                pathname: 'actuality',
                                query: { page: page + 1}
                            }}
                        >
                            <Button disabled={page >= pages}><a className="suivant" role="button" >Suivant</a></Button>
                        </Link>
                    </>
            )}}
        </Query>
            
        </>
    )
    
}

export default Pagination;