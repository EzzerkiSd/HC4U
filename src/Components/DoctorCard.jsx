import React from 'react';
import '../Styles/DoctorCard.css';
import * as FaIcons from 'react-icons/fa';

export const DoctorCard = ({id, img, name, specialist, rate, reviewsNum}) => {
    return ( 
        <div className='doctor__card'>
            <div className="img">
                <img src={img} alt="" id={id}/>
            </div>
            <h3>{name}</h3>
            <span>{specialist}</span>
            <div className="infos__container">
                <FaIcons.FaStar/>
                {rate}
                <p>({reviewsNum}<FaIcons.FaPlus id='plus' /> Reviews)</p>
            </div>
        </div>
     );
}
 
export default DoctorCard;