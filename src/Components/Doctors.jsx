import React from 'react';
import '../Styles/Doctors.css';
import DoctorCard from './DoctorCard';
import { Title } from './Title';
import img1 from '../Assets/profile-1.png';
import img2 from '../Assets/profile-2.png';
import img3 from '../Assets/profile-3.png';
import img4 from '../Assets/profile-4.png';

const Doctors = () => {
    return ( 
        <>
            <div className="doctors" id='Doctors'>
                <div className="container">
                    <Title content={'Meet Our Doctors'}/>
                    <p className="section__description">
                        Meet our exceptional team of specialist doctors, dedicated to providing top-notch healthcare services at HC4U. Trust in their knowledge and experience to lead you towards a healthier and happier life.
                    </p>
                    <div className="doctors__section">
                        <DoctorCard id={'first'} img={img1} name={'Dr. Kathryn Murphy'} specialist={'General Surgeons'} rate={'4.9'} reviewsNum={'1800'} />
                        <DoctorCard id={'second'} img={img2} name={'Dr. Jacob Jones'} specialist={'Hematologists'} rate={'4.8'} reviewsNum={'700'} />
                        <DoctorCard id={'third'} img={img3} name={'Dr. Jenny Wilson'} specialist={'Endocrinologists'} rate={'4.7'} reviewsNum={'450'} />
                        <DoctorCard id={'fourth'} img={img4} name={'Dr. Albert Flores'} specialist={'Hematologists'} rate={'4.8'} reviewsNum={'500'} />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Doctors;