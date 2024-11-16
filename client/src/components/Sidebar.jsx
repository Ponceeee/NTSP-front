import React, { useState } from 'react';
import '../css/Sidebar.css';

function Sidebar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <section id="sidebar" className={isSidebarVisible ? '' : 'hide'}>
            <a href="#" className="brand">
                <img src="src/assets/NSTP_LOGO.png" alt="Admin Logo" className="brand" />
                <span className="text">Admin</span>
            </a>
            <ul className="side-menu top">
                <li><a href="#"><i className='bx bxs-dashboard'></i><span className="text">Dashboard</span></a></li>
                <li><a href="/mainpage"><i className='bx bxs-shopping-bag-alt'></i><span className="text">Request</span></a></li>
                <li><a href="/request"><i className='bx bxs-message-square-add'></i><span className="text">Edit Items</span></a></li>
                <li><a href="Returned.html"><i className='bx bxs-message-dots'></i><span className="text">Returned</span></a></li>
            </ul>
            <ul className="side-menu">
                <li><a href="../login/login.html" className="logout"><i className='bx bxs-log-out-circle'></i><span className="text">Logout</span></a></li>
            </ul>
            <button onClick={toggleSidebar} className="toggle-button">
                <i className={`bx ${isSidebarVisible ? 'bx-x' : 'bx-menu'}`}></i>
            </button>
        </section>
    );
}

export default Sidebar;


