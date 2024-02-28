import React from 'react';
import '../Styles/Reviews.css';
import { ReviewsData } from './ReviewsData';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import { useState } from 'react';

const Reviews = () => {

    const [index, setIndex] = useState(0);

    const handleSrollRight = () => {
        if (index < ReviewsData.length - 1) {
            setIndex(index+1)
        }
        if (index === ReviewsData.length - 1) {
            setIndex(0)
        }
    }
    const handleSrollLeft = () => {
        if (index <= ReviewsData.length - 1) {
            setIndex(index - 1)
        }
        if (index === 0) {
            setIndex(ReviewsData.length - 1)
        }
    }


    return ( 
        <>
            <div className="reviews" id='Reviews'>
                <div className="container">
                    <div className="reviews__header">
                        <p>More over <span>1500+ Customers</span></p>
                    </div>
                    <h2 className='checkUp'>
                        Don't believe us, Check clients word
                    </h2>
                    <div className="clients__word">
                        <div className="word__crate">
                            <p className='left'><ImIcons.ImQuotesLeft/></p>
                            <p className='word'>{ReviewsData[index].review}</p>
                            <p className='right'><ImIcons.ImQuotesRight/></p>
                        </div>
                    </div>
                    <div className="reviews__footer">
                        <div className="coordinations">
                            <h4 className='name'>{ReviewsData[index].name}</h4>
                            <p className='origin'>{ReviewsData[index].origin}</p>
                        </div>
                        <div className="arrows">
                            <FaIcons.FaLongArrowAltLeft className='left__arrow' onClick={handleSrollLeft}/>
                            <FaIcons.FaLongArrowAltRight onClick={handleSrollRight}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Reviews;