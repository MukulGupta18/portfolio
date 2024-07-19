import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Experience from "./component/Experience";
import Skills from "./component/Skills"
import Project from "./component/Project"
import Contact from "./component/Contact";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])


  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
