import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    return (
        <nav>
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
            <a className="profile">
                <img src="src/assets/profile.png" alt="Profile" />
            </a>
        </nav>
    );
}

export default Navbar; 