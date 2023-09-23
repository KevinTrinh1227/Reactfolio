import React from "react";
import RepoStats from "./components/sections/RepoStats"
import Navbar from "./components/sections/Navbar"
import Linkbar from "./components/sections/Linkbar"
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
        <RepoStats />
        <Linkbar />
        <Navbar />
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
