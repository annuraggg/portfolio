import React, { useEffect, useRef } from "react";
import Avatar from "./img/avatar.png";
import "animate.css";
import Typed from "typed.js";

const Intro = () => {
  const el = useRef(null);
  const scrollToSection = () => {
    window.location.href = "#about";
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello, My Name is Anurag",
        "I'm a Software Engineer",
        "I'm a Web Developer",
        "I'm a Full Stack Developer",
      ],
      backSpeed: 40,
      backDelay: 2000,
      typeSpeed: 40,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="intro" id="intro">
        <img
          src={Avatar}
          alt=""
          className="animate__animated animate__jackInTheBox delay-1_8"
        />
        <p className="profession">SOFTWARE ENGINEER</p>
        <div className="typer">
          <span ref={el}></span>
        </div>
        <div className="links">
          <a href="#about">ABOUT</a>
          <a href="">EXPERIENCE</a>
          <a href="">SKILLS</a>
          <a href="">PROJECTS</a>
        </div>
        <div className="circle">
          <div className="circle2"></div>
        </div>
        <div
          className="scrolldown animate__animated animate__fadeIn delay-2_5"
          onClick={scrollToSection}
        >
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
