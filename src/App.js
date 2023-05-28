import "./App.css";
import "./normalize.css";
import Intro from "./Intro";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
    </>
  );
}

export default App;
