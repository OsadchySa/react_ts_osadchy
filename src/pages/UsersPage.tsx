import React, {useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUser} from "../models/IUser";
import UsersComponent from "../Component/UsersComponent";


const UsersPage = () => {

    const [users, setUsers] = useState<IUser[]>([])
    getAllUsers()
        .then(value => {setUsers(value.users)})


    return (
        <div>
            <UsersComponent users={users}/>
            USERS PAGE
        </div>
    );
};

export default UsersPage;