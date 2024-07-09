import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUser} from "../models/IUser";
import UsersComponent from "../Component/UsersComponent";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([])
    fetch('https://dummyjson.com/users')
        .then((value) => value.json())
        .then(value => {setUsers(value)})

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;