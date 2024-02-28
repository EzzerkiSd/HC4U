import React from 'react';
import Navbar from '../Components/Navbar';
import LandingPage from '../Components/LandingPage';
import Infomations from '../Components/Informations';
import About from '../Components/About';
import Reasons from '../Components/Reasons';
import Reviews from '../Components/Reviews';
import Doctors from '../Components/Doctors';
import Footer from '../Components/Footer';

const Home = () => {
    return ( 
        <>
            <Navbar/>
            <LandingPage/>
            <Infomations/>
            <About/>
            <Reasons/>
            <Reviews/>
            <Doctors/>
            <Footer/>
        </>
    );
}
 
export default Home;