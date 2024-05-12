import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./Components/LandingPage/Header/index.jsx";
import { Outlet } from "react-router-dom";



import Footer from "./Components/LandingPage/Footer/Footer.jsx";



function App() {
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 10 }} >
        <Header />
      </div>
      <div className="px-md-5 px-sm-2" style={{ backgroundColor: "#112121" ,}}>
        <div
          className="container-fluid p-3"
          style={{ backgroundColor: "#112121" }}
        ></div>
         
       
     
        
        </div>
      <div className="" style={{backgroundColor:"#031211"}}>
        
      <Footer/>
      </div>
      
    </>
  );
}

export default App;
