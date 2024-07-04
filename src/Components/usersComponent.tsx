import React, {Component} from 'react';
import {getAllUsers} from "../services/api.service";


class UsersComponent extends Component {

    state={
        users: []
    }
    componentDidMount() {
        getAllUsers().then(response=>{this.setState({...this.state, users:response.users})})
    }

    render() {
        return (
            <div>
                {this.state.users}
            </div>
        );
    }
}

export default UsersComponent;