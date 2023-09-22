import React from "react";
import aboutMeJson from "../content.json";

const AboutMe = () => {
  const aboutMe = aboutMeJson.about_me;

  return (
    <section>
      <div className="container">
        <div className="reveal">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h3 className="title-a" id="aboutme">
                  {aboutMe.section.title} <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  {aboutMe.section.description}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    {aboutMe.bio.map((paragraph, index) => (
                      <p class="about-me-desc" key={index}>{paragraph}</p>
                    ))}
                    <p className="about-me-desc">
                      {aboutMe.skills_caption}
                    </p>
                    <div className="languages-list">
                      <ul>
                        {aboutMe.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <a href={aboutMe.headShotUrl} target="_blank" rel="noreferrer" className="col-6-img-a">
                      <img
                        src={aboutMe.headShotUrl}
                        alt=""
                        className="myportrait"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;