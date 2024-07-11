import React, {useEffect, useState} from 'react';
import CommentsComponent from "../Component/CommentsComponent";
import {getComments} from "../services/api.service";
import PaginationComponent from "../Component/pagination_component/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CommentsPage = () => {
    let [searchParams] = useSearchParams()
    let page = searchParams.get('page')

    const [comments, setComments] = useState([])

    useEffect(() => {
        let skip

        if (page) {
            skip = Number(page) * 30 - 30
            getComments(skip)
                .then(value => {
                    setComments(value.comments)
                })
        }
        else {
            getComments(0)
                .then(value => {
                    setComments(value.comments)
                })
        }
    },[page])


    return (
        <div>
            <CommentsComponent comments={comments}/>
            COMMENTS PAGE
            <PaginationComponent/>
        </div>
    );
};

export default CommentsPage;