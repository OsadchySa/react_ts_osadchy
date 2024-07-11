import React from 'react';
import {useSearchParams} from "react-router-dom";
import PrevButtonComponent from "../button-components/PrevButtonComponent";
import NextButtonComponent from "../button-components/NextButtonComponent";

const PaginationComponent = () => {

    return (
        <div>
            <PrevButtonComponent/>
            <NextButtonComponent/>
        </div>
    );
};

export default PaginationComponent;