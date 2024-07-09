import React, {FC} from 'react';
import {IUser} from "../models/IUser";


interface IProps {
    users: IUser[]
}

const UsersComponent: FC<IProps> = ({users}) => {

    return (
        <div>
            <ul>
                {
                    users.map(user=> (<li>{user.id}: {user.firstName} {user.lastName}</li>))
                }
            </ul>
        </div>
    );
};

export default UsersComponent;