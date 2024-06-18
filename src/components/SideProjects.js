import React, { useState, useEffect } from "react";
import contentData from "../content.json";
import { FaGithub, FaDownload, FaFilePdf } from "react-icons/fa";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "projects": {
    "section": {
      "enable_section": true,         
      "title": "~/Projects",         
      "navbar_name": "/Projects",     
      "description": "Some of my most recent or past favorite creations or work."
    },

    * "enable_section": <true or false> to enable/disable section
    * "title": "Is what is displayed on the h3 tag to distinguish the section"
    * "navbar_name": "Is what is displayed on the navbar"
    * "description": "subtitle below the title element to distinguish the section"


    "project_items": [
      {
        "use_git_api": false,
        "api_github_repo_link": "https://api.github.com/repos/KevinTrinh1227/Hycord-Bot",
        "project_name": "Hycord Bot",
        "description": "Discord.py program that uses Hypixel & PlayerDB APIs to allow users to link and access in-game data. A versatile Hypixel Discord bot.",
        "resources_used": ["Python", "Discord.py", "Hypixel API"],
        "start_date": "Dec 2022",
        "end_date": "Present",
        "links": [
          {
            "href": "https://www.hycord.net",
            "icon": "FiExternalLink",
            "data_tooltip": "Information Page"
          },
          {
            "href": "https://github.com/KevinTrinh1227/Hycord-Bot",
            "icon": "FaGithub",
            "data_tooltip": "Visit GitHub Repo"
          },
          {
            "href": "https://github.com/KevinTrinh1227/Hycord-Bot/archive/main.zip",
            "icon": "FaDownload",
            "data_tooltip": "Download Project"
          }
        ]
      }
    ]

    * "use_git_api": <true or false> 
    * If true, the app will get your project repo name/title, description, and resources/languages used from the git API, if false then it will use data content inside json.
    * "api_github_repo_link": "API link of the repo (api.github.com/repos/...)"
    
    * "project_name": "Name of your project" 
    * NOTE: It will display this if use_git_api is false
    * other wise it will match whatever is on github.
    
    * "description": "Your project description." 
    * NOTE: It will display this if use_git_api is false 
    * other wise it will match whatever is on github.

    * "resources_used": ["Lang 1", "Lang 2", ...]
    * IMPORTANT: If an item is on both the resources_used list and the github languages list, then
    * the item will not be displayed. 
    * Example: Your repo project says that you used: ["JavaScript", "HTML", "CSS"]
    * Your JSON has the list: ["React.js", "NVM", "JavaScript", "HTML"]
    * The output will be: ["React.js", "NVM", "CSS"]
    * If you want it to only display whats on Github then set your JSON resources_used to empty []

    * links: [{link1}, {link2}, {link3}, ...]
    * Inside the list is a list of objects that represent a anchor tag for each external link you want your project to display.

    * "href": "link to your external link"
    * "icon": "name of your react icon"
    * "data_tooltip": "message that displays when a user hovers over item"
     
    [!] NOTE: make sure the icon your using is 1. Imported, AND 2. Inside the const iconComponents object variable below!

  } */

// icons used will be listed below
// make sure the react icon is imported
const iconComponents = {
  FaGithub: FaGithub,
  FaDownload: FaDownload,
  FiExternalLink: FiExternalLink,
  FiFolder: FiFolder,
  FaFilePdf: FaFilePdf,
};

const SideProjects = () => {
  const [projectData, setProjectData] = useState({});
  const [projectLanguages, setProjectLanguages] = useState({});

  useEffect(() => {
    contentData.projects.project_items.forEach((project, index) => {
      if (project.use_git_api) {
        const apiUrl = project.api_github_repo_link;

        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setProjectData((prevData) => ({
              ...prevData,
              [index]: data, // Store the data with an index as the key
            }));

            // Fetch languages data
            const languagesUrl = data.languages_url;
            fetch(languagesUrl)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((languagesData) => {
                setProjectLanguages((prevLanguages) => ({
                  ...prevLanguages,
                  [index]: Object.keys(languagesData), // Store language names as an array
                }));
              })
              .catch((error) => {
                console.error("Error fetching languages data:", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    });
  }, []);

  return (
    <section id="recentprojects" className="recentprojects-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Fade triggerOnce={true}>
              <div className="title-box text-center">
                <h3 className="title-a" id="projects">
                  {contentData.projects.section.title}
                  <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">
                  <ReactMarkdown>
                    {contentData.projects.section.description}
                  </ReactMarkdown>
                </p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="row">
            {contentData.projects.project_items.map((project, index) => (
              <div className="col-md-4" key={index}>
                <Fade
                  delay={index * 200}
                  direction="up"
                  cascade={false}
                  triggerOnce={true}
                >
                  <div className="card card-recentprojects">
                    <div className="card-body">
                      <div className="card-category-box"></div>
                      <div>
                        <h1 className="folder-icon">
                          <FiFolder />
                        </h1>
                      </div>
                      <h3 className="card-title">
                        {project.use_git_api
                          ? projectData[index]?.name || project.project_name
                          : project.project_name}
                      </h3>
                      <p className="card-description">
                        {project.use_git_api
                          ? projectData[index]?.description ||
                            project.description
                          : project.description}
                      </p>
                      <br />
                      <p className="resources-used">
                        {project.use_git_api
                          ? [
                              ...(projectLanguages[index] || []),
                              ...project.resources_used,
                            ]
                              .filter(
                                (item) =>
                                  !(
                                    projectLanguages[index]?.includes(item) &&
                                    project.resources_used.includes(item)
                                  )
                              )
                              .join(", ")
                          : project.resources_used.join(", ")}
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
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
