import React from 'react';
import '../Styles/Reasons.css';
import { Title } from './Title';
import img from '../Assets/doctor-book-appointment.png';
import * as FaIcons from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Reasons = () => {

    const navigate = useNavigate();
    const handleAppointmentBookingClick = () => {
        navigate('/appointment')
    }

    return ( 
        <>
            <div className="reasons" id='#Services'>
                <div className="container">
                    <div className="section__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="main">
                        <Title content={'Why To Choose Us'}/>
                        <p className="section__description">
                            Discover The reasons to choose HC4U for your healthcare needs. Experience expert care, convidence, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.
                        </p>
                        <div className="booking">
                            <ul>
                                <li>
                                    <FaIcons.FaCheckCircle/>
                                    <h3>Best Professional Doctors</h3>
                                </li>
                                <li>
                                    <FaIcons.FaCheckCircle/>
                                    <h3>Emergency Care</h3>
                                </li>
                                <li>
                                    <FaIcons.FaCheckCircle/>
                                    <h3>24/7 Support Live Chat</h3>
                                </li>
                                <li>
                                    <FaIcons.FaCheckCircle/>
                                    <h3>Enrollment Easy and Quick</h3>
                                </li>
                            </ul>
                            <button className="appointmentBooking" onClick={handleAppointmentBookingClick}>
                                <FaIcons.FaCalendarCheck />
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Reasons;