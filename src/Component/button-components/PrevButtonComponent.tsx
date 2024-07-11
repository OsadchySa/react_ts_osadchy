import React from 'react';
import {useSearchParams} from "react-router-dom";

const PrevButtonComponent = () => {
    let [searchParams, setsearchParams] = useSearchParams({page:'1'})
    return (
        <div>
            <button onClick={() => {
                let page = Number(searchParams.get('page' || '1'));
                let nextPage = (page - 1).toString()
                setsearchParams({page: nextPage})
            }}>PREVIOUS
            </button>
        </div>
    );
};

export default PrevButtonComponent;