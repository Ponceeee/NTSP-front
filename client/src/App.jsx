//src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/admin/AdminDashboard';
// import RequestPage from './components/RequestPage';
// import Editpage from './components/EditPage';
// import ReportsPage from './components/ReportsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        {/* <Route path="/request" element={<RequestPage />} /> */}
        {/* <Route path="/edit" element={<Editpage/>} /> */}
        {/* <Route path="/reports" element={<ReportsPage/>} /> */}
        {/* <Route path="/user" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} /> */}
        {/* <Route path="/request" element={<ProtectedRoute role="user"><Sidebar /></ProtectedRoute>} /> */}
      </Routes>
    </>
  );
}

export default App;
