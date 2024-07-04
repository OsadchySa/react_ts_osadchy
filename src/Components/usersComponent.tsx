import React, {Component} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUser} from "../models/IUser";

type StateType = {
    users: IUser[]
}

class UsersComponent extends Component <{}, StateType> {

    state:StateType = {
        users:[]
    }
    componentDidMount() {
        getAllUsers().then(response=> this.setState({users:response.users}))
    }


    render() {
        return (
            <div>
                {
                    this.state.users.map(user=> (<li>{user.id}: {user.firstName} {user.lastName}</li>))
                }
            </div>
        );
    }
}

export default UsersComponent;
