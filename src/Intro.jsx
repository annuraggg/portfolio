import React, { useEffect, useRef } from "react";
import Avatar from "./img/avatar.png";
import "animate.css";
import Typed from "typed.js";

const Intro = () => {
  const el = useRef(null);

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
      <section className="intro section" id="intro">
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
          <a href="#about" rel="noreferrer">ABOUT</a>
          <a href="#experience" rel="noreferrer">EXPERIENCE</a>
          <a href="#skills" rel="noreferrer">SKILLS</a>
          <a href="#project" rel="noreferrer">PROJECTS</a>
          <a href="#contact" rel="noreferrer">CONTACT</a>
        </div>
        <div className="circle">
          <div className="circle2"></div>
        </div>
        <a href="#about"  rel="noreferrer">
          <div
            className="scrolldown animate__animated animate__fadeIn delay-2_5"
          >
            <div className="chevrons">
              <div className="chevrondown"></div>
              <div className="chevrondown"></div>
            </div>
          </div>
        </a>
      </section>
    </>
  );
};

export default Intro;
