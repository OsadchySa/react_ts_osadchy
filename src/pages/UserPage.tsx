import React, {useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {getPostsOfUserById} from "../services/api.service";
import {useAppLocation} from "../hooks/useAppLocation";
import {IUser} from "../models/IUser";

const UserPage = () => {
    let {id} = useParams()
    let location = useAppLocation<IUser>()
    let state = location.state

    const [posts, setPosts] = useState()
    getPostsOfUserById(id).then(value => console.log(value.posts))
    return (
        <div>
            USER PAGE{state.id}
        </div>
    );
};

export default UserPage;