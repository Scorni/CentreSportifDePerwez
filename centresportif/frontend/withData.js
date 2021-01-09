import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import {endpoint,prodEndpoint} from './config'

function createClient({ headers }) {
    return new ApolloClient({
        /*  "https://csp-yoga-prod.herokuapp.com/" | `http://localhost:4000`*/
        uri: "http://localhost:4000",
        request : operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include',
                },
                headers,
            });
        },
    });
}

export default withApollo(createClient,{ getDataFromTree: 'ssr' })