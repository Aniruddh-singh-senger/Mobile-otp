import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Otp = () => {


  const history = useNavigate();
  const location = useLocation();
  const myparam = location.state;

  const [number, setNumber] = useState(30);
  const timerId = useRef();

  if (number === 0 || number < 0) {
    clearInterval(timerId.current);
  }
  function tick() {
    setNumber((number) => number - 1);
  }

  const [mobile, setMobile] = useState(myparam)
  const [otp1, setOtp1] = useState("")
  const [otp2, setOtp2] = useState("")
  const [otp3, setOtp3] = useState("")
  const [otp4, setOtp4] = useState("")

  let pin1 = useRef(null)
  let pin2 = useRef(null)
  let pin3 = useRef(null)
  let pin4 = useRef(null)



  const verification = async (e) => {
    e.preventDefault();

    if (!otp1 || !otp2 || !otp3 || !otp4) {
      toast.warning("Please fill  field")
    } else {
      let otp = `${otp1}${otp2}${otp3}${otp4}`
      let otps = { mobile, otp }
      console.log(otps)

      let result = await fetch("http://128.199.27.151:4040/api/verifyMobile", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(otps),
      })
      result = await result.json()
      console.log(result.responseCode);
      if (result.responseCode === 400 || result.error === 'valid email is required') {
        toast.error(result.message, { position: "top-center" })
      } else {
        toast.success(result.message, { position: "top-center" })
        history('/Profile', { state: mobile })
      }
      console.log("result", result)
    }
  }
  useEffect(() => {
    timerId.current = setInterval(tick, 1000);
  }, []);

  return (
    <>
      <main className="main-scrollbar">
        <div className="get-otp container-fluid position-relative py-5">
          <div className="container py-3">
            <div className="row">
              <div className="col-12 get_otp_img text-center">
                <img className="w-50" src="assets/img/verify.svg" alt="" />
              </div>
              <div className="col-12 text-center verify_content mt-5">
                <h2 className="fs-23 text-theme2 fw-bold">Verify your identity</h2>
                <span className="fs-13 text-muted">We have just send a code to (+61) 0431 000 000</span>
                <form className="mt-5 pt-5" onSubmit={verification}>
                  <div className="digit-group form-group row mx-0">

                    <input className="col px-0 text-center mx-2 h-65px form-control shadow-none fs-22 fw-bold text-theme2"
                      type="number" id="digit-1" data-next="digit-2" autoComplete="off" autoFocus ref={pin1} value={otp1} onChange={(e) => {
                        setOtp1(e.target.value.slice(0, 1))
                        if (otp1 === "") {
                          pin2.current.focus()
                        }
                      }} />

                    <input className="col px-0 text-center mx-2 h-65px form-control shadow-none fs-22 fw-bold text-theme2"
                      type="number" id="digit-2" data-next="digit-3" data-previous="digit-1" ref={pin2} value={otp2} onChange={(e) => {
                        setOtp2(e.target.value.slice(0, 1))
                        if (otp2 === "") {
                          pin3.current.focus()
                        }
                        else if (e.target.value === "") {
                          pin1.current.focus()
                        }
                      }} autoComplete="off" />

                    <input className="col px-0 text-center mx-2 h-65px form-control shadow-none fs-22 fw-bold text-theme2"
                      type="number" id="digit-3" data-next="digit-4" data-previous="digit-2" ref={pin3} value={otp3} onChange={(e) => {
                        setOtp3(e.target.value.slice(0, 1))
                        if (otp3 === "") {
                          pin4.current.focus()
                        }
                        else if (e.target.value === "") {
                          pin2.current.focus()
                        }
                      }} autoComplete="off" />

                    <input className="col px-0 text-center mx-2 h-65px form-control shadow-none fs-22 fw-bold text-theme2"
                      type="number" id="digit-4" data-next="digit-5" data-previous="digit-3" ref={pin4} value={otp4} onChange={(e) => {
                        setOtp4(e.target.value.slice(0, 1))
                        if (e.target.value === "") {
                          pin3.current.focus()
                        }
                      }} autoComplete="off" />
                  </div>

                  <div className="form-group my-4">
                    {number === 0 ? (
                      <span className="fs-14 text-muted">I didn&apos;t receive code. <a className="text-theme1" style={{cursor:"pointer"}} onClick={()=> setNumber(timerId.current = setInterval(tick, 1000))}>Resend
                        Code</a></span>
                    ) : (
                      <p>Enter OTP in {number} seconds</p>
                    )}
                  </div>
                  <div className="form-group mt-5 pt-5">
                    <input type="submit" className="button_screens" value="Confirm" />
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

export default Otp;
