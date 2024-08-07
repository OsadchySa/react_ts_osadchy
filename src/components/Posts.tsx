import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";


interface IProps{
    posts: IPost[],
}

const Posts: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <li key={post.id}><Link to={'/posts/' + post.id}>{post.id} {post.title} {post.body}</Link></li>)}
        </div>
    );
};

export default Posts;