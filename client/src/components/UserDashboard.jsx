//src/components/UserDashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';


function UserDashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('sessionToken');
        if (!token) {
            navigate('/login');
        } else {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Math.floor(Date.now() / 1000);
            if (decodedToken.exp < currentTime) {
                sessionStorage.removeItem('sessionToken');
                navigate('/login');
            }
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('sessionToken');
        navigate('/login');
    };

    return (
        <div className="user-dashboard">
            <Dashboard />
        </div>
    );
}

export default UserDashboard;
