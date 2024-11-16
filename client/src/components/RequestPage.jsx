import React from 'react';
import Sidebar from './Sidebar';
import AdminDashboard from './AdminDashboard';
import Navbar from './Navbar';
import '../css/RequestPage.css';

function RequestPage() {
    return (
        <div>
            <Sidebar />
            <AdminDashboard />
            <Navbar />
        </div>
    );
}

export default RequestPage;
