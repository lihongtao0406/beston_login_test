/* eslint-disable */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import SignIn from './pages/Login';
import SignUp from './pages/Register';
import ResetPwd from './pages/ResetPassword';
import AlertDialog from './pages/AlertDialog';
import DashBoard from './pages/DashBoard';
import Test from './pages/test';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/resetpwd" element={<ResetPwd />} />
        <Route path="/alert" element={<AlertDialog />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
