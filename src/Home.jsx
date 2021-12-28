import React from 'react';
import Footer from './Footer';


const Home = () => {
    return (
        <>

            <main className="main-scrollbar">

                <div className="screens_header position-fixed bg-theme1 h-70px zi-9 d-flex align-items-center w-100">
                    <div className="container">
                        <div className="row align-items-center position-relative position-relative zi-2">
                            <div className="col text-center">
                                <h2 className="text-white fw-600 fs-18 mb-0">Home Page</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="screens_scroll_part py-5">
                    <div className="container pt-4">
                        <div className="row py-4">
                            <div className="col-12 text-center">
                                <form className="" action="">
                                    <div className="form-group position-relative text-start mb-4">
                                        <label className="fw-600 fs-16 d-flex mb-2" htmlFor="message">Whats new</label>
                                        <textarea className="form-control shadow-none" name="message" id="message"></textarea>
                                    </div>
                                    <div className="form-group position-relative text-start mb-4">
                                        <label className="fw-600 fs-16 d-flex mb-2" htmlFor="message">Updates</label>
                                        <textarea className="form-control shadow-none" name="message" id="message"></textarea>
                                    </div>
                                    <div className="form-group position-relative text-start mb-4">
                                        <label className="fw-600 fs-16 d-flex mb-2" htmlFor="message">Information</label>
                                        <textarea className="form-control shadow-none" name="message" id="message"></textarea>
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

export default Home;
