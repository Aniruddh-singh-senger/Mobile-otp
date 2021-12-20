import React from 'react'

const Verify = () => {
    return (
        <>
          
  <main className="main-scrollbar">

<div className="verify-screens container-fluid position-relative py-5">
  <div className="container py-3">
    <div className="row">
      <div className="col-12 verify_img text-center">
        <img className="w-60" src="assets/img/user-interface.svg" alt=""/>
      </div>
      <div className="col-12 text-center verify_content mt-5">
        <h2 className="fs-18 text-theme2 fw-bold">What&apos;s your phone number?</h2>
        <span className="fs-14 text-muted">We will feed you able to verify your number</span>
        <form className="mt-5" action="">
          <div className="form-group mb-4 position-relative">
            <input type="number" className="form-control shadow-none" id="number" name="number"
              placeholder="Phone number"/>
            <label className="input_icon" for=""><img className="img-fluid" src="assets/img/call.svg" alt=""/></label>
          </div>
          <div className="form-group mb-4 pt-2">
            <input onclick="window.location.href='otp.html';" type="button" className="button_screens" value="Verify"/>
          </div>
          <div className="form-group mb-4 pt-2">
            <input type="button" className="button_screens" value="Use Email"/>
          </div>

          <div className="form-group pt-5">
            <label className="text-muted mb-2 d-block fs-14" for="">No Account?</label>
            <input onclick="window.location.href='sign-up.html';" type="button" className="button_screens" value="Create Account"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</div> 
</main>


        </>
    )
}

export default Verify
