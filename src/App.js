import React from "react";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import WorkExperience from "./components/sections/WorkExperience";
import SideProjects from "./components/sections/SideProjects";
import Footer from "./components/sections/Footer"
import "./styles/style.css";
// import GlobalStyle from "./styles/style";

function App() {
  return (
      <div className="App">
        <Intro />
        <About />
        <Education />
        <WorkExperience />
        <SideProjects />
        <Footer />
      </div>
  );
}

export default App;
