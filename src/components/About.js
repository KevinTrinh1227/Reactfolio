import React from "react";
import contentData from "../content.json";

const About = () => {
  const aboutContent = contentData.about_me;

  return (
    <div className="About">
      <h2>{aboutContent.section.title}</h2>
      <p>{aboutContent.section.description}</p>
      <ul>
        {aboutContent.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <img src={aboutContent.headShotUrl} width="260px" alt="Portrait" />
    </div>
  );
};

export default About;
