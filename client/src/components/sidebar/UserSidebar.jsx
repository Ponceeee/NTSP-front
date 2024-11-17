import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/UserSidebar.css';

const Sidebar = () => {
    const location = useLocation();

    // Function to check if a path is active
    const isActive = (path) => {
        return location.pathname === `/user${path}`;
    };

    return (
        <section id="sidebar">
            <Link to="/" className="brand">
            <img src="src/assets/NSTP_LOGO.png" alt="Admin Logo" className="brand" />
                <span className="text">User</span>
            </Link>
            
            <ul className="side-menu top">
                <li className={isActive('/dashboard') ? 'active' : ''}>
                    <Link to="/dashboard">
                        <i className='bx bxs-dashboard'></i>
                        <span className="text">Dashboard</span>
                    </Link>
                </li>
                
                <li className={isActive('/requests') ? 'active' : ''}>
                    <Link to="/user/requests">
                        <i className='bx bxs-shopping-bag-alt'></i>
                        <span className="text">Request</span>
                    </Link>
                </li>
                
                <li className={isActive('/borrowed') ? 'active' : ''}>
                    <Link to="/borrowed">
                        <i className='bx bxs-book'></i>
                        <span className="text">Borrowed Items</span>
                    </Link>
                </li>
                
                <li className={isActive('/reports') ? 'active' : ''}>
                    <Link to="/reports">
                        <i className='bx bxs-report'></i>
                        <span className="text">Reports</span>
                    </Link>
                </li>
            </ul>
            
            <ul className="side-menu">
                <li>
                    <Link to="/login" className="logout">
                        <i className='bx bxs-log-out-circle'></i>
                        <span className="text">Logout</span>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Sidebar;