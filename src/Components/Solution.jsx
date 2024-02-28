import React from 'react';
import '../Styles/Solution.css';
import * as FaIcons from 'react-icons/fa';


export const Solution = ({title, p}) => {
    return ( 
        <div className='solution'>
            <div className="header">
                <span><FaIcons.FaChevronCircleDown/></span>
                <h3>{title}</h3>
            </div>
            <p className="solution__description">{p}</p>
        </div>
     );
}
 
export default Solution;