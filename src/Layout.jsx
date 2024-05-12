import React from 'react'
import Header from './Components/LandingPage/Header/index'
import Footer from './Components/LandingPage/Footer/Footer'
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
     <div style={{backgroundColor:"#112121"}}>
      <div style={{ position: "sticky", top: 0, zIndex: 10 }} >
        <Header />
      </div>
      <div className="px-md-5 px-sm-2" style={{ backgroundColor: "#112121" }}>
        <div
          className="container-fluid p-3"
          style={{ backgroundColor: "#112121" }}
        > </div>
       
         
       
     
        
        </div>
       
        <Outlet/>
       
        
      <div className="" style={{backgroundColor:"#031211"}}>
        
      <Footer/>
      </div>
      </div>
    </>
  )
}

export default Layout