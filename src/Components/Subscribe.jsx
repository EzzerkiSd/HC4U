import React, { useState } from 'react';
import '../Styles/Subscribe.css';
import {toast} from 'react-toastify';

const Subscribe = () => {

    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisable] = useState(false);
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = () => {
        if (!inputValue) {
            toast.error("Please Insert an E-mail Address")
        }else if (inputValue) {
            emailRegex.test(inputValue) ? 
            toast.success("Subscribed to Newsletter!", {
                onOpen:() => {
                    setIsDisable(true);
                    setInputValue('');
                },
                onClose: () => setIsDisable(false)
            })
            : toast.error("Email Invalid!", {
                onOpen:() => setIsDisable(true),
                onClose:() => setIsDisable(false)
            })
        }
    }

    return (
        <>
            <div className="mailing">
                <input 
                type="email" 
                placeholder='Enter your email address'
                value={inputValue}
                onChange={handleInput}
                />
                <button 
                className="subscribe" 
                onClick={handleSubmit}
                disabled = {isDisabled}
                >Subscribe</button>
            </div>
        </>
    );
};

export default Subscribe;