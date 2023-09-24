import React from "react";
import contentData from "../../content.json";
import { FaComment } from "react-icons/fa";

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
            <h1>{introContent.main_header}</h1>
            <p>
              <strong>{introContent.main_subtitle}</strong>
            </p>
            <div className="introParagraph">{introBio}</div>
            <h3>
              <a href={`mailto:${generalContent.navbar_social_links.email}`}>
                <FaComment /> {introContent.email_button}
              </a>
            </h3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Intro;
