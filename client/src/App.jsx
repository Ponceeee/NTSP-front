//src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UserDashboard from './components/user/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminDashboard';
import UserRequest from './components/user/UserRequest';
// import Sidebar from './components/Sidebar';
// import AdminDashboard from './components/UserDashboard';
// import RequestPage from './components/RequestPage';
// import EditPage from './components/EditPage';
// import NotificationPage from './components/NotificationPage';
// import ReportsPage from './components/ReportsPage';
// import RequestPage from './components/RequestPage';
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
        {/* <Route path="/requestpage" element={<RequestPage />} /> */}
        <Route path="/user" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} />
        <Route path="/user/requests" element={<UserRequest />} />
        {/* <Route path="/request" element={<ProtectedRoute role="user"><Sidebar /></ProtectedRoute>} /> */}
      </Routes>
    </>
  );
}

export default App;
