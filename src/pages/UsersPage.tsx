import React, {useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUser} from "../models/IUser";
import UsersComponent from "../Component/UsersComponent";
import PaginationComponent from "../Component/pagination_component/PaginationComponent";
import {useSearchParams} from "react-router-dom";


const UsersPage = () => {
    let [searchParams] = useSearchParams()

    const [users, setUsers] = useState<IUser[]>([])
    getAllUsers()
        .then(value => {setUsers(value.users)})



    return (
        <div>
            <UsersComponent users={users}/>
            USERS PAGE
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;