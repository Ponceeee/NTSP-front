// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './AdminSidebar';
import Navbar from './Navbar';
import '../css/EditPage.css';


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
          <h1>Edit Items</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Add Items</a>
            </li>
            <li><i className="bx bx-chevron-right" /></li>
            <li>
              <a className="active" href="Dashboard.html">Home</a>
            </li>
          </ul>
        </div>
        {/* <a href="#" class="btn-download">
					<i class='bx bxs-cloud-download' ></i>
					<span class="text">Download PDF</span>
				</a> */}
      </div>
      <div className="table-data">
        <div className="pending-requests">
          <div className="head">
            <h3>All items</h3>
            <i className="bx bx-filter" />
          </div>
          <div className="order">
            <table>
              <thead>
                <tr>
                  <th>Item Description</th>
                  <th>Item ID</th>
                  <th>
                    <a href><i className="bx bx-plus" style={{fontSize: 24, color: '#15ff00'}} />
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>22000</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>220011</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>220012</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>220013</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>220014</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>220015</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>2200116</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>2200117</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>220018</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="img/people.png" alt="User Image" />
                    <p>Epson 705HD Powerlite Home Cinema LCD Projector</p>
                  </td>
                  <td>220019</td>
                  <td>
                    <a href>
                      <span className="status R1">view</span>
                    </a>
                  </td><td>
                    <a href>
                      <i className="bx bxs-archive-in" style={{fontSize: 24, color: '#f44336'}} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div class="todo">
					<div class="head">
						<h3>Todos</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div> */}
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
