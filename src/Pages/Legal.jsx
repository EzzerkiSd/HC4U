import React, { useEffect } from 'react';
import '../Styles/Legal.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import LegalSlice from '../Components/LegalSlice';
const Legal = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
            <div className="legal">
                <div className="logo">
                    <div className="logo">
                        <Link to='/'>HC4U <FaIcons.FaPlus /></Link>
                    </div>
                </div>
                <div className="container">
                    <div className="main">
                        <LegalSlice title={'General Info'} content={"Welcome to HC4U, your trusted online healthcare platform. Ourmission is to provide accessible and personalized healthcare services to individuals seeking expert medical advice and treatment. By using our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service."} />
                        <LegalSlice title={'Privacy Policy'} content={"Your privacy is paramount to us. Our Privacy Policy outlines how we collect, use, and protect your personal and medical information. We ensure secure data handling, and you can trust that your information is treated with the utmost confidentiality."} />
                        <LegalSlice title={'Terms of Service'} content={"When using HC4U, you agree to our Terms of Service. This includes guidelines for using our platform, interacting with doctors, and the responsibilities of both parties. It's essential to understand these terms to ensure a smooth experience for all users."} />
                        <LegalSlice title={'Consultations'} content={"Our platform connects you with expert doctors who provide online consultations. These consultations are not a replacement for in-person medical visits but serve as a convenient option for medical advice, prescriptions, and guidance. It's crucial to provide accurate and complete information to receive the best possible care."} />
                        <LegalSlice title={'How it Works'} content={"HC4U is designed to simplify healthcare access. You can choose a specialist, schedule an appointment, and engage in a virtual consultation. Our specialists offer personalized advice and treatment plans tailored to your needs. Please remember that emergencies require immediate medical attention and should be directed to your local medical facility."} />
                    </div>
                </div>
                <div className="legal__footer">
                    <h5>© 2013-2023 HC4U+. All rights reserved.</h5>
                </div>
            </div>
        </>
    );
};

export default Legal;