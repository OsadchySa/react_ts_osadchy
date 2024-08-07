import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userAction} from "../redux/slice/userSlice";

const UserPage = () => {

    let {id} = useParams()

    let dispatch = useAppDispatch()
    let user = useAppSelector(state => state.userStore.user)

    useEffect(() => {
        if (id) dispatch(userAction.loadUser(+id))
    }, [])


    return (
        <div>
            {user?.id}: {user?.name} email:{user?.email}
        </div>
    );
};

export default UserPage;