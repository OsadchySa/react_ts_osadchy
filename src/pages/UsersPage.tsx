import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUser} from "../models/IUser";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>()
    useEffect(()=>{
        getAllUsers().then((response) => {
            setUsers([...response.users])
        });
    },[])

    return (
        <div>
            <UsersPage/>
        </div>
    );
};

export default UsersPage;