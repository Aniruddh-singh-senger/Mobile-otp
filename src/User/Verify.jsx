import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verify = () => {


  const history = useNavigate();

  const [mobile, setMobile] = useState("")

  const verify = async (e) => {
    e.preventDefault()
    if (!mobile) {
      toast.warning("Please fill  field")
    } else if (mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !(mobile.match(/0{5,}/))) {
      let items = { mobile }
      console.log(items)
      let result = await fetch("http://128.199.27.151:4040/api/mobileLogin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(items),
      })
      result = await result.json();
      console.log("result", result)
      console.log(result.responseCode);
      if (result.responseCode === 400) {
        toast.error(result.message, { position: "top-center" })
      } else {
        toast.success(result.message, { position: "top-center" })
        history('/Otp', { state: mobile })
      }
    } else {
      toast.warning("at least 10 digit")
    }
  }

  return (
    <>

      <main className="main-scrollbar">

        <div className="verify-screens container-fluid position-relative py-5">
          <div className="container py-3">
            <div className="row">
              <div className="col-12 verify_img text-center">
                <img className="w-60" src="assets/img/user-interface.svg" alt="" />
              </div>
              <div className="col-12 text-center verify_content mt-5">
                <h2 className="fs-18 text-theme2 fw-bold">What&apos;s your phone number?</h2>
                <span className="fs-14 text-muted">We will feed you able to verify your number</span>
                <form className="mt-5" onSubmit={verify} >
                  <div className="form-group mb-4 position-relative">
                    <input type="number" className="form-control shadow-none" autoFocus id="number" name="number" value={mobile} onChange={(e) => setMobile(e.target.value)}
                      placeholder="Phone number" />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/call.svg" alt="" /></label>
                  </div>
                  <div className="form-group mb-4 pt-2">
                    <input type="submit" className="button_screens" value="Verify" />
                  </div>
                  <div className="form-group mb-4 pt-2">
                    <Link to="/SignIn" >
                      <input type="button" className="button_screens" value="Use Email" />
                    </Link >
                  </div>

                  <div className="form-group pt-5">
                    <label className="text-muted mb-2 d-block fs-14" htmlFor="">No Account?</label>
                    <input type="button" className="button_screens" value="Create Account" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />


    </>
  )
}

export default Verify
