import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Otp from './User/Otp';
import Verify from './User/Verify';
import SignUp from './User/SignUp';
import SignIn from './User/SignIn';
import Home from './Home';
import TimeSheet from './Timesheet/TimeSheet';
import Clock from './Clock/Clock';
import ClockIn from './Clock/ClockIn';
import ClockOut from './Clock/ClockOut';
import ClockTask from './Clock/ClockTask';
import TimesheetTask from './Timesheet/TimesheetTask';
import Profile from './User/Profile';


function App() {

  return (
    <>
    <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/ClockTask" element={<ClockTask />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/TimesheetTask" element={<TimesheetTask />} />
            <Route path="/ClockOut" element={<ClockOut />} />
            <Route path="/ClockIn" element={<ClockIn />} />
            <Route path="/Clock" element={<Clock />} />
            <Route path="/TimeSheet" element={<TimeSheet />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Verify" element={<Verify />} />
            <Route path="/Otp" element={<  Otp />} />
          
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App;
