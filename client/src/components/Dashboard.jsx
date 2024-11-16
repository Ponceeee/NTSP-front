// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Dashboard() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ title: '', image: '', status: '' });
    const [borrowTime, setBorrowTime] = useState('');
    const [isBookButtonActive, setIsBookButtonActive] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://apis.google.com/js/api.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        setIsBookButtonActive(!!borrowTime);
    }, [borrowTime]);

    const openOverlay = (item) => {
        setSelectedItem(item);
        setOverlayVisible(true);
        setBorrowTime('');
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
    };

    return (
        <div>
            <header>
                <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
                <title>Admin Dashboard</title>
            </header>
            <Sidebar />
            <section id="content">
                <Navbar />
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li><a href="#">Dashboard</a></li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li><a className="active" href="#">Home</a></li>
                            </ul>
                        </div>
                        <a href="#" className="btn-download">
                            <i className='bx bxs-cloud-download'></i>
                            <span className="text">Download PDF</span>
                        </a>
                    </div>

                    <ul className="box-info">
                        <li>
                            <i className='bx bxs-calendar-check'></i>
                            <span className="text">
                                <h3>13</h3>
                                <p>Pending Requests</p>
                            </span>
                        </li>
                        <li>
                            <i className='bx bxs-group'></i>
                            <span className="text">
                                <h3>5</h3>
                                <p>Active Borrowers</p>
                            </span>
                        </li>
                        <li>
                            <i className='bx bxs-error-circle'></i>
                            <span className="text">
                                <h3>3</h3>
                                <p>Overdue Items</p>
                            </span>
                        </li>
                    </ul>

                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Recent Requests</h3>
                                <a href="/mainpage" className="view-all">View All</a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Item</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ian Dave Javier</td>
                                        <td>LCD Projector</td>
                                        <td>March 15, 2024</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>Sern Ponce</td>
                                        <td>HDMI Cable</td>
                                        <td>March 14, 2024</td>
                                        <td><span className="status completed">Approved</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="quick-actions">
                            <h2>Quick Actions</h2>
                            <div className="quick-actions-buttons">
                                <button className="action-btn add-new" onClick={() => openOverlay({ title: 'Add New Item' })}>
                                    <i className="bx bx-plus-circle"></i>
                                    Add New Item
                                </button>
                                <button className="action-btn review" onClick={() => openOverlay({ title: 'Review Requests' })}>
                                    <i className="bx bx-list-check"></i>
                                    Review Requests
                                </button>
                                <button className="action-btn scanner" onClick={() => openOverlay({ title: 'Scanner' })}>
                                    <i className="bx bx-scan"></i>
                                    Scanner
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            {overlayVisible && (
                <div className="overlay" id="borrowOverlay">
                    <div className="overlay-content">
                        <span className="close-btn" onClick={closeOverlay}>&times;</span>
                        <h2>{selectedItem.title}</h2>
                        <img id="selectedItemImage" src={selectedItem.image} alt={selectedItem.title} />
                        <p id="selectedItemName">{selectedItem.title}</p>
                        <input
                            type="time"
                            id="borrowTime"
                            value={borrowTime}
                            onChange={(e) => setBorrowTime(e.target.value)}
                        />
                        <button
                            id="bookButton"
                            disabled={!isBookButtonActive}
                            className={isBookButtonActive ? 'active' : ''}
                        >
                            Book
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
