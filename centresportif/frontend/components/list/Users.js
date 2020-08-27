import React, { Component } from 'react';
import { Query } from 'react-apollo';
import USERS_QUERY from '../../components/list/Query'

class Users extends Component {
    render() {
        return (
            <div>
                <p> Les clients </p>
                <Query query={USERS_QUERY}>
                    {({ data, error, loading }) => {
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        console.log(data);
                        return <div>{data.users.map(users => <li> {users.name + " || " + users.surname + " || " + users.mail + " || " + users.adress }</li>)} </div>
                    }}
                </Query>
            </div>
        );
    }
}

export default Users;