import React from 'react';
import Footer from '../Footer';


const ClockIn = () => {
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
        <h2 className="text-white fw-600 fs-18 mb-0">Clock In</h2>
      </div>
    </div>
  </div>
</div>
<div className="screens_scroll_part pt-5">
  <div className="container pt-5">
    <div className="row pt-2">
      <div className="col-12">
        <div className="row clock_in_box">
          <div className="col-12">
            <div className="bg-light p-4 rounded-8 border border-2 text-start">
              <span className="d-block fs-18 mb-2 text-muted mt-2">Site 1</span>
              <strong className="fs-43 text-theme2 fw-500">00 : 45 : 36</strong>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-start my-4 py-2">
            <span className="d-block fs-17 mb-0 fw-500 text-muted">Total hours today</span>
            <label className="fs-36 text-theme2">02 : 30 : 00</label>
          </div>
        </div>
      </div>
      <div className="col-12">
        <form className="" action="">
          <div className="form-group position-relative text-start mb-4">
            <label className="fw-600 fs-16 d-flex mb-2" for="message">Add Note</label>
            <textarea className="form-control shadow-none" name="message" id="message"></textarea>
          </div>
          <div className="form-group position-relative text-center my-5 py-5">
            <a href="/ClockOut" className="button_screens rounded-10 fs-15 d-inline-flex w-auto px-4">Clock Out</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<Footer />
</main>  
        </>
    )
}

export default ClockIn
