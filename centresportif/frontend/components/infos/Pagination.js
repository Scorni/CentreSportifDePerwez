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
        faqsConnection{
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
                    const count = data.faqsConnection.aggregate.count;
                    const pages = Math.ceil(count / perPage);
                    const page = props.page;
                return(
                        <div className="customPaginationDiv" data-test="pagination">
                            <Head>
                                <title>
                                    FAQ Page {page} sur 
                                        {pages}
                                </title>
                            
                            </Head>
                            <Link 
                                 
                                href={{
                                    pathname: 'actuality',
                                    query: { page: page - 1}
                                }}
                            >
                                <Button disabled={page <= 1} className="customActualityButtonPage precedentButton"><a className="precedent" role="button" >Précédent</a></Button>
                            </Link>
                            <Button className="customButtonPagination" disabled>Page {page} sur <span className="totalPages">{pages}</span></Button>
                            <Link 
                                 
                                href={{
                                    pathname: 'faq',
                                    query: { page: page + 1}
                                }}
                            >
                                <Button disabled={page >= pages} className="customActualityButtonPage suivantButton"><a className="suivant" role="button" >Suivant</a></Button>
                            </Link>
                        </div>
            )}}
        </Query>
            
        </>
    )
    
}

export default Pagination;
export {PAGINATION_QUERY}