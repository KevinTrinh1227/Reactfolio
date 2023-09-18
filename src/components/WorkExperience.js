import React from "react";
import contentData from "../content.json";

const WorkExperience = () => {
  const experience = contentData.experience;

  return (
    <div className="WorkExperience">
      <h2>Work Experience</h2>
      <ul>
        {experience.map((item) => (
          <li key={item.company}>
            <h3>{item.company}</h3>
            <h4>{item.title}</h4>
            <p>{item.start_date} - {item.end_date}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;