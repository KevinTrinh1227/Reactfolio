import React, { useState, useEffect } from 'react';

const RepoStats = () => {
  const [repoData, setRepoData] = useState({});
  const [hidden, setHidden] = useState(false);
  const [totalCommits, setTotalCommits] = useState(0);

  useEffect(() => {
    // Replace with your GitHub repository URL
    const apiUrl = 'https://api.github.com/repos/KevinTrinh1227/Reactfolio';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRepoData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Fetch commit statistics
    fetch(apiUrl + '/stats/participation')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
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
        console.error('Error fetching commit statistics:', error);
      });

    // Event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  return (
    <div className={`repo-stats ${hidden ? 'hidden' : ''}`}>
      <a href='https://github.com/KevinTrinh1227/Reactfolio' target="_blank" rel="noreferrer">
        <p>
          Repository Name: {repoData.name} • Author: {repoData.owner?.login} • Total Commits: {totalCommits+1} • Lastest Push: {new Date(repoData.pushed_at).toLocaleString()} CST
        </p>
      </a>
    </div>
  );
};

export default RepoStats;
