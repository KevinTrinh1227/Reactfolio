import React from "react";
import contentData from "../../content.json";
import { FaGithub, FaDownload, FaFilePdf } from "react-icons/fa";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import Fade from "react-reveal/Fade";

const iconComponents = {
  FaGithub: FaGithub,
  FaDownload: FaDownload,
  FiExternalLink: FiExternalLink,
  FiFolder: FiFolder,
  FaFilePdf: FaFilePdf,
};

const SideProjects = () => {
  const projects = contentData.projects;

  return (
    <section id="recentprojects" className="recentprojects-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a" id="projects">
                {contentData.projects.section.title}
                <div className="line-mf"></div>
              </h3>
              <p className="subtitle-a">
                {contentData.projects.section.description}
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <Fade bottom cascade>
            <div className="row">
              {projects.project_items.map((project, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card card-recentprojects">
                    <div className="card-body">
                      <div className="card-category-box"></div>
                      <h1 className="folder-icon">
                        <FiFolder />
                      </h1>
                      <h3 className="card-title">{project.project_name}</h3>
                      <p className="card-description">{project.description}</p>
                      <br />
                      <p className="resources-used">
                        {project.resources_used.join(", ")}
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="post-author">
                        <span className="author">
                          {project.start_date} - {project.end_date}
                        </span>
                      </div>
                      <div className="post-date">
                        {project.links.map((link, index) => {
                          const IconComponent = iconComponents[link.icon];
                          return (
                            <a
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              data-tooltip={link.data_tooltip}
                            >
                              <IconComponent />{" "}
                              {/* Render the selected icon component */}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
