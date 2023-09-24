import React, { useState } from "react";
import contentData from "../../content.json";

const WorkExperience = () => {
  const { experience } = contentData;
  const experienceItems = experience.experience_items;

  const [activeJobIndex, setActiveJobIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveJobIndex(index);
  };

  return (
    <section className="Experience-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a" id="experience">
                {experience.section.title}
                <div className="line-mf"></div>
              </h3>
              <p className="subtitle-a">{experience.section.description}</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="wrapper">
            <ul className="indicator">
              {experienceItems.map((job, index) => (
                <li
                  key={index}
                  className={index === activeJobIndex ? "active" : ""}
                  onClick={() => handleTabClick(index)}
                  data-target={job.organization.split(" ").join("-")}
                >
                  {job.organization}
                </li>
              ))}
            </ul>
            <div className="content">
              <h1>
                {experienceItems[activeJobIndex].title} @{" "}
                {experienceItems[activeJobIndex].organization}
              </h1>
              <h4>
                {experienceItems[activeJobIndex].start_date} -{" "}
                {experienceItems[activeJobIndex].end_date}
              </h4>
              <ul>
                {experienceItems[activeJobIndex].description.map(
                  (paragraph, paraIndex) => (
                    <li className="active" key={paraIndex}>
                      {paragraph}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
