import React from 'react';
import {useSearchParams} from "react-router-dom";

const NextButtonComponent = () => {
    let [searchParams, setsearchParams] = useSearchParams({page:'1'})
    return (
        <div>
            <button onClick={() => {
                let page = Number(searchParams.get('page' || '1'));
                let nextPage = (page + 1).toString()
                setsearchParams({page: nextPage})
            }}>NEXT
            </button>
        </div>
    );
};

export default NextButtonComponent;