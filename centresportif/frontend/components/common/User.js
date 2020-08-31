import PropTypes from 'prop-types'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


export const CURRENT_USER_QUERY = gql`
 query {
    me {
        id
        email
        name
        surname
        permissions
  }
}
`;

const User = props => (
<Query {...props} query={CURRENT_USER_QUERY}>
     {payload => props.children(payload)}
</Query>
);

User.propTypes = {
    children: PropTypes.func.isRequired,
};

export default User;