//src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UserDashboard from './components/user/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminDashboard';
// import Sidebar from './components/Sidebar';
// import AdminDashboard from './components/UserDashboard';
// import RequestPage from './components/RequestPage';
// import EditPage from './components/EditPage';
// import NotificationPage from './components/NotificationPage';
// import ReportsPage from './components/ReportsPage';
// import RequestPage from './components/RequestPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        {/* <Route path="/requestpage" element={<RequestPage />} /> */}
        <Route path="/user" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} />
        {/* <Route path="/request" element={<ProtectedRoute role="user"><Sidebar /></ProtectedRoute>} /> */}
      </Routes>
    </>
  );
}

export default App;
