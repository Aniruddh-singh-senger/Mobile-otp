import React from 'react'

const SignUp = () => {
    return (
        <>
         <main className="main-scrollbar">

<div className="screens_header position-fixed bg-theme1 h-70px zi-9 d-flex align-items-center w-100">
  <div className="container">
    <div className="row align-items-center position-relative position-relative zi-2"> 
      <div className="col text-center">
        <h2 className="text-white fw-600 fs-18 mb-0">Create Account</h2>
      </div>
    </div>
  </div>
</div>
<div className="screens_scroll_part h-100 pt-5">
  <div className="container">
    <div className="row py-5 mt-4">
      <div className="col-12 text-center">
        <div className="">
          <h2 className="fs-18 mb-1 text-theme2 fw-bold">Sign Up</h2>
          <span className="fs-14 text-muted">Please Sign Up</span>
        </div>
        <form className="mt-4" action="">
          <div className="form-group position-relative mb-4">
            <input type="email" className="form-control shadow-none" id="mail" name="mail" placeholder="Email"/>
            <label className="input_icon" for=""><img className="img-fluid" src="assets/img/mail.svg" alt=""/></label>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="password" className="form-control shadow-none" id="password" name="password"
              placeholder="password"/>
            <label className="input_icon" for=""><img className="img-fluid" src="assets/img/password.svg" alt=""/></label>
          </div>
          <div className="form-group mt-5 mb-4">
            <input type="button" className="button_screens" value="Sign Up"/>
          </div>
          <div className="form-group text-center position-relative text-start my-3 pt-2">
            <span className="fs-16 text-muted fw-600">Social Logins</span>
          </div>
          <div className="form-group justify-content-center mx-0 row pt-2">
            <div className="col-auto">
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Login with facebook" className="d-flex align-items-center h-50px w-50px rounded-pill shadow border border-2 bg-light p-1" href="javascript:;"><img className="img-fluid" src="assets/img/facebook.png" alt=""/></a>
            </div>
            <div className="col-auto">
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Login with google" className="d-flex align-items-center h-50px w-50px rounded-pill shadow border border-2 bg-light p-1" href="javascript:;"><img className="img-fluid" src="assets/img/google.svg" alt=""/></a>
            </div>
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

export default SignUp
