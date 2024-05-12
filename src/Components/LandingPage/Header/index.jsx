import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

import logo from "../../../assets/30dc logo.webp";
import "../btn.css";
import { Link } from "react-router-dom";

function index() {
  // const handleResumeReview = () => {
  //   window.location.href = "https://rzp.io/l/9gc7NYgR";
  // };

  // const handleCommunity = () => {
  //   window.location.href = "https://ig.me/j/AbYRR67Il3_LM01S/";
  // };

  // const logoClick=()=>{
  //   window.location.href="https://www.30dayscoding.com/"
  // }

  return (
    <>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#112121" }}>
        <div className="container-sm d-flex justify-content-between align-items-center py-3 text-white helvetica ">
         
            <Navbar.Brand
              className="fs-2 fw-semibold text-white d-flex align-items-center"
              // onClick={logoClick}
              // style={{ fontFamily: "Helvetica", cursor: "pointer" }}
            >
              {/* <img
                src={logo}
                className="img-fluid"
                alt=""
                style={{ maxWidth: "50px", marginRight: "10px" }}
              /> */}
              Devlpr Management App
            </Navbar.Brand>
          
          {/* <Navbar.Toggle
            aria-controls="navbarColor02 "
            style={{ backgroundColor: "#112121", border: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#097c6e"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </Navbar.Toggle> */}
          <Navbar.Collapse id="navbarColor02">
            <Nav className="me-auto">
              <Nav.Link href="#" active style={{ color: "white" }}></Nav.Link>
            </Nav>
            <Form className="d-flex justify-content-end">
              {/* <button
                type="button"
                className="btn  fw-medium ms-2 text-white Special"
                onClick={handleResumeReview}
              >
                Resume Review
              </button> */}

              {/* <button
                type="button"
                className="btn   fw-medium ms-2 text-white Special"
                onClick={handleCommunity}
              >
                Join Community
              </button> */}
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default index;
