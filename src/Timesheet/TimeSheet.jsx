import React from 'react';
import Footer from '../Footer';


const TimeSheet = () => {
    return (
        <>
        <main className="main-scrollbar">
      
          <div className="screens_header position-fixed bg-theme1 h-70px zi-9 d-flex align-items-center w-100">
            <div className="container">
              <div className="row align-items-center position-relative position-relative zi-2">
                <div className="col-auto position-absolute start-0">
                  <a href="/"><img className="w-32px" src="assets/img/back-btn.svg" alt=""/></a>
                </div>
                <div className="col text-center">
                  <h2 className="text-white fw-600 fs-18 mb-0">Timesheet</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="screens_scroll_part py-5">
            <div className="container pt-4">
              <div className="row py-4">
                <div className="col-12">
                  <div className="row daily_summry">
                    <div className="col-12 mb-4">
                      <form className="row align-items-center">
                        <div className="col">
                          <div className="form-group">
                            <input type="text" autoComplete="off" className="form-control shadow-none border-2 border h-60px px-3"
                              id="filter-date" placeholder="2021/06/19 15:13"/>
                          </div>
                        </div>
                        <div className="col-auto px-0 text-center">
                          <div className="form-group">
                            <label className="fw-600 fs-18" htmlFor="">To</label>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <input type="text" autoComplete="off" className="form-control shadow-none border-2 border h-60px px-3"
                              id="filter-date" placeholder="2021/06/19 15:13"/>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-12 mb-4 mt-2">
                      <div className="bg-light rounded-4 border border-1 text-center">
                        <a href="/" className="row mx-0">
                          <div className="col-12 py-3 border-bottom">
                            <div className="row align-items-center">
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">19 <br/> Thu</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">Total :</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">0 : 25</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500"><i className="imgs img-chevron-right"></i></span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="/" className="row mx-0">
                          <div className="col-12 py-3 border-bottom">
                            <div className="row align-items-center">
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">18 <br/> Wed</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">Total :</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">4 : 00</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500"><i className="imgs img-chevron-right"></i></span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="/" className="row mx-0">
                          <div className="col-12 py-3 border-bottom">
                            <div className="row align-items-center">
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">17 <br/> Tue</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">Total :</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">8 : 00</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500"><i className="imgs img-chevron-right"></i></span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="/" className="row mx-0">
                          <div className="col-12 py-3 border-bottom">
                            <div className="row align-items-center">
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">16 <br/> Mon</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">Total :</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500">8 : 00</span>
                              </div>
                              <div className="col px-1">
                                <span className="text-theme2 fs-16 fw-500"><i className="imgs img-chevron-right"></i></span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
      
        </main>
        </>
    )
}

export default TimeSheet
