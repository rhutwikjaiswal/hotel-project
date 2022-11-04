import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="icon">
          <i className="fa-solid fa-xmark">Hi there</i>
        </div>
        <div>
          <Link to="/Home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/destination">Destination</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/testimonial">Testimonial</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
