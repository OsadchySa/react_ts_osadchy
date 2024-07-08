import React from 'react';
import MenuComponent from "../Component/MenuComponent";
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;