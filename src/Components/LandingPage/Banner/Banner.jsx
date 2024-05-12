import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "../../../assets/resume - Copy.webp";

import "../btn.css";

function Banner() {
  const handleResumeReview = () => {
    window.location.href = "https://rzp.io/l/9gc7NYgR";
  };

  const handleCreateResume = () => {
    window.location.href = "https://resume-builder-xi-two.vercel.app/";
  };

  return (
    <>
     <div className="container-fluid justify-content-center helvetica py-2 py-sm-1 py-md-0 py-lg-0 py-xl-0 py-0" style={{backgroundColor:"#112121"}}>
        <div
          className="row pt-5 px-0 align-items-center justify-content-center "
          style={{ zIndex: 1, marginTop: "-5rem"}}
        >
          <div className="col-md-4 mx-auto ms-md-5">
          <img
              className="img-fluid"
              src={Resume}
              
              alt=""
              loading="lazy" 
            />

          </div>
          <div className="col-md-6 d-flex mx-auto text-center text-white align-items-center justify-content-center my-2">
            <div className="">
              <h1 className="fw-bolder fs-1 helvetica">
                Supercharge your career and save time with our resume builder
              </h1>
              <p className="mt-4 helvetica">
                The online resume builder getting folks hired by BBC, Google,
                Apple, Tesla, and Airbnb.
              </p>
              <div className="col-12 d-flex flex-column flex-lg-row align-items-center justify-content-center mt-4 mx-auto">
                <button
                  type="button"
                  className="col-md-6 btn  fw-medium ms-2 text-white fs-4 mb-2 mb-md-0 Hover helvetica"
                  style={{ minWidth: "13rem" }}
                  onClick={handleResumeReview}
                >
                  Resume Review
                </button>

                <button
                  type="button"
                  className="col-md-6 btn  fw-medium ms-2 text-white fs-4 Special helvetica"
                  style={{ minWidth: "13rem" }}
                  onClick={handleCreateResume}
                >
                  Create Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
