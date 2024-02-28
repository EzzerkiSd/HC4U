import React from 'react';
import '../Styles/Slice.css';
import { Link } from "react-router-dom";

export const Slice = ({title, e, path}) => {
    return ( 
        <>
            <div className="slice">
                <h2>{title}</h2>
                <ul>
                    {
                        e.map((e, index) => 
                            <li key={index}>
                                <Link to={path}>{e}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
     );
}
 
export default Slice;