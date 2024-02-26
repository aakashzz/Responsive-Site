import React from "react"
import {Outlet} from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

function Layout() {

  return (
    <div className="h-screen w-full bg-white">
      <Navbar />
        <Outlet />
      <Footer />
      
    </div>
  )
}

export default Layout;
