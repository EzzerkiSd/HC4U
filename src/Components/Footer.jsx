import React from 'react';
import '../Styles/Footer.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from "react-router-dom";
import Subscribe from './Subscribe';
import Slice from './Slice';


const Footer = () => {
    return ( 
        <>
            <div className="footer">
                <div className="container" id='first__one'>
                    <div className="first__section">
                        <div className="logo">
                            <Link to='/'>HC4U <FaIcons.FaPlus /></Link>
                        </div>
                        <p className="footer__description">
                            Talk to online doctors and get madical advice, online prescriptions, refills and medical notes within minutes. On-demand healthcare services at your fingertips.
                        </p>
                        <h3>Stay Update to our Newsletter</h3>
                        <Subscribe/>
                    </div>
                    <div className="second__section">
                        <Slice title={'Services'} e={['Emergency Care', 'Heart Disease', 'Dental Care', 'Prescription', 'Insights for doctors']} />
                        <Slice title={'Legal'} path = '/legal' e={['General Infos', 'Privacy Policy', 'Terms of Services ', 'Consultations', 'How it Works']} />
                        <Slice title={'Talk To Us'} e={['support@hc4u.com', 'appointment@hc4u.com', '+002 5454 5252', '+022 2326 6232']} />
                    </div>
                </div>
                <div className="last__section">
                    <div className="container">
                        <p className="copyright">
                            © 2013-2023 HC4U+. All rights reserved.   
                        </p>
                        <div className="platforms">
                            <ul>
                                <li>
                                    <Link to='#' className='linkedin'>
                                        <FaIcons.FaLinkedinIn/>
                                    </Link> 
                                </li>
                                <li>
                                    <Link to='#' className='facebook'>
                                        <FaIcons.FaFacebookF/>
                                    </Link>  
                                </li>
                                <li>
                                    <Link to='#' className='twitter'>
                                        <FaIcons.FaTwitter/>
                                    </Link>         
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Footer;