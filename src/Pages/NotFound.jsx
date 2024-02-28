import React from 'react';
import '../Styles/NotFound.css';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';


const NotFound = () => {
    return ( 
        <>
            <div className="not__found">
                <div className="main">
                <p>404, page not found.</p>
                <span className='rect'></span>
                </div>
                <div className="return">
                    <Link to='/' className='return__home'>
                        <FaIcons.FaAngleDoubleLeft/>
                        Return Home
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default NotFound;