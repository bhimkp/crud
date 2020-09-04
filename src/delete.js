import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'reactstrap';

class DeleteUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    
    deleteId(id){
        axios.delete('https://jsonplaceholder.typicode.com/users/${id}')
        .then(res => {
            const users = res.data;
            this.setState({ users })
        });
    }
    render(){
        const users = this.state;
        return(
            <div>{this.state.users.map(user => (
               <Button onClick={ () => this.deleteId(user.id)}>Delete</Button> ))}</div>
        )
    }
}
export default DeleteUser;