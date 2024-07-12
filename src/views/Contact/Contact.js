
import "./Contact.css"
import Navbar from "../../componants/Naavbar/Navbar"
import Footer from "../../componants/Footer/Footer"
import Contactimg from "./Contact.png"
import React from 'react'

function Contact() {
  return (
    <>
    <Navbar/>
   
    <img src = {Contactimg} className="img" />
    <Footer/>
    </>
  )
}

export default Contact