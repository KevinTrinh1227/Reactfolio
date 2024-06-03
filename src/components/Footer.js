import React, { useState, useEffect } from "react";
import contentData from "../content.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "footer": {
    "line_one": "Built & designed by",
    "copyright_line": "All rights reserved."
  },

  * "line_one": "First line in footer message"
  * "copyright_line": "Second line in footer message"
   
  NOTE: line_one will use the first, middle and last name declared in the general section of json file. If you dont have a middle name you can leave it as a blank ""

*/

async function fetchRepoData(repoApiLink) {
  const response = await fetch(repoApiLink);
  const data = await response.json();
  return data;
}

const Footer = () => {
  const general = contentData.general;
  const repoLink = contentData.repo_stats.repo_link;
  const repoApiLink = contentData.repo_stats.api_link;

  const iconStyle = {
    fontSize: "0.8rem", // Adjust the size as needed
    marginRight: "1.2rem", // Add space between icon and text
  };

  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    fetchRepoData(repoApiLink).then((data) => {
      setRepoData(data);
    });
  }, [repoApiLink]);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                {contentData.footer.line_one}{" "}
                <a href="https://github.com/KevinTrinh1227">
                  <strong>
                    {general.first_name} {general.middle_name}{" "}
                    {general.last_name}
                  </strong>
                </a>
                .
              </p>
              <div className="credits">
                {contentData.footer.copyright_line} &copy;
              </div>
              <div className="fork-stars">
                <a href={repoLink}>
                  <span>
                    {repoData && repoData.forks_count}{" "}
                    <FontAwesomeIcon icon={faCodeFork} style={iconStyle} />
                    {repoData && repoData.stargazers_count}{" "}
                    <FontAwesomeIcon icon={faStar} style={iconStyle} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
