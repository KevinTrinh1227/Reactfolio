import React from "react";
import contentData from "../../content.json";
import { FaGithub, FaLinkedin, FaHandshake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

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
      icon: FaHandshake,
      href: general.navbar_social_links.handshake,
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
