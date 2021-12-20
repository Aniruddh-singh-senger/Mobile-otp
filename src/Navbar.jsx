import React from 'react'
import { Link } from 'react-router-dom'

 const Navbar = () => {
 
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ zIndex: '1', position: 'sticky', top: '0.1px' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Home">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/Profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Verify">Verify</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/SignUp">SignUp</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/SignIn">SignIn</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Otp">Otp</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TimeSheet">TimeSheet</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TimesheetTask">TimesheetTask</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Clock">Clock</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ClockIn">ClockIn</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ClockOut">ClockOut</Link>
                </li>            
                <li className="nav-item">
                  <Link className="nav-link" to="/ClockTask">ClockTask</Link>
                </li>         
              </ul>
            </div>
          </div>
        </nav>
      </>
    )}

export default Navbar;