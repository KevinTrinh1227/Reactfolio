import React from "react";

const ResumePage = () => {
  // Function to resize the iframe based on its content
  const resizeIframe = () => {
    const iframe = document.getElementById("resumeFrame");
    iframe.style.height = `${iframe.contentWindow.document.documentElement.scrollHeight}px`;
  };

  // Add event listener to resize iframe when content changes
  React.useEffect(() => {
    resizeIframe();
    window.addEventListener("resize", resizeIframe); // Optional: Add listener for window resize
    return () => window.removeEventListener("resize", resizeIframe); // Optional: Remove listener on component unmount
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      {/* Set the parent div height to fit the viewport */}
      <iframe
        id="resumeFrame"
        title="Resume PDF"
        src="../assets/Resume.pdf"
        width="100%"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "auto",
        }} // Set iframe height to 100% of parent height
      />
    </div>
  );
};

export default ResumePage;
