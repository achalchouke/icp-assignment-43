
import "./About.css"
import Navbar from "../../componants/Naavbar/Navbar"
import Footer from "../../componants/Footer/Footer"
import Aboutimg from "./50th-birthday.png"
import React from 'react'

function About() {
  return (
    <>
    <Navbar/>
    
    <img src = { Aboutimg} className="img" />
    <Footer/>
    </>
  )
}

export default About