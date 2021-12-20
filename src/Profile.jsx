import React from 'react';
import Footer from './Footer';


const Profile = () => {
    return (
        <>
         
  <main className="main-scrollbar">

<div className="screens_header position-fixed bg-theme1 h-70px zi-9 d-flex align-items-center w-100">
  <div className="container">
    <div className="row align-items-center position-relative position-relative zi-2">
      <div className="col-auto position-absolute start-0">
        <a href="javascript:;"><img className="w-32px" src="assets/img/back-btn.svg" alt=""/></a>
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
        <form className="" action="">
          <div className="form-group mb-5">
            <div className="avatar_outter">
              <div className="avatar-wrapper rounded-pill position-relative px-0">
                <img src="assets/img/profile.png" className="w-100 profile-pic h-100 rounded-pill bg-white" alt=""/>
                <div className="upload-button">
                  <label>
                    <img src="assets/img/camera.svg" className="" alt=""/>
                  </label>
                </div>
                <input className="file-upload" type="file" accept="image/*"/>
              </div>
            </div>
            <h2 className="fs-18 text-theme2 fw-bold">Please tell us more about you</h2>
            <span className="fs-14 text-muted">To serve you better</span>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="First Name"/>
            <label className="input_icon" for=""><img className="img-fluid" src="assets/img/user11.svg" alt=""/></label>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="text" className="form-control shadow-none" id="lname" name="lname" placeholder="Last Name"/>
            <label className="input_icon" for=""><img className="img-fluid" src="assets/img/user11.svg" alt=""/></label>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="number" className="form-control shadow-none" id="number" name="number" placeholder="Mobile"/>
            <label className="input_icon" for=""><img className="img-fluid" src="assets/img/mobile.svg" alt=""/></label>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="Company Name"/>
            <label className="input_icon" for="">X</label>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="ABN"/>
            <label className="input_icon" for="">X</label>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="text" className="form-control shadow-none" id="fname" name="fname"
              placeholder="Qualifications"/>
            <label className="input_icon" for="">X</label>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="White card"/>
            <label className="input_icon" for="">X</label>
          </div>
          <div className="form-group position-relative mb-4">
            <input type="text" className="form-control shadow-none" id="fname" name="fname" placeholder="Safety rating"/>
            <label className="input_icon" for="">X</label>
          </div>
          <div className="form-group mt-5 mb-5">
            <div className="row mx-0 align-items-center justify-content-between">
              <div className="col-auto text-center">
                <button type="button"
                  className="shadow h-40px w-100px d-flex align-items-center justify-content-center text-center fs-15 fw-bold text-theme1 rounded-pill bg-white border-0">Skip</button>
              </div>
              <div className="col-5">
                <input type="button" className="button_screens" value="Save"/>
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
        </>
    )
}

export default Profile
