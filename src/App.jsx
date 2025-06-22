
import React from 'react';
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from './context/AuthProvider';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const { authUser } = useAuth();

  return (
    <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
    </Routes>
  );
}

export default App;

