import React, { useState } from 'react';
import '../Styles/AppointmentBooking.css';
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import { useEffect } from 'react';
import { Title } from '../Components/Title';
import { toast } from 'react-toastify';

const AppointmentBooking = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const [patientName, setPatientName] = useState("");
    const [patientNumber, setPatientNumber] = useState("");
    const [patientGender, setPatientGender] = useState("default");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [preferredMode, setPreferredMode] = useState("default");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};
        if (!patientName.trim()) {
            errors.patientName = "Patient name is required!";
        } else if (patientName.trim().length < 8) {
            errors.patientName = "Patient name must be at least 8 characters!";
        }

        if (!patientNumber.trim()) {
            errors.patientNumber = "Patient phone number is required!";
        } else if (patientNumber.trim().length < 10) {
            errors.patientNumber = "Patient phone number must be of 10 digits!";
        }

        if (patientGender.trim() === 'default') {
            errors.patientGender = "Please select patient gender!";
        }

        if (!appointmentTime) {
            errors.appointmentTime = "Appointment time is required!";
        } else {
            const currentTime = new Date();
            const selectedTime = new Date(appointmentTime);
            if (selectedTime <= currentTime) {
                errors.appointmentTime = "Please select a future appointment time!";
            }
        }

        if (preferredMode === 'default') {
            errors.preferredMode = "Please select preferred mode!";
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setPatientName("");
        setPatientNumber("");
        setPatientGender("default");
        setAppointmentTime("");
        setPreferredMode("default");
        setFormErrors({});

        toast.success("Appointment Booking Successfully!", {
            onOpen: () => setIsSubmitted(true),
            onClose: () => setIsSubmitted(false)
        });
    };
    const navigate = useNavigate();

    useEffect(() => {
        if (isSubmitted) {
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    },[isSubmitted]);



    return (
        <>
            <div className="appointment__booking">
                <div className="logo">
                    <div className="logo">
                        <Link to='/'>HC4U <FaIcons.FaPlus /></Link>
                    </div>
                </div>
                <div className="main">
                    <div className="container">
                        <Title content={'Book Appointment Online'} />
                        <form onSubmit={handleSubmit}>
                            <label>
                                <div className="header">
                                    <span className='star'>*</span>
                                    <p>Patient Full Name:</p>
                                </div>
                                <input className='fill__in'
                                    type="text"
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                />
                                {formErrors.patientName && <p className='error__msg'>{formErrors.patientName}</p>}
                            </label>
                            <label>
                                <div className="header">
                                    <span className='star'>*</span>
                                    <p>Patient Phone Number:</p>
                                </div>
                                <input type='text'
                                    className='fill__in'
                                    value={patientNumber}
                                    onChange={(e) => setPatientNumber(e.target.value)}
                                />
                                {formErrors.patientNumber && <p className='error__msg'>{formErrors.patientNumber}</p>}
                            </label>
                            <label>
                                <div className="header">
                                    <span className='star'>*</span>
                                    <p>Patient Gender:</p>
                                </div>
                                <select className='fill__in'
                                    value={patientGender}
                                    onChange={(e) => setPatientGender(e.target.value)}
                                >
                                    <option value="default">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {formErrors.patientGender && <p className='error__msg'>{formErrors.patientGender}</p>}
                            </label>
                            <label>
                                <div className="header">
                                    <span className='star'>*</span>
                                    <p>Preferred Appointement Time:</p>
                                </div>
                                <input type='datetime-local'
                                    className='fill__in'
                                    value={appointmentTime}
                                    onChange={(e) => setAppointmentTime(e.target.value)}
                                />
                                {formErrors.appointmentTime && <p className='error__msg'>{formErrors.appointmentTime}</p>}
                            </label>
                            <label>
                                <div className="header">
                                    <span className='star'>*</span>
                                    <p>Preferred Mode:</p>
                                </div>
                                <select
                                    value={preferredMode}
                                    onChange={(e) => setPreferredMode(e.target.value)}
                                >
                                    <option value="default">Select</option>
                                    <option value="voice">Voice Call</option>
                                    <option value="video">Video Call</option>
                                </select>
                                {formErrors.preferredMode && <p className='error__msg'>{formErrors.preferredMode}</p>}
                            </label>
                            <button
                                className="confirmBooking"
                                type='submit'
                            >
                                {isSubmitted ? 'Loading ...' : "Confirm Appointment"}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="booking__footer">
                    <h5>© 2013-2023 HC4U+. All rights reserved.</h5>
                </div>
            </div>
        </>
    );
};

export default AppointmentBooking;