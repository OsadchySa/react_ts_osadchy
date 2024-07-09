import React, {useState} from 'react';
import {getPosts} from "../services/api.service";
import PostsComponent from "../Component/PostsComponent";


const PostsPage = () => {
    const [posts, setPosts] = useState([])
    getPosts()
        .then(value => {
            setPosts(value.posts)
        })

    return (
        <div>
            <PostsComponent posts={posts}/>
            POSTS PAGE
        </div>
    );
};

export default PostsPage;