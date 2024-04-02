import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Componenets/Home';
import Courses from '../Componenets/Courses';
import CurrentAffairs from '../Componenets/CurrentAffairs';
import Download from '../Componenets/Download';
import Login from '../Componenets/Login';
import Register from '../Componenets/Register';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
      <Route path="/currentaffairs" element={<PrivateRoute><CurrentAffairs /></PrivateRoute>} />
      <Route path="/download" element={<PrivateRoute><Download /></PrivateRoute>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<PrivateRoute><Login /></PrivateRoute>}/>
    </Routes>
  );
};

export default AllRoutes;