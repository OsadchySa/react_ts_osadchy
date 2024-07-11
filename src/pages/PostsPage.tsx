import React, {useEffect, useState} from 'react';
import {getPosts} from "../services/api.service";
import PostsComponent from "../Component/PostsComponent";
import PaginationComponent from "../Component/pagination_component/PaginationComponent";
import {useSearchParams} from "react-router-dom";


const PostsPage = () => {
    let [searchParams] = useSearchParams()
    let page = searchParams.get('page')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let skip;
        if (page) {
            skip = Number(page) * 30 - 30
            getPosts(skip)
                .then(value => {
                    setPosts(value.posts)
                    console.log(page)
                })
        }
        else {
            getPosts(0)
                .then(value => {
                    setPosts(value.posts)
                    console.log(page)
                })
        }

    },[page])


    return (
        <div>
            <PostsComponent posts={posts}/>
            POSTS PAGE
            <PaginationComponent/>
        </div>
    );
};

export default PostsPage;