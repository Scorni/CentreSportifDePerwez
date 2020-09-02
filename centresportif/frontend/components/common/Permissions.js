import  {Query, Mutation} from 'react-apollo';
import Error from './ErrorMessage';
import {ALL_USERS_QUERY} from './Query';
import {UPDATE_PERMISSIONS_MUTATION} from './Mutation';
import { Container, Row, Col } from 'reactstrap';
import HeadGenerator from '../sports/category/generator';
import {Table} from 'reactstrap';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const possiblePermissions = [
    'SADMIN',
    'ADMIN',
    'USER'
]

const Permissions = (props) => (
    <>
    <HeadGenerator title={"Gérer les permissions"} />
    <Container>
        <Row className="mx-auto justify-content-center">
            <Query query={ALL_USERS_QUERY}>
            {({data, loading, error}) => 
            
            (
                
                <>
                <Error error={{error}}/> 

                <div>
                    <Table dark hover responsive striped>
                        <thead>
                            <tr>
                                <th key="name">Nom</th>
                                <th key="email">Email</th>
                                {possiblePermissions.map(permission =>
                                <th key={permission}>{permission}</th>)}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users && data.users.map(
                                users => 
                                    <UserPermission user= {users} key={users.id}/>
                                )
                            }
                        </tbody>
                    </Table> 
                </div>
                </>
            )        
            }
            </Query>    
        </Row>
    </Container>
    </>
);

class UserPermission extends React.Component{
    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            id: PropTypes.string,
            Permissions: PropTypes.array,


        }).isRequired, 
    };
    state = {
        permissions: this.props.user.permissions,
    }
    handlePermissionChange = (e) => {
        const checkbox = e.target;

        let updatedPermissions = [...this.state.permissions];
        if(checkbox.checked){
            updatedPermissions.push(checkbox.value);
        }else{
            updatedPermissions= updatedPermissions.filter(permission => permission !== checkbox.value)
        }
        this.setState({ permissions: updatedPermissions})

    }
    render(){
        const user = this.props.user
        return(
            <Mutation mutation={UPDATE_PERMISSIONS_MUTATION} 
            variables={{
                permissions: this.state.permissions,
                userId: this.props.user.id
            }}>
                {(updatePermissions, {loading,error})=>(
                    
            <>  
            <Error error={{error}}/> 
            <tr>
                <td >{user.name}</td>
                <td >{user.email}</td>
                {possiblePermissions.map(permission => (
                    <td key={permission}>
                        <label htmlFor={`${user.id}-permission-${permission}`}>
                            <input type="checkbox" checked=
                            {this.state.permissions.includes(permission)}
                            value={permission}
                            onChange={this.handlePermissionChange}
                            />
                        </label>
                    </td>
                ))}
                <td key={user.id + " update"}>
                    <Button disabled={loading} onClick={updatePermissions}>Updat{loading ? 'ing' : 'e' }</Button>
                </td>
            </tr>
            </>
             )}
            </Mutation>
        )
    }
}
export default Permissions;