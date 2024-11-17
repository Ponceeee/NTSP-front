import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    return (
        <nav>
            <i className='bx bx-menu' onClick={toggleSidebar}></i>
            <a href="#" className="nav-link">Categories</a>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
                </div>
            </form>
            <a href="/notification" className="notification">
                <i className='bx bxs-bell'></i>
                <span className="num">8</span>
            </a>
            <a href="#" className="profile">
                <img src="img/profile.jpg" alt="Profile" />
            </a>
        </nav>
    );
}

export default Navbar; 