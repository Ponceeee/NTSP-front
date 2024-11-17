//src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/admin/AdminDashboard';
import RequestPage from './components/admin/RequestPage';
import Editpage from './components/admin/EditPage';
import ReportsPage from './components/admin/ReportsPage';
import ArchivedPage from './components/admin/ArchivedPage';
import AdminActivityPage from './components/admin/AdminActivityPage';
import NotificationPage from './components/NotificationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/edit" element={<Editpage/>} />
        <Route path="/reports" element={<ReportsPage/>} />
        <Route path="/archive" element={<ArchivedPage/>} />
        <Route path="/activity" element={<AdminActivityPage/>} />
        <Route path="/notification" element={<NotificationPage/>} />
        {/* <Route path="/user" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} /> */}
        {/* <Route path="/request" element={<ProtectedRoute role="user"><Sidebar /></ProtectedRoute>} /> */}
      </Routes>
    </>
  );
}

export default App;
