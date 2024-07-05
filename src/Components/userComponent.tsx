import React, {Component} from 'react';
import {IUser} from "../models/IUser";

type PropType = {
    user:IUser
}
class UserComponent extends Component <PropType>{

    render() {
        return (
            <div>
                {this.props.user.id}: {this.props.user.firstName} {this.props.user.lastName}
            </div>
        );
    }
}

export default UserComponent;