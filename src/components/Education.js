import React, { useState, useEffect } from "react";
import content from "../content.json";

const Education = () => {
  const [education, setEducation] = useState(content.academics);

  useEffect(() => {
    setEducation(content.academics);
  }, [content]);

  return (
    <section id="education">
      <h2>{education.section.title}</h2>
      <p>{education.section.description}</p>

      <div className="general">
        <h3>General Information</h3>
        <ul>
          <li>School: {education.general.school}</li>
          <li>Degree: {education.general.degree}</li>
          <li>Start Year: {education.general.start_year}</li>
          <li>End Year: {education.general.end_year}</li>
        </ul>
      </div>

      <div className="years">
        <h3>Years</h3>
        {education.years.map((year, index) => (
          <div key={index} className="year">
            <h4>{year.year}</h4>
            <h5>{year.semester}</h5>
            <ul className="courses">
              {year.courses.map((course, index) => (
                <li key={index} className="course">
                  {course.abbreviation} - {course.name} ({course.credits} credits)
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;