import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postAction} from "../redux/slice/postSlice";
import Posts from "../components/Posts";

const PostsPage = () => {
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, [])
    let {posts} = useAppSelector(state => state.postStore)
    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export default PostsPage;