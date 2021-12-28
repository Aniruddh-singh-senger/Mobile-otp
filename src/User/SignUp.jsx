import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


const SignUp = () => {

  const history = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)
  }

  const Register = async (e) => {
    e.preventDefault()
    if (!email) {
      toast.warning("Please fill the empty email")
    }
    else if (!password) {
      toast.warning("Please fill the empty password")

    } else if (email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/) && password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/)) {
      let items = { email, password }
      console.log(items)
      let result = await fetch("http://128.199.27.151:4040/api/insertUser", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(items),
      })
      result = await result.json();
      localStorage.setItem('token', JSON.stringify(result.data.token))
      console.log(result.responseCode);
      if (result.responseCode === 400) {
        toast.error(result.message, { position: "top-center" })
      } else {
        toast.success(result.message, { position: "top-center" })
        history('/Verify')
      } console.log("result", result)
    }
    else {
      toast.warning("enter the valid email and password ")
    }
  }

  useEffect(() => {
    localStorage.setItem('option', JSON.stringify(email))
  }, [email])

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
                <form className="mt-4" onSubmit={Register} >
                  <div className="form-group position-relative mb-4">
                    <input type="email" className="form-control shadow-none" autoFocus id="mail" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/mail.svg" alt="" /></label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="password" className="form-control shadow-none" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password"
                      placeholder="password" />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/password.svg" alt="" /></label>
                  </div>
                  <div className="form-group mt-5 mb-4">
                    <input type="submit" className="button_screens" value="Sign Up" />
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

export default SignUp
