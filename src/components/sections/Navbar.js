import React from "react";
import contentData from "../../content.json";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  return (
    <div className="navlist">
      <Fade bottom cascade>
        <ul>
          <li>
            <a href="https://www.kevintrinh.dev">/Home</a>
          </li>
          <li>
            <a href="#aboutme">{contentData.about_me.section.navbar_name}</a>
          </li>
          <li>
            <a href="#education">{contentData.academics.section.navbar_name}</a>
          </li>
          <li>
            <a href="#experience">
              {contentData.experience.section.navbar_name}
            </a>
          </li>
          <li>
            <a href="#projects">{contentData.projects.section.navbar_name}</a>
          </li>
        </ul>
      </Fade>
    </div>
  );
};

export default Navbar;
