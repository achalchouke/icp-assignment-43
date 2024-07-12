
import "./Footer.css"
import React from 'react'

function footer() {
  return (
    <div>
        <footer className="footer">
<div className="container">
    <div className="row">
        <div className="footer-col">
            <h4>About The Shop</h4>
            <ul>
                <li><a>We provide almost all variety of cakes</a></li>  
            </ul>
        </div>

        

        <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                
            </ul>
        </div>

        <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">

            </div>
            <div className="footer-contact">
              <i className="fa-solid fa-phone mt-5"></i><a className="footer-links"> Perseoni,Nagpur-440016</a><br/><br/>
              <i className="fa-solid fa-phone mt-5"></i><a className="footer-links"> +91-9822582525</a><br/><br/>
              <i className="fa-regular fa-envelope mt-5"></i><a className="footer-links">achalchouke4@gmail.com</a>
          </div>
        </div>
    </div>
</div>
</footer>
    </div>
  )
}

export default footer