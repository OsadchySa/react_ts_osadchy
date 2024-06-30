import React, {FC} from 'react';
import {IPost} from "../../models/iPost";

interface IProps{
    posts: IPost[]
}
const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <ul>
            {posts.map(value => <li key={value.id}>{value.id}: {value.title} : {value.body}</li>)}
        </ul>
    );
};

export default PostsComponent