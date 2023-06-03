import React from "react";
import "animate.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="socials animate__animated animate__slideInLeft">
        <a href="https://github.com/annuraggg" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/annuraggg/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a
          href="https://twitter.com/annuragggg"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>

        <a
          href="https://www.instagram.com/annuraggg/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>

      <div className="touch animate__animated animate__slideInRight">
        <a href="mailto:contact@anuragsawant.tech" rel="noreferrer">
          <i className="fa-regular fa-envelope"></i>
          <p>Get in Touch</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
