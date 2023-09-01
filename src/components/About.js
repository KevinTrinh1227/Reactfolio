import React from "react";
import contentData from "../content.json";

const About = () => {
  const aboutContent = contentData.about_me;

  return (
    <div className="About">
      <h2>{aboutContent.title}</h2>
      <p>{aboutContent.bio}</p>
      <ul>
        {aboutContent.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <img src={aboutContent.headShotUrl} alt="Portrait" />
    </div>
  );
};

export default About;
