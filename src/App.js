import "./App.css";
import "./normalize.css"
import Intro from "./Intro"
import Navbar from "./Navbar";
import About from "./About";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
    </>
  );
}

export default App;
