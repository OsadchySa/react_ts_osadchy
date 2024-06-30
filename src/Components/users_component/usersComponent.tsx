import React, {useEffect, useState} from 'react';
import UserComponent from "../user_component/userComponent";
import {IUser} from "../../models/IUser";
import {getAllUsers, getPostsOfUserById} from "../../services/api.service";
import {IPost} from "../../models/iPost";
import postsComponent from "../posts_component/postsComponent";
import PostsComponent from "../posts_component/postsComponent";



const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([])
    
    useEffect(()=>{
        getAllUsers().then((response) => {
            setUsers([...response.users])
        });
    },[])

    const getPosts = (id:number) => {
        getPostsOfUserById(id).then(value=>setPosts([...value.posts]))
    }

    return (
        <div>
            <hr/>
            <div>{users.map((value) =>
                <UserComponent
                    key={value.id}
                    user={value}
                    getPosts={getPosts}
                />)}
            </div>
            <hr/>
            <div>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    );
};

export default UsersComponent;