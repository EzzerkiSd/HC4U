import React, { useEffect, useState } from 'react';
import '../Styles/Navbar.css';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from './NavbarData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const notify = () => toast("High Traffic, Please Wait ..!");


    const [isTheRightWidth, setWidth] = useState(true);
    const checkWidth = () => {
        if (window.innerWidth < 960) {
            setWidth(false);
        } else {
            setWidth(true);
        }
    };
    useEffect(() => {
        checkWidth();
    }, []);
    window.addEventListener("resize", checkWidth);

    const [isWorking, setWorkValue] = useState(false);
    const showSidebar = () => setWorkValue(!isWorking);

    const navTrigger = () => {
        if (isTheRightWidth) {
            return (
                <>

                    <div className="nav-full">
                        <ul className='fullNav'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            {
                                NavbarData.map((e, index) =>
                                    <li key={index}>
                                        <a href={e.path}>{e.title}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <button className="liveChat" onClick={notify}><AiIcons.AiFillMessage /> Live Chat</button>
                </>
            );
        } else {
            return (
                <button className="menu" onClick={showSidebar} ><FaIcons.FaBars /></button>
            );
        }
    };
    const sidebar = () => {
        if (!isTheRightWidth) {
            return (
                <>
                    <div className={isWorking ? 'sidebar' : 'sidebar off'}>
                        <button
                            className="closer"
                            onClick={showSidebar}
                        ><AiIcons.AiOutlineClose /></button>
                        <ul>
                            <li>
                                <Link to='/' >Home</Link>
                            </li>
                            {
                                NavbarData.map((e, index) =>
                                    <li key={index} onClick={showSidebar} >
                                        <a href={e.path}>{e.title}</a>
                                    </li>
                                )}
                        </ul>
                    </div>
                </>
            );
        }
    };

    return (
        <>
            <nav>
                <div className="logo"><Link to='/'>HC4U <FaIcons.FaPlus /></Link></div>
                {navTrigger()}
            </nav>
            {sidebar()}
        </>
    );
};

export default Navbar;