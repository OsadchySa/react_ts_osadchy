import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = ({posts:IPost}) => {
    return (
        <div>
            {IPost.map(post => (<li key={post.id}>{post.id}: {post.title}</li>))}
        </div>
    );
};

export default PostsComponent;