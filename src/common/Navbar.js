import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
const [click, setClick] = useState(false);

const handleClick = () =>{
  setClick(!click);
}

const closeMenu=()=>{
  setClick(false);
}
  return (
    <>
    <nav className="navbar">
      <div className="container flex_space">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click?"fas fa-xmark": "fas fa-bars"}></i>
        </div>
        <ul className={click?"nav-menu active":"nav-menu"}>
          <li> <Link to="/Home"onClick={closeMenu}>Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/gallery">Gallery</Link></li>
          <li> <Link to="/destination">Destination</Link></li>
          <li> <Link to="/blog">Blog</Link></li>
          <li> <Link to="/testimonial">Testimonial</Link></li>
          <li> <Link to="/contact">Contact Us</Link> </li>
          
        </ul>

      <div className="login-area flex">
        <li><Link to='/sign-in'> <i className="">Sign in</i></Link></li>
        <li><Link to='/register'> <i className="">Register</i></Link></li>
        <li><Link to='/contact'> <button className="PrimarytBtn">Request A Quote</button></Link></li>
      </div>

      </div>
    </nav>

    <header>
      <div className="container flex_space">
        <div className="logo">
          <img src="./img/logo1.png" alt='err' height={120}/>
        </div>

        <div className="contact flex_space">
          <div className="box flex_space">
            <div className="icons">
              <i className="far fa-clock"></i>
            </div>
            <div className="text">
              <h4>Working Hours</h4>
              <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
            </div>
          </div>
          <div className="box flex_space">
            <div className="icons">
              <i className="fas fa-phone-volume"></i>
            </div>
            <div className="text">
              <h4>Call Us Hours</h4>
              <Link to='/contact'>+011 123  4567</Link>
            </div>
          </div>
          <div className="box flex_space">
            <div className="icons">
              <i className="far fa-envelope"></i>
            </div>
            <div className="text">
              <h4>Mail Us</h4>
              <Link to='/contact'>info@example.com</Link>
            </div>
          </div>
        </div>
      </div>

    </header>
    </>
    
  );
};

export default Navbar;
//fa-solid fa-chevron-right