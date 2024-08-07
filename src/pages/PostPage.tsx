import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postAction} from "../redux/slice/postSlice";

const PostPage = () => {

    let {id} = useParams()

    let dispatch = useAppDispatch()
    let post = useAppSelector(state => state.postStore.post)

    useEffect(() => {
            if (id) dispatch(postAction.loadPost(+id))
    }, [])


    return (
        <div>
            <h3>{post?.id}.</h3> title: <h3>{post?.title}</h3> body: <h3>{post?.body}</h3>
        </div>
    );
};

export default PostPage;