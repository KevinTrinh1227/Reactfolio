import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import SideProjects from "./components/SideProjects";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Education />
      <WorkExperience />
      <SideProjects />
    </div>
  );
}

export default App;
