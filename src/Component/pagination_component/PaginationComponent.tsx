import React from 'react';
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