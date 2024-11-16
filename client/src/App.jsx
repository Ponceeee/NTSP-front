//src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
// import AdminDashboard from './components/UserDashboard';
// import RequestPage from './components/RequestPage';
// import EditPage from './components/EditPage';
// import NotificationPage from './components/NotificationPage';
// import ReportsPage from './components/ReportsPage';
import UserDashboard from './components/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin" element={<ProtectedRoute role="admin"><UserDashboard /></ProtectedRoute>} /> */}
        <Route path="/user" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
