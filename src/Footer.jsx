import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
         <div className="screens_footer">
  <div className="container">
    <div className="row mx-0 align-items-center">
      <div className="col text-center">
        <Link className="footer_mennus position-relative" to="/Home"><img src="assets/img/home.svg" alt=""/></Link>
      </div>
      <div className="col text-center">
        <Link className="footer_mennus position-relative" to="/Profile"><img src="assets/img/user.svg" alt=""/></Link>
      </div>
      <div className="col text-center middle_menus">
        <Link className="footer_mennus position-relative active_menu" to="/Clock"><img className="bg-white rounded-pill"
            src="assets/img/active_clock.svg" alt=""/></Link>
      </div>
      <div className="col text-center">
        <Link className="footer_mennus position-relative" to="/TimeSheet"><img src="assets/img/timesheet.svg"
            alt=""/></Link>
      </div>
      <div className="col text-center">
        <Link className="footer_mennus position-relative" to="/TimesheetTask"><img src="assets/img/settings.svg"
            alt=""/></Link>
      </div>
    </div>
  </div>
</div>   
        </>
    )
}

export default Footer
