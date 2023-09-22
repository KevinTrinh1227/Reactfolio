import React from 'react';
import contentData from "../../content.json";
import { FaGithub, FaLinkedin, FaHandshake } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Linkbar = () => {
    const general = contentData.general;
  
    return (
      <div className="linkbar">
        <ul>
          <li>
            <nav>
              <a href={`mailto:${general.navbar_social_links.email}`} target="_blank" rel="noreferrer">
                <MdEmail />
              </a>
              <a href={general.navbar_social_links.handshake} target="_blank" rel="noreferrer">
                <FaHandshake />
              </a>
              <a href={general.navbar_social_links.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href={general.navbar_social_links.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </nav>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Linkbar;