import React, { useState } from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "experience": {

    "section": {
      "enable_section": true,
      "title": "~/Experience",
      "navbar_name": "/Experience",
      "description": "Positions, team projects, or organizations I am/have been a part of."
    },

    * "enable_section": <true or false> to enable/disable section
    * "title": "Is what is displayed on the h3 tag to distinguish the section"
    * "navbar_name": "Is what is displayed on the navbar"
    * "description": "subtitle below the title element to distinguish the section"

    "experience_items": [
      {
        "organization": "McNair STMU",
        "title": "Research Intern",
        "start_date": "May 2023",
        "end_date": " July 2023",
        "description": [
          "Conducted thorough undergraduate research on compiler design and high-level to low-level language translation.",
          "Developed a lightweight translator by building a parser, lexer, and semantic analyzer module to convert custom code into assembly language for a virtual machine.",
          "Collaborated closely with mentors to refine development skills and deepen understanding of language design principles and compiler design methodologies."
        ]
      }
    ]
  },

  * "Experience_item": [{job object 1}, {job object 2}, ...]

  Each object is seperated by commas and has the following fields...

  * "organization": "Company or organization name"
  * "title": "Your job position title"
  * "start_date": "Job start date",
  * "end_date": "Job end date",
  * "description": ["Description 1", "Description 2"]

*/

const WorkExperience = () => {
  const { experience } = contentData;
  const experienceItems = experience.experience_items;

  const [activeJobIndex, setActiveJobIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveJobIndex(index);
  };

  return (
    <Fade triggerOnce={true}>
      <section className="Experience-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a" id="experience">
                  {experience.section.title}
                  <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  <ReactMarkdown>
                    {experience.section.description}
                  </ReactMarkdown>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="wrapper">
              <Fade triggerOnce={true}>
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
              </Fade>
              <div className="content">
                <h1>
                  {experienceItems[activeJobIndex].title} @{" "}
                  {experienceItems[activeJobIndex].organization}
                </h1>
                <h4>
                  {experienceItems[activeJobIndex].start_date} -{" "}
                  {experienceItems[activeJobIndex].end_date}
                </h4>
                <Fade damping={0.1} triggerOnce={true}>
                  <ul>
                    {experienceItems[activeJobIndex].description.map(
                      (paragraph, paraIndex) => (
                        <li className="active" key={paraIndex}>
                          {paragraph}
                        </li>
                      )
                    )}
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default WorkExperience;
