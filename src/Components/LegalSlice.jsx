import React from 'react';
import '../Styles/LegalSlice.css';

const LegalSlice = ({title, content}) => {
    return ( 
        <>
            <div className="legal__slice">
                <h2>{title}</h2>
                <p className='content'>{content}</p>
            </div>
        </>
     );
}
 
export default LegalSlice;