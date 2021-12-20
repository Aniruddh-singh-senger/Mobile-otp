import React from 'react'

const ClockFolder = () => {
    return (
        <>
          
<div className="modal fade" id="exampleModal12" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content rounded-20">
      <div className="modal-header text-center position-relative py-4">
        <h5 className="modal-title text-center fs-18 fw-bold text-theme2 w-100" id="exampleModalLabel">Site Induction</h5>
        <button type="button" className="btn-close fs-14 text-theme2 fw-600 position-absolute start-10px" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body py-0">
        <div className="row">
          <div className="col-12 px-0 site_induction"> 
            <form className="row" action="">
              <div className="form-group position-relative text-start px-2"> 
                <input type="text" id="address" name="address" className="form-control bg-white shadow-none px-4 fs-15 border-bottom border-1 rounded-4 h-60px"/>
              </div>
              <div className="form-group position-relative text-start px-2"> 
                <input type="text" id="address" name="address" className="form-control bg-white shadow-none px-4 fs-15 border-bottom border-1 rounded-4 h-60px"/>
              </div>
              <div className="form-group position-relative text-start px-2"> 
                <input type="text" id="address" name="address" className="form-control bg-white shadow-none px-4 fs-15 border-bottom border-1 rounded-4 h-60px"/>
              </div> 
              <div className="form-group position-relative text-start px-5 mt-5 pt-4">
                <label className="fw-600 fs-16 d-flex mb-2" for="message">Add Note</label>
                <textarea className="form-control shadow-none h-90px" name="message" id="message"></textarea>
              </div> 
            </form>
          </div>
        </div>
      </div>
      <div className="modal-footer border-0 py-3 mt-4">
        <div className="row mx-0 w-100 justify-content-end"> 
          <div className="col-5">
            <a href="/ClockIn" className="button_screens rounded-8 fs-15">Skip</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>  
        </>
    )
}

export default ClockFolder;
