import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/users'}>TO USERS PAGE</Link></li>
                <li><Link to={'/posts'}>TO POSTS PAGE</Link></li>
                <hr/>
            </ul>
        </div>
    );
};

export default Header;