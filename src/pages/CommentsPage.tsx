import React, {useState} from 'react';
import CommentsComponent from "../Component/CommentsComponent";
import {getComments} from "../services/api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState([])
    getComments()
        .then(value => {
            setComments(value.comments)
        })

    return (
        <div>
            <CommentsComponent comments={comments}/>
            COMMENTS PAGE
        </div>
    );
};

export default CommentsPage;