import React, {useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUser} from "../models/IUser";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>()
    getAllUsers().then(value => {setUsers(value)})
    console.log(users)
    return (
        <div>
            <UsersPage/>
        </div>
    );
};

export default UsersPage;