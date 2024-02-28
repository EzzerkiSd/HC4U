import React from 'react';
import '../Styles/Title.css';

export const Title = ({
    content
}) => {
    return(
        <h2 className="title">{content}</h2>
    )
}