import React from 'react'

const Footer = () => {
    return (
        <>
         <div className="screens_footer">
  <div className="container">
    <div className="row mx-0 align-items-center">
      <div className="col text-center">
        <a className="footer_mennus position-relative" href="/Home"><img src="assets/img/home.svg" alt=""/></a>
      </div>
      <div className="col text-center">
        <a className="footer_mennus position-relative" href="/Profile"><img src="assets/img/user.svg" alt=""/></a>
      </div>
      <div className="col text-center middle_menus">
        <a className="footer_mennus position-relative active_menu" href="/Clock"><img className="bg-white rounded-pill"
            src="assets/img/active_clock.svg" alt=""/></a>
      </div>
      <div className="col text-center">
        <a className="footer_mennus position-relative" href="/TimeSheet"><img src="assets/img/timesheet.svg"
            alt=""/></a>
      </div>
      <div className="col text-center">
        <a className="footer_mennus position-relative" href="javascript:;"><img src="assets/img/settings.svg"
            alt=""/></a>
      </div>
    </div>
  </div>
</div>   
        </>
    )
}

export default Footer
