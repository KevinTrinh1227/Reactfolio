import React from "react";
import aboutMeJson from "../content.json";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "about_me": {
    "section": {
      "enable_section": true,
      "title": "~/About",
      "navbar_name": "/About",
      "description": "Brief information about me and some of my interests."
    },


    * "enable_section": <true or false> to enable/disable section
    * "title": "Is what is displayed on the h3 tag to distinguish the section"
    * "navbar_name": "Is what is displayed on the navbar"
    * "description": "subtitle below the title element to distinguish the section"


    "headShotUrl": "../assets/portrait.png",
    "bio": [
      "I am currently studying computer science at St. Mary's University with a focus in computer science with a minor in mathematics. Recently, I was an undergrad research intern at the McNair Research Program of STMU, a Post-Baccalaureate Achievement Program. Some of my current goals are to build experience and to acquire meaningful connections for personal development.",
      "I have a profound interest in numerous types of software development such as machine learning, operating systems, and especially in full-stack development. I'm a huge desk setup and PC enthusiast. In my free time, I enjoy playing/analyzing chess games, online window shopping, thrifting, and playing Minecraft multiplayer servers."
    ],
    "skills_caption": "Some technologies I've worked with:",
    "skills": [
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "HTML & CSS",
      "Python 3",
      "Ubuntu LTS & Git"
    ]
  },

    * "headShotUrl": "link to your portrait/headshot"
    * "bio": ["bio paragraph 1", "bio paragraph 2"]
    * "skills_caption": "Skills caption"
    * "skills": ["Language 1", "Language 2", "Language 3", ...]

*/

const AboutMe = () => {
  const aboutMe = aboutMeJson.about_me;

  const firstHalf = aboutMe.skills.slice(0, aboutMe.skills.length / 2);
  const secondHalf = aboutMe.skills.slice(aboutMe.skills.length / 2);

  return (
    <Fade triggerOnce={true}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h3 className="title-a" id="aboutme">
                  {aboutMe.section.title} <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  <ReactMarkdown>{aboutMe.section.description}</ReactMarkdown>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  {aboutMe.bio.map((paragraph, index) => (
                    <Fade
                      delay={index * 100}
                      cascade={false}
                      triggerOnce={true}
                    >
                      <p class="about-me-desc" key={index}>
                        {paragraph}
                      </p>
                    </Fade>
                  ))}
                  <p className="about-me-desc">{aboutMe.skills_caption}</p>
                  <div className="languages-list">
                    <ul>
                      {firstHalf.map((skill, index) => (
                        <Fade
                          delay={index * 200}
                          cascade={false}
                          triggerOnce={true}
                        >
                          <li key={index}>{skill}</li>
                        </Fade>
                      ))}
                    </ul>
                    <ul>
                      {secondHalf.map((skill, index) => (
                        <Fade
                          delay={index * 200}
                          cascade={false}
                          triggerOnce={true}
                        >
                          <li key={index}>{skill}</li>
                        </Fade>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <Fade direction="up" triggerOnce={true}>
                    <a
                      href={aboutMe.headShotUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="col-6-img-a"
                    >
                      <img
                        src={aboutMe.headShotUrl}
                        alt=""
                        className="myportrait"
                      ></img>
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AboutMe;
