import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../../../assets/30dc logo.webp";

import "../btn.css";
function Footer() {
 

  return (
    <>
      <div className="container text-white helvetica fontsmall d-flex justify-content-center align-items-center pb-2 mt-5">
        <footer class="py-3 mt-4">
          <div class="nav justify-content-center  align-items-center pb-3 mb-3"  >

            {/* <img
              src={logo}
              className="img-fluid my-2"
              alt=""
              onClick={logoClick}
              style={{ maxWidth: "50px", marginRight: "10px",cursor: "pointer" }}
            /> */}
            <h2 className="fs-3 fw-normal mt-1">Devlpr Management App</h2>
          </div>
          <p className=" text-center text-white mb-2">
            Transforming the way individuals manage thier daily schedule !
          </p>
          <p class="text-center text-white my-2">© 2024 Devlpr Management App Inc.</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
