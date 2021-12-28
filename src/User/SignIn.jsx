import React, { useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const SignIn = () => {

  const history = useNavigate();
  const getitems = () => {
    let list = localStorage.getItem('option')
    if (list) {
      return JSON.parse(localStorage.getItem('option'))
    } else {
      return [];
    }
  }

  const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)
  }

  const [enter, setEnter] = useState(getitems())

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const signin = async (e) => {
    e.preventDefault()
    if (!email) {
      toast.warning("Please fill the empty email")
    }
    else if (!password) {
      toast.warning("Please fill the empty password")
    }
       else if (email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/) && password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/)) {
      let items = { email, password }
      console.log(items)

      let result = await fetch("http://128.199.27.151:4040/api/emailLogin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(items),
      })
      result = await result.json();
      console.log(result.data.token)
      console.log(result.responseCode);
      if (result.responseCode === 400 || result.error === 'valid email is required') {
        toast.error(result.message, { position: "top-center" })
      } else {
        toast.success(result.message, { position: "top-center" })
        history('/Home')
      }
      console.log("result", result)
    } else {
      toast.warning("please fill vaild email and password")
    }
  }

  return (
    <>

      <main className="main-scrollbar">
        <div className="screens_header position-fixed bg-theme1 h-70px zi-9 d-flex align-items-center w-100">
          <div className="container">
            <div className="row align-items-center position-relative position-relative zi-2">
              <div className="col text-center">
                <h2 className="text-white fw-600 fs-18 mb-0">Sign In</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="screens_scroll_part h-100 pt-5">
          <div className="container">
            <div className="row py-5 mt-4">
              <div className="col-12 text-center">
                <div className="">
                  <h2 className="fs-18 mb-1 text-theme2 fw-bold">Sign In</h2>
                  <span className="fs-14 text-muted">Please Sign In</span>
                </div>
                <form className="mt-4" onSubmit={signin}>
                  <div className="form-group position-relative mb-4">
                    <input type="email" className="form-control shadow-none" autoFocus id="validationCustom01" name="mail" value={email} onChange={(e) => {

                      setEmail(e.target.value)
                      if ((email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/))) {
                      }
                      else if (enter === e.target.value) {
                        toast.success('same email')
                      }
                    }
                    } placeholder="Email" required />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/mail.svg" alt="" /></label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="password" className="form-control shadow-none" id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password"
                      placeholder="password"
                      required />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/password.svg" alt="" /></label>
                  </div>
                  <div className="form-group mt-5 mb-4">
                    <input type="submit" className="button_screens" value="Sign In" />
                  </div>
                  <div className="form-group text-center position-relative text-start my-3 pt-2">
                    <span className="fs-16 text-muted fw-600">Social Logins</span>
                  </div>
                  <div className="form-group justify-content-center mx-0 row pt-2">
                    <div className="col-auto">

                      <FacebookLogin
                        appId="251570747088623"
                        fields="name,email,picture"
                        render={renderProps => (
                          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Login with facebook" className="d-flex align-items-center h-50px w-50px rounded-pill shadow border border-2 bg-light p-1" style={{ cursor: "pointer" }} onClick={renderProps.onClick} ><img className="img-fluid" src="assets/img/facebook.png" alt="" /></a>
                        )}
                        callback={responseFacebook} />
                    </div>
                    <div className="col-auto">
                      <GoogleLogin className='google'
                        clientId='848874992812-59qjd71msdg050bq2n67ieno1vktcft4.apps.googleusercontent.com'
                        render={renderProps => (
                          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Login with google" className="d-flex align-items-center h-50px w-50px rounded-pill shadow border border-2 bg-light p-1" style={{ cursor: "pointer" }} onClick={renderProps.onClick} disabled={renderProps.disabled} ><img className="img-fluid" src="assets/img/google.svg" alt="" /></a>
                        )}
                        buttonText=''
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy='single_host_origin' />
                    </div>

                  </div>
                  {/* <GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={responseGoogle}/> */}
                  <div className="form-group pt-5 mt-4">
                    <label className="text-muted mb-3 d-block fs-14" htmlFor="">No Account?</label>
                    <Link to="/SignUp" >
                      <input type="button" className="button_screens" value="Create Account" />
                    </Link>
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

export default SignIn;
