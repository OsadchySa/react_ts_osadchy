import React, {FC} from 'react';
import {IComment} from "../models/IComment";
interface IProps {
    comments: IComment[]
}

const CommentsComponent: FC<IProps> = ({comments:IComment}) => {
    return (
        <div>
            {IComment.map(comment => (<li key={comment.id}>{comment.id}: {comment.body}</li>))}
        </div>
    );
};

export default CommentsComponent;