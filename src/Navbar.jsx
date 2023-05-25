import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="socials animate__animated animate__slideInLeft">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>

      <div className="touch animate__animated animate__slideInRight">
        <i className="fa-regular fa-envelope"></i>
        <p>Get in Touch</p>
      </div>
    </div>
  );
};

export default Navbar;
