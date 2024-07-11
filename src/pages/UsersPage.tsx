import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUser} from "../models/IUser";
import UsersComponent from "../Component/UsersComponent";
import PaginationComponent from "../Component/pagination_component/PaginationComponent";
import {useSearchParams} from "react-router-dom";


const UsersPage = () => {
    let [searchParams] = useSearchParams()
    let page = searchParams.get('page')

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        let skip;
        if (page) {
            skip = Number(page) * 30 - 30
            getAllUsers(skip).then((response) => {
                setUsers([...response.users])
                console.log(page)
            });
        }
        else{
            getAllUsers(0).then((response) => {
                setUsers([...response.users])
                console.log(page)
            });
        }

    },[page])



    return (
        <div>
            <UsersComponent users={users}/>
            USERS PAGE
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;