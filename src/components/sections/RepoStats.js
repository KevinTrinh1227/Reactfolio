import React, { useState, useEffect } from "react";
import contentData from "../../content.json";
import Fade from "react-reveal/Fade";

const RepoStats = () => {
  const [repoData, setRepoData] = useState({});
  const [hidden, setHidden] = useState(false);
  const [totalCommits, setTotalCommits] = useState(0);

  useEffect(() => {
    // JSON API LINK MUST BE AN API LINK
    // AND NOT A REGULAR REPOSITORY GIT LINK
    // MAKE SURE REPO IS NOT PRIVATE
    const apiUrl = contentData.repo_stats.api_link;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRepoData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Fetch commit statistics
    fetch(apiUrl + "/stats/participation")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Calculate the total number of commits
        const commitCounts = data.all;
        const total = commitCounts.reduce((acc, count) => acc + count, 0);
        setTotalCommits(total);
      })
      .catch((error) => {
        console.error("Error fetching commit statistics:", error);
      });

    // Event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  function commitUrl(input, attachment) {
    return `${input}${attachment}`;
  }

  const commit_link = commitUrl(
    contentData.repo_stats.repo_link,
    "/commits/master"
  );
  const last_commit_link = commitUrl(
    contentData.repo_stats.repo_link,
    "/commit"
  );

  return (
    <div className={`repo-stats ${hidden ? "hidden" : ""}`}>
      <Fade top>
        <p>
          <a
            href={contentData.repo_stats.repo_link}
            target="_blank"
            rel="noreferrer"
          >
            Repository Name: {repoData.name}
          </a>{" "}
          •{" "}
          <a
            href={contentData.general.navbar_social_links.github}
            target="_blank"
            rel="noreferrer"
          >
            Author: {repoData.owner?.login}
          </a>{" "}
          •{" "}
          <a href={commit_link} target="_blank" rel="noreferrer">
            Total Commits: {totalCommits}
          </a>{" "}
          •{" "}
          <a href={last_commit_link} target="_blank" rel="noreferrer">
            Last Push: {new Date(repoData.pushed_at).toLocaleString()} CST
          </a>
        </p>
      </Fade>
    </div>
  );
};

export default RepoStats;
