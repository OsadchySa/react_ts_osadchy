import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";


interface IProps {
    users: IUser[]
}

const UsersComponent: FC<IProps> = ({users}) => {

    return (
        <div>
            <ul>
                {
                    users.map(user=> (
                        <li key={user.id}>
                            <Link to={user.id.toString()}>{user.id}: {user.firstName} {user.lastName}</Link>
                        </li>))
                }
            </ul>
        </div>
    );
};

export default UsersComponent;