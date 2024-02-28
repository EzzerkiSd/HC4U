import React from 'react';
import '../Styles/About.css';
import { Title } from './Title';
import img from '../Assets/doctor-group.png';
import Solution from './Solution';

const About = () => {

    return ( 
        <>
            <div className="about" id='About'>
                <div className="container">
                    <div className="about__section__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="main__one">
                        <Title content={'About Us'}/>
                        <p className="about__description">
                            Welcome to HC4U your trusted partner for accessible and personalized healthcare. Our expert doctors offer online consultations and specialized sercvices, prioritizing your well-being. Join us on this journey towards a healthier you.
                        </p>
                        <div className="solutions__container">
                            <h3 id='solution__title'>Your Soutions</h3>
                            <div className="solutions">
                                <Solution title={'Choose a Specialist'} p={'Find your perfect speacialist and book with ease at HC4U. Expert doctors prioritize your health, offering tailored care.'} />
                                <Solution title={'Make a Schedule'} p={'Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care.'} />
                                <Solution title={'Get Your Solutions'} p={'Our experienced doctors and speacialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health.'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;