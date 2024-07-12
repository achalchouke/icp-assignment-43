
import "./Navbar.css";
import { siteDetails , featurs , theme } from "./../../data"

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
        <Link to="/" className="nav-menu" style={{background:theme.Dark}} style={{color:theme.White}}>Home</Link>
        <Link to="/about" className="nav-menu" style={{background:theme.Dark}} style={{color:theme.White}}>About</Link>
        <Link to="/contact" className="nav-menu" style={{background:theme.Dark}} style={{color:theme.White}}>Contact</Link>
    </div>
  )
}

export default Navbar 