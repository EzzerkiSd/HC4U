import React from 'react';
import '../Styles/Card.css';

export const Card = ({
    icon,
    title,
    p
}) => {
    return ( 
        <>
            <div className="card">
                <div className="main__icon">{icon}</div>
                <h3 className="card__title">{title}</h3>
                <p className="details">{p}</p>
            </div>
        </>
     );
}