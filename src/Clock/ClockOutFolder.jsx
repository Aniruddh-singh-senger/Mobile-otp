import React from 'react'

const ClockOutFolder = () => {
    return (
        <>
          <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content rounded-20">
      <div className="modal-header text-center position-relative py-4">
        <h5 className="modal-title text-center fs-18 fw-bold text-theme2 w-100" id="exampleModalLabel">Edit Site</h5>
        <button type="button" className="btn-close fs-14 text-theme2 fw-600 position-absolute start-10px" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body py-0">
        <div className="row">
          <div className="col-12">
            <div className="row py-3 border-bottom">
              <div className="col-6">
                <span className="fs-16 text-theme2 fw-600">Site:</span>
              </div>
              <div className="col-6 text-end">
                <span className="fs-16 text-theme2 fw-600">Site 1</span>
              </div>
            </div>
            <div className="row py-3 border-bottom">
              <div className="col-3">
                <span className="fs-16 text-theme2 fw-600">Start:</span>
              </div>
              <div className="col">
                <span className="fs-16 text-theme2 fw-600">Aug 19/2021</span>
              </div>
              <div className="col-3 text-end">
                <span className="fs-16 text-theme2 fw-600">23 : 38</span>
              </div>
            </div>
            <div className="row py-3 border-bottom">
              <div className="col-3">
                <span className="fs-16 text-theme2 fw-600">End: </span>
              </div>
              <div className="col">
                <span className="fs-16 text-theme2 fw-600">Aug 19/2021</span>
              </div>
              <div className="col-3 text-end">
                <span className="fs-16 text-theme2 fw-600">23 : 50</span>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-6">
                <span className="fs-16 text-theme2 fw-600">Total Hours</span>
              </div>

              <div className="col-6 text-end">
                <span className="fs-16 text-theme2 fw-600">00 : 04</span>
              </div>
            </div>
            <form className="row" action="">
              <div className="form-group position-relative text-start mb-4">
                <label className="fw-600 fs-16 d-flex mb-2" for="message">Add Note</label>
                <textarea className="form-control shadow-none h-90px" name="message" id="message"></textarea>
              </div> 
            </form>
          </div>
        </div>
      </div>
      <div className="modal-footer border-0 py-3">
        <div className="row mx-0 w-100">
          <div className="col-6">
            <button type="button" className="button_screens rounded-8 fs-15" data-bs-dismiss="modal">Cancel</button>
          </div>
          <div className="col-6">
            <button type="button" className="button_screens rounded-8 fs-15">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content rounded-20">
      <div className="modal-header text-center position-relative py-4">
        <h5 className="modal-title text-center fs-18 fw-bold text-theme2 w-100" id="exampleModalLabel">Add Site</h5>
        <button type="button" className="btn-close fs-14 text-theme2 fw-600 position-absolute start-10px" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body py-0">
        <div className="row">
          <div className="col-12">
            <div className="row py-3 border-bottom">
              <div className="col-6">
                <span className="fs-16 text-theme2 fw-600">Site:</span>
              </div>
              <div className="col-6 text-end">
                <span className="fs-16 text-theme2 fw-600">Site 3</span>
              </div>
            </div>
            <div className="row py-3 border-bottom">
              <div className="col-6">
                <span className="fs-16 text-theme2 fw-600">Start:</span>
              </div>
              <div className="col-6 text-end">
                <span className="fs-16 text-theme2 fw-600">Aug 19 / 9:00</span>
              </div>
            </div>
             <div className="row py-3 border-bottom">
              <div className="col-6">
                <span className="fs-16 text-theme2 fw-600">End:</span>
              </div>
              <div className="col-6 text-end">
                <span className="fs-16 text-theme2 fw-600">Aug 19 / 17:00</span>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-6">
                <span className="fs-16 text-theme2 fw-600">Total Hours</span>
              </div>

              <div className="col-6 text-end">
                <span className="fs-16 text-theme2 fw-600">8 : 00</span>
              </div>
            </div>
            <form className="row" action="">
              <div className="form-group position-relative text-start mb-4">
                <label className="fw-600 fs-16 d-flex mb-2" for="message">Add Note</label>
                <textarea className="form-control shadow-none h-90px" name="message" id="message"></textarea>
              </div> 
            </form>
          </div>
        </div>
      </div>
      <div className="modal-footer border-0 py-3">
        <div className="row mx-0 w-100">
          <div className="col-6">
            <button type="button" className="button_screens rounded-8 fs-15" data-bs-dismiss="modal">Cancel</button>
          </div>
          <div className="col-6">
            <button type="button" className="button_screens rounded-8 fs-15">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  
        </>
    )
}

export default ClockOutFolder
