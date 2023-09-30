import React from "react";
import contentData from "../content.json";

const Error404 = () => {
  return (
    <div className="error-section">
      <h1>404 - Page Not Found</h1>
      <p>
        An error has occured, to continue:
        <br />
        <br /> Return to our homepage.
        <br />
        Send us an e-mail about this error and try later.
      </p>
      <a href="/">Home page</a> |
      <a href={contentData.general.navbar_social_links.github}>GitHub Page</a>
    </div>
  );
};

export default Error404;
