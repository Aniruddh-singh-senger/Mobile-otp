import React from 'react'

const Otp = () => {
    return (
        <>
         
  
  <main className="main-scrollbar">

<div className="get-otp container-fluid position-relative py-5">
  <div className="container py-3">
    <div className="row">
      <div className="col-12 get_otp_img text-center">
        <img className="w-50" src="assets/img/verify.svg" alt=""/>
      </div>
      <div className="col-12 text-center verify_content mt-5">
        <h2 className="fs-23 text-theme2 fw-bold">Verify your identity</h2>
        <span className="fs-13 text-muted">We have just send a code to (+61) 0431 000 000</span>
        <form className="mt-5 pt-5" action="">
          <div className="digit-group form-group row mx-0">

            <input className="col px-0 text-center mx-2 h-65px form-control shadow-none fs-22 fw-bold text-theme2"
              type="text" id="digit-1" data-next="digit-2" maxlength="1" autocomplete="off"/>

            <input className="col px-0 text-center mx-2 h-65px form-control shadow-none fs-22 fw-bold text-theme2"
              type="text" id="digit-2" data-next="digit-3" data-previous="digit-1" maxlength="1" autocomplete="off"/>

            <input className="col px-0 text-center mx-2 h-65px form-control shadow-none fs-22 fw-bold text-theme2"
              type="text" id="digit-3" data-next="digit-4" data-previous="digit-2" maxlength="1" autocomplete="off"/>

            <input className="col px-0 text-center mx-2 h-65px form-control shadow-none fs-22 fw-bold text-theme2"
              type="text" id="digit-4" data-next="digit-5" data-previous="digit-3" maxlength="1" autocomplete="off"/>

          </div>
          <div className="form-group my-4">
            <span className="fs-14 text-muted">I didn&apos;t receive code. <a className="text-theme1" href="javascript:;">Resend
                Code</a></span>
          </div>
          <div className="form-group mt-5 pt-5">
            <input type="button" className="button_screens" value="Confirm"/>
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

export default Otp
