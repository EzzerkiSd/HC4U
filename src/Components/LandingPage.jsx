import React, { useEffect, useState } from 'react';
import '../Styles/LandingPage.css';
import * as FaIcons from "react-icons/fa";
import sectionImg from "../Assets/profile-2.png";
import { useNavigate } from 'react-router';



const LandingPage = () => {
    const [isTheRightScreen, setWidth] = useState(false);
    const widthCheck = () => {
        if (window.innerWidth >= 960) {
            setWidth(true);
        } else {
            setWidth(false);
        }
    };
    useEffect(() => {
        widthCheck();
    }, []);
    window.addEventListener("resize", widthCheck);

    const sectionImgTrigger = (e) => {
        if (isTheRightScreen) {
            return (
                <img src={e} alt="" />
            );
        }
    };

    // const [stats, setStats] = useState({patients: 0, doctors: 0, yExperience: 0});
    // const goalStats = {patiens: 145, doctors: 50, yExperience: 10};

    //***************************************** */

    // const updateStats = () => {
    //     const updatedStats = Object.keys(goalStats).reduce((acc, key) => ({
    //         ...acc,
    //         [key]: Math.min(stats[key] + 1, goalStats[key])
    //     }), {});
    //     setStats(updatedStats);

    //     if (JSON.stringify(updateStats) !== JSON.stringify(goalStats)) {
    //         requestAnimationFrame(updateStats);
    //     }
    // };
    // if (JSON.stringify(stats) !== JSON.stringify(goalStats)) {
    //     requestAnimationFrame(updateStats);
    // }
    // *******************************************

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (stats.patients < goalStats.patiens) {
    //             setStats(stats.patients++)
    //         }
    //         if (stats.doctors < goalStats.doctors) {
    //             setStats(stats.doctors++)
    //         }
    //         if (stats.yExperience < goalStats.yExperience) {
    //             setStats(stats.yExperience++)
    //         }
    //     }, 2000 / goalStats.patiens);
    //     if (stats.patients === goalStats.patiens) {
    //         console.log(`${stats.patients} === ${goalStats.patiens}`);
    //         clearInterval(interval);
    //     }
    // }, [])
    // let ReachStats = (goal) => {
    //     window.onload = () => {
    //         let start = setInterval(() => {
    //             console.log();
    //             if (count.patients === goal+1) {
    //                 clearInterval(start)
    //             }
    //             console.log(count.patients);
    //             return(
    //                 <>

    //                 </>
    //             );
    //         }, 2000 / goal);

    //     }
    // }
   

    // const navigate = useNavigation();
    const navigate = useNavigate();
    const handleAppointmentBookingClick = () => {
        navigate('/appointment')
    }

    return (
        <>
            <div className="landingPage">
                <div className="container">
                    <div className="main">
                        <h3>❤️ Health comes first</h3>
                        <h1>Find your Doctor and <br /> make an Appointments</h1>
                        <p className='description'>Talk to online doctors and get medical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.</p>
                        <button className="appointmentBooking" onClick={handleAppointmentBookingClick}>
                            <FaIcons.FaCalendarCheck />
                            Book Appointment
                        </button>
                        <div className="stats">
                            <div className="patients">
                                <h2><span >145</span>K+</h2>
                                <p>Recieve<br />Patients</p>
                            </div>
                            <div className="doctors">
                                <h2><span>50</span>+</h2>
                                <p>Expert<br />Doctors</p>
                            </div>
                            <div className="yExperience">
                                <h2><span>10</span>+</h2>
                                <p>Years of<br />Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="sectionImg">
                        {sectionImgTrigger(sectionImg)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;