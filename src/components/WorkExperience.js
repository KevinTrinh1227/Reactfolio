import React from "react";
import contentData from "../content.json";

const WorkExperience = () => {
  const { experience } = contentData;

  const experienceItems = experience.experience_items;

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
              {experienceItems.map((item, index) => (
                <li
                  key={index}
                  className=""
                  data-target={`#item${index + 1}`}
                >
                  {item.organization}
                </li>
              ))}
            </ul>
            <ul className="content">
              <li key={0} id={`item1`} className="active">
                <h1>
                  {experienceItems[0].title} @ {experienceItems[0].organization} - {experienceItems[0].start_date} to {experienceItems[0].end_date}
                </h1>
                {experienceItems[0].description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </li>
              {experienceItems.slice(1).map((item, index) => (
                <li key={index + 1} id={`item${index + 2}`}>
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