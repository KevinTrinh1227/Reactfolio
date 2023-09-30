import React from "react";
import contentData from "../content.json";
import { FaComment } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "intro_screen": {
    "section": {
      "enable_section": true
    },

    
    * "enable_section": <true or false> to enable/disable section


    "main_header": "Hello, Kevin here.",
    "main_subtitle": "I like to build stuff occasionally.",
    "intro_bio": [
      "I'm currently a Sophomore attending St. Mary's University,",
      "Majoring in Computer Science with minor in Mathematics.",
      "I have a profound interest in machine learning, operating",
      "systems, full-stack development, and everything in between."
    ],
    "email_button": "Say hello to me!"
  },

  * "main_header": "Main welcome title"
  * "main_subtitle": "Subtitle welcome message"
  * "intro_bio": ["Sentence 1", "Sentence 2", "Sentence 3", ...]
  * "email_button": "Words inside button"

*/

const Intro = () => {
  const introContent = contentData.intro_screen;
  const generalContent = contentData.general;

  const introBio = introContent.intro_bio.map((paragraph) => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  return (
    <div class="container">
      <div class="row">
        <div className="col-sm-12">
          <section class="intro_section">
            <Fade direction="down" triggerOnce={true}>
              <h1>{introContent.main_header}</h1>
              <p>
                <strong>{introContent.main_subtitle}</strong>
              </p>
            </Fade>
            <Fade triggerOnce={true}>
              <div className="introParagraph">{introBio}</div>
            </Fade>
            <Fade direction="up" triggerOnce={true}>
              <h3>
                <a href={`mailto:${generalContent.navbar_social_links.email}`}>
                  <FaComment /> {introContent.email_button}
                </a>
              </h3>
            </Fade>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Intro;
