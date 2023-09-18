import React from "react";
import contentData from "../content.json";

const SideProjects = () => {
  const projects = contentData.projects;

  return (
    <div className="SideProjects">
      <h2>{projects.section.title}</h2>
      <p>{projects.section.description}</p>

      <ul>
        {projects.project_items.map((project) => (
          <li key={project.project_name}>
            <h3>{project.project_name}</h3>
            <p>{project.description}</p>
            <p>Tools used: {project.tools_used.join(", ")}</p>
            <a href={project.github_link} target="_blank">GitHub link</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideProjects;