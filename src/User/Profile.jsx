import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';


const Profile = () => {

  const getitems = () => {
    let list = localStorage.getItem('option')
    if (list) {
      return JSON.parse(localStorage.getItem('option'))
    } else {
      return [];
    }
  }

  const location = useLocation();
  const myparam = location.state;
  const [tokens, setTokens] = useState();

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [mobile, setMobile] = useState(myparam)
  const [email, setEmail] = useState(getitems())
  const [image, setImage] = useState("assets/img/profile.png")
  const [xabn, setXabn] = useState("")
  const [xqualifications, setXqualifications] = useState("")
  const [xwhitecard, setXwhitecard] = useState("")
  const [xsafetyrating, setXsafetyrating] = useState("")
  const [companyName, setCompanyName] = useState("")




  const verify = async (e) => {
    setImage(e.target.files[0])
    const formData = new FormData();
    formData.append('image', e.target.files[0])
    e.preventDefault()
    let result = await fetch("http://128.199.27.151:4040/api/uploadsImage", {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${tokens}`,
      },
      body: formData,
    })
    result = await result.json();
    console.log("result", result)
  }

  const userUpdate = async (e) => {
    e.preventDefault()
    let items = { firstname, lastname, mobile, email, image, xabn, xqualifications, xwhitecard, xsafetyrating, companyName }
    let result = await fetch("http://128.199.27.151:4040/api/updateProfile", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${tokens}`
      },
      body: JSON.stringify(items),
    })
    result = await result.json();
    console.log("result", result)
  }

  const getProfile = async (e) => {
    let list = localStorage.getItem('token')
    let update = JSON.parse(list)
    let result = await fetch("http://128.199.27.151:4040/api/getProfile", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${update}`
      },
      body: JSON.stringify(),
    })
    result = await result.json();
    setFirstname(result.data.firstname)
    setLastname(result.data.lastname)
    setMobile(result.data.mobile)
    setEmail(result.data.email)
    setImage(result.data.image)
    setXqualifications(result.data.xqualifications)
    setXwhitecard(result.data.xwhitecard)
    setXsafetyrating(result.data.xsafetyrating)
    setCompanyName(result.data.companyName)
    setXabn(result.data.xabn)

    console.log("result", result)
  }
  useEffect(() => {
    let list = localStorage.getItem('token')
    setTokens(JSON.parse(list))
  }, [])

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <>
      <main className="main-scrollbar">
        <div className="screens_header position-fixed bg-theme1 h-70px zi-9 d-flex align-items-center w-100">
          <div className="container">
            <div className="row align-items-center position-relative position-relative zi-2">
              <div className="col-auto position-absolute start-0">
                <a href="/"><img className="w-32px" src="assets/img/back-btn.svg" alt="" /></a>
              </div>
              <div className="col text-center">
                <h2 className="text-white fw-600 fs-18 mb-0">Profile</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="screens_scroll_part pt-5">
          <div className="container pt-4">
            <div className="row py-5">
              <div className="col-12 text-center">
                <form className="" >
                  <div className="form-group mb-5">
                    <div className="avatar_outter">
                      <div className="avatar-wrapper rounded-pill position-relative px-0">
                        <img src={image} className="w-100 profile-pic h-100 rounded-pill bg-white" alt="" />
                        <div className="upload-button">
                          <label>
                            <img src="assets/img/camera.svg" className="" alt="" />
                          </label>
                        </div>
                        <input className="file-upload" type="file" onChange={(e) => verify(e)} accept="image/*" />
                      </div>
                    </div>
                    <h2 className="fs-18 text-theme2 fw-bold">Please tell us more about you</h2>
                    <span className="fs-14 text-muted">To serve you better</span>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/user11.svg" alt="" /></label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="text" className="form-control shadow-none" id="lname" name="lname" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/user11.svg" alt="" /></label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="number" className="form-control shadow-none" id="number" name="number" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/mobile.svg" alt="" /></label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="email" className="form-control shadow-none" id="number" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="input_icon" htmlFor=""><img className="img-fluid" src="assets/img/mail.svg" alt="" /></label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                    <label className="input_icon" htmlFor="">X</label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="ABN" value={xabn} onChange={(e) => setXabn(e.target.value)} />
                    <label className="input_icon" htmlFor="">X</label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="text" className="form-control shadow-none" id="fname" name="fname"
                      placeholder="Qualifications" value={xqualifications} onChange={(e) => setXqualifications(e.target.value)} />
                    <label className="input_icon" htmlFor="">X</label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="White card" value={xwhitecard} onChange={(e) => setXwhitecard(e.target.value)} />
                    <label className="input_icon" htmlFor="">X</label>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="Safety rating" value={xsafetyrating} onChange={(e) => setXsafetyrating(e.target.value)} />
                    <label className="input_icon" htmlFor="">X</label>
                  </div>
                  <div className="form-group mt-5 mb-5">
                    <div className="row mx-0 align-items-center justify-content-between">
                      <div className="col-auto text-center">
                        <button type="button"
                          className="shadow h-40px w-100px d-flex align-items-center justify-content-center text-center fs-15 fw-bold text-theme1 rounded-pill bg-white border-0">Skip</button>
                      </div>
                      <div className="col-5">
                        <input type="button" className="button_screens" onClick={userUpdate} value="Save" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
      <ToastContainer />
    </>
  )
}

export default Profile
