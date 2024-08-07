import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userAction} from "../redux/slice/userSlice";
import Users from "../components/Users";

const UsersPage = () => {
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userAction.loadUsers())
    }, [])
    let {users,isLoaded,error} = useAppSelector(state => state.userStore)
    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default UsersPage;