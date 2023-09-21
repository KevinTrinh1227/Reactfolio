import React from "react";
import contentData from "../content.json";

const Intro = () => {

  const introContent = contentData.intro_screen;
  const generalContent = contentData.general;

  const introBio = introContent.intro_bio.map((paragraph) => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  return (
    <div class="container" key="intro-container">
      <div class="row">
        <div class="col-md-6">
          <section class="intro_section">
            <h1>{introContent.main_header}</h1>
            <p><strong>{introContent.main_subtitle}</strong></p>

            <div class="introParagraph">
              {introBio}
            </div>

            <h3>
              <a href={`mailto:${generalContent.navbar_social_links.email}`}>
                <i class="fa-solid fa-envelope"></i>
                {introContent.email_button}
              </a>
            </h3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Intro;