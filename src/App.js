import React from "react";
import "./App.css";
import "./normalize.css";
import Intro from "./Intro";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
