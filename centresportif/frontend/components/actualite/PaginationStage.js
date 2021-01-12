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
        stagesConnection{
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
                    const count = data.stagesConnection.aggregate.count;
                    const pages = Math.ceil(count / perPage);
                    const page = props.page;
                return(
                        <div className="customPaginationDiv">
                            <Head>
                                <title>
                                    Actualité Page {page} sur {pages}
                                </title>
                            
                            </Head>
                            <Link 
                                href={{
                                    pathname: 'stage',
                                    query: { page: page - 1}
                                }}
                            >
                                <Button disabled={page <= 1} className="customActualityButtonPage"><a className="precedent" role="button" >Précédent</a></Button>
                            </Link>
                            <Button className="customButtonPagination" disabled>Page {page} sur {pages}</Button>
                            <Link 
                                href={{
                                    pathname: 'stage',
                                    query: { page: page + 1}
                                }}
                            >
                                <Button disabled={page >= pages} className="customActualityButtonPage"><a className="suivant" role="button" >Suivant</a></Button>
                            </Link>
                        </div>
            )}}
        </Query>
            
        </>
    )
    
}

export default Pagination;