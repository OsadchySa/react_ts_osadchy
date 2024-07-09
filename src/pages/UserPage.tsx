import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {getPostsOfUserById} from "../services/api.service";

const UserPage = () => {
    let {id} = useParams()
    const [posts, setPosts] = useState()
    getPostsOfUserById(id).then(value => console.log(value))
    return (
        <div>
            USER PAGE{id}
        </div>
    );
};

export default UserPage;