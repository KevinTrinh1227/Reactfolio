import React from "react";
import contentData from "../content.json";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "general": {
    "first_name": "Kevin",
    "middle_name": "Huy",
    "last_name": "Trinh",
    "navbar_social_links": {
      "github": "https://github.com/KevinTrinh1227",
      "handshake": "https://app.joinhandshake.com/stu/users/32148581",
      "linkedin": "https://www.linkedin.com/in/kevintrinh1227",
      "email": "kevintrinh1227@gmail.com"
    }

    * Enter your name and links to your social accounts.
    * Note you can remove them from the social links below if
    * you wish to.

*/

const Linkbar = () => {
  const general = contentData.general;

  const socialLinks = [
    {
      icon: MdEmail,
      href: general.navbar_social_links.email,
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: FaLinkedin,
      href: general.navbar_social_links.linkedin,
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: FaFileAlt,
      href: general.navbar_social_links.resume, // will open to "/resume"
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: FaGithub,
      href: general.navbar_social_links.github,
      target: "_blank",
      rel: "noreferrer",
    },
  ];

  return (
    <div className="linkbar">
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <Fade delay={index * 200} triggerOnce={true}>
              <a
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="social-icon"
              >
                <link.icon />
              </a>
            </Fade>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Linkbar;
