import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import {endpoint,prodEndpoint} from './config'

function createClient({ headers }) {
    return new ApolloClient({
        /*  "https://cspperwez-yoga-prod.herokuapp.com/" | `http://localhost:4000` | "https://backend.centresportifperwez.com/"*/
        uri: "http://localhost:4000",
        request : operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include',
                },
                headers: {
                    cookie: headers && headers.cookie // NOTE: client-side headers is undefined!
                  },
            });
        },
    });
}

export default withApollo(createClient,{ getDataFromTree: 'ssr' })