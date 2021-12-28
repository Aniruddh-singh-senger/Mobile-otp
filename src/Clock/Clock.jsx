import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import ClockModal from './ClockModal';




const Clock = () => {
    return (
        <>
         
  <main className="main-scrollbar">

<div className="screens_header position-fixed bg-theme1 h-70px zi-9 d-flex align-items-center w-100">
  <div className="container">
    <div className="row align-items-center position-relative position-relative zi-2">
      <div className="col-auto position-absolute start-0">
        <a href="/"><img className="w-32px" src="assets/img/back-btn.svg" alt=""/></a>
      </div>
      <div className="col text-center">
        <h2 className="text-white fw-600 fs-18 mb-0">Clock</h2>
      </div>
    </div>
  </div>
</div>
<div className="screens_scroll_part py-5">
  <div className="map_box">
    <iframe width="100%" title="frame"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509167.682012511!2d-123.79975055493215!3d37.1929955926075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1637221594680!5m2!1sen!2sin"
      allowFullScreen="" loading="lazy"></iframe>
  </div>
  <div className="container pt-3">
    <div className="row">
      <div className="col-12 text-center mb-4">
        <form className="" action="">
          <div className="form-group position-relative text-start mb-3">
            <input type="text" id="address" name="address" className="form-control shadow-none px-4"
              placeholder="Where you are"/>
          </div>
          <div className="form-group position-relative text-start">
            <input type="email" id="mail" name="mail" className="form-control shadow-none px-4"
              placeholder="Enter Address"/>
          </div>
          <div className="form-group text-center position-relative text-start my-3">
            <span className="fs-16 text-muted fw-600">OR</span>
          </div>
          <div className="row justify-content-between">
            <div className="col-6">
              <div className="form-group position-relative text-start mb-3">
                <input type="text" id="address" name="address" className="form-control shadow-none px-4"
                  placeholder="Enter Code"/>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group position-relative text-start mb-3">
                <button type="button" className="button_screens rounded-10 fs-15">Scan QR Code</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-12 my-5">
        <Link className="start_timer" data-bs-toggle="modal" data-bs-target="#exampleModal12" to="/ClockIn">
          <div><img src="assets/img/timer.svg" alt=""/>
            <strong className="d-flex align-items-center text-theme1 mt-2 fs-14">Start Timer</strong>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>
<Footer /> 
</main>
<ClockModal />

        </>
    )
}

export default Clock
