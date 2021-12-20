import React from 'react';
import Footer from '../Footer';
import ClockOutFolder from './ClockOutFolder';



const ClockOut = () => {
    return (
        <>
         
  <main className="main-scrollbar">

<div className="screens_header position-fixed bg-theme1 h-70px zi-9 d-flex align-items-center w-100">
  <div className="container">
    <div className="row align-items-center position-relative position-relative zi-2">
      <div className="col-auto position-absolute start-0">
        <a href="javascript:;"><img className="w-32px" src="assets/img/back-btn.svg" alt=""/></a>
      </div>
      <div className="col text-center">
        <h2 className="text-white fw-600 fs-18 mb-0">Clock Out</h2>
      </div>
    </div>
  </div>
</div>
<div className="screens_scroll_part pt-5">
  <div className="container pt-5">
    <div className="row pt-2">
      <div className="col-12">
        <div className="row clock_in_box">
          <div className="col-6 mb-4">
            <strong className="text-theme2 fs-18">Date</strong>
          </div>
          <div className="col-6 mb-4 text-end">
            <strong className="text-theme2 fs-18">Thu Aug 19</strong>
          </div>
          <div className="col-6 mb-4">
            <div className="bg-light p-3 rounded-8 border border-2 text-center">
              <span className="fw-500 fs-17 d-block">Clock In <br/> 22 : 38</span>
              <label className="" for=""><img src="assets/img/pin.svg" alt=""/> Site 1</label>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="bg-light p-3 rounded-8 border border-2 text-center">
              <span className="fw-500 fs-17 d-block">Clock Out <br/> 23 : 43</span>
              <label className="" for=""><img src="assets/img/pin.svg" alt=""/> Site 1</label>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="bg-light p-3 rounded-8 border border-2 text-center">
              <div className="row mx-0 align-items-center justify-content-between">
                <div className="col-auto">
                  <span className="fw-500 fs-17 d-block">Site 1</span>
                </div>
                <div className="col-auto">
                  <span className="fw-500 fs-17 d-block">Total Hrs <br/> 00 : 05</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <form className="" action="">
          <div className="form-group position-relative text-start mb-4">
            <label className="fw-600 fs-16 d-flex mb-2" for="message">Note</label>
            <textarea className="form-control shadow-none" name="message" id="message"></textarea>
          </div>
          <div className="form-group position-relative text-center my-5 py-4">
            <div className="row mx-0">
              <div className="col-6">
                <a href="javascreipt:;" data-bs-toggle="modal" data-bs-target="#exampleModal1"
                  className="button_screens rounded-8 fs-16"><img src="assets/img/edit.svg" alt=""/>Edit</a>
              </div>
              <div className="col-6">
                <a href="javascreipt:;" className="button_screens rounded-8 fs-16"><img src="assets/img/tick.svg"
                    alt=""/>Confirm</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<div className="screens_footer">
  <div className="container">
    <div className="row mx-0 align-items-center">
      <div className="col text-center">
        <a className="footer_mennus position-relative" href="index.html"><img src="assets/img/home.svg" alt=""/></a>
      </div>
      <div className="col text-center">
        <a className="footer_mennus position-relative" href="profile.html"><img src="assets/img/user.svg" alt=""/></a>
      </div>
      <div className="col text-center middle_menus">
        <a className="footer_mennus position-relative active_menu" href="clock.html"><img className="bg-white rounded-pill"
            src="assets/img/active_clock.svg" alt=""/></a>
      </div>
      <div className="col text-center">
        <a className="footer_mennus position-relative" href="timesheet.html"><img src="assets/img/timesheet.svg"
            alt=""/></a>
      </div>
      <div className="col text-center">
        <a className="footer_mennus position-relative" href="javascript:;"><img src="assets/img/settings.svg"
            alt=""/></a>
      </div>
    </div>
  </div>
</div>
</main> 
<Footer />
<ClockOutFolder />

        </>
    )
}

export default ClockOut
