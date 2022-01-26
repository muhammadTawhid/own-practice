import './App.css';
import React, { useContext, useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from './Component/Appointment/Appointment/Appointment';
import Login from './Component/Login/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/appointments" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;
