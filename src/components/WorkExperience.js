import React from "react";
import contentData from "../content.json";

const WorkExperience = () => {
  const experience = contentData.experience;

  return (
    <div className="container">
      <div className="reveal">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a" id="experience">
                {experience.section.title} <div className="line-mf"></div>
              </h3>
              <p className="subtitle-a">
              {experience.section.description}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="wrapper">
            <ul className="indicator">
              {experience.experience_items.map((item, index) => (
                <li
                  key={index}
                  className={index === 0 ? "active" : ""}
                  data-target={`#item${index + 1}`}
                >
                  {item.organization}
                </li>
              ))}
            </ul>
            <ul className="content">
              {experience.experience_items.map((item, index) => (
                <li key={index} id={`item${index + 1}`} className={index === 0 ? "active" : ""}>
                  <h1>
                    {item.title} @ {item.organization} - {item.start_date} to {item.end_date}
                  </h1>
                  {item.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;