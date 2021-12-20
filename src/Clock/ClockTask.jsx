import React from 'react';
import ClockTaskModal from './ClockTaskModal';


const ClockTask = () => {
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
        <h2 className="text-white fw-600 fs-18 mb-0">Thu, Aug 19</h2>
      </div>
    </div>
  </div>
</div>
<div className="screens_scroll_part h-100 pt-5">
  <div className="container pt-5">
    <div className="row pt-2">
      <div className="col-12">
        <div className="row daily_summry">
          <div className="col-12 mb-4">
            <div className="bg-light rounded-4 border border-1 text-center">
              <div className="row mx-0">
                <div className="col-12 py-3 border-bottom">
                  <span className="text-theme2 fs-16 fw-bold">Daily Summary</span>
                </div>
                <div className="col-12 py-3 border-bottom">
                  <div className="row mb-2">
                    <div className="col-4 text-start pe-1">
                      <span className="text-theme2 fs-16 fw-500">Task</span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500">23 : 38</span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500">23 : 43</span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500">0.05</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 text-start pe-1">
                      <span data-bs-toggle="modal" data-bs-target="#exampleModal2"
                        className="text-theme2 fs-16 fw-500">ADD SITE</span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500"> </span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500"> </span>
                    </div>
                    <div className="col px-1">
                      <span data-bs-toggle="modal" data-bs-target="#exampleModal1"
                        className="text-theme2 fs-16 fw-500">EDIT</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 py-3 border-bottom">
                  <div className="row mb-2">
                    <div className="col-4 text-start pe-1">
                      <span className="text-theme2 fs-16 fw-500">Site 2</span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500">23 : 00</span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500">23 : 19</span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500">0.59</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 text-start pe-1">
                      <span className="text-theme2 fs-16 fw-500"> </span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500"> </span>
                    </div>
                    <div className="col px-1">
                      <span className="text-theme2 fs-16 fw-500"> </span>
                    </div>
                    <div className="col px-1">
                      <span data-bs-toggle="modal" data-bs-target="#exampleModal1"
                        className="text-theme2 fs-16 fw-500">EDIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center my-4">
            <strong className="fs-20 fw-500 d-block mb-2">Today&apos;s Total</strong>
            <div className="bg-light rounded-4 py-4 border border-1 text-center">
              <strong className="fw-500 fs-42">6 : 00</strong>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="bg-white rounded-20 border border-1 text-center">
              <div className="row mx-0">
                <div className="col-12 py-4 border-bottom">
                  <span className="text-theme2 fs-20 fw-500">Add Task</span>
                </div>
                <form className="py-4">
                  <div className="form-group position-relative text-start mb-3">
                    <label className="fw-600 fs-16 mb-1" for="">Trade Category</label>
                    <input type="text" id="address" name="address"
                      className="form-control shadow-none px-3 fs-14 h-33px"/>
                  </div>
                  <div className="form-group position-relative text-start mb-3">
                    <label className="fw-600 fs-16 mb-1" for="">Task Description</label>
                    <textarea className="form-control shadow-none fs-14" name="message" id="message"></textarea>
                  </div>
                  <div className="form-group position-relative text-start mb-3">
                    <label className="fw-600 fs-16 mb-1" for="">Time</label>
                    <input type="text" id="address" name="address"
                      className="form-control shadow-none px-3 fs-14 h-33px"/>
                  </div>
                  <div className="form-group position-relative mt-5 row justify-content-end pt-4">
                    <div className="col-6">
                      <a href="clock.html" className="button_screens rounded-8 fs-16"> + Add
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <form className="" action="">
          <div className="form-group position-relative text-center my-5 py-4">
            <div className="row mx-0">
              <div className="col-6">
                <a href="javascreipt:;" className="button_screens rounded-8 fs-16">Cancel</a>
              </div>
              <div className="col-6">
                <a href="javascreipt:;" className="button_screens rounded-pill fs-16">Share</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</main> 
<ClockTaskModal /> 
        </>
    )
}

export default ClockTask
