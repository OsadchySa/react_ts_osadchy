import React, {useState} from 'react';
import {getAllUsers} from "../services/api.service";

const UsersPage = () => {
    const [users, setUsers] = useState()
    getAllUsers()
    return (
        <div>
            <UsersPage/>
        </div>
    );
};

export default UsersPage;