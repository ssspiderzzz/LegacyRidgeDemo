import React from "react";
import "./VideoBanner.scss";

const VideoBanner = (props) => {
  const videoUrl = "https://legacyridge.ca/wp-content/uploads/Legacy-ridge.mp4";
  return (
    <div className="videoBanner" style={{ height: props.windowHeight, width: props.windowWidth }}>
      <video autoPlay muted loop>
        <source src={videoUrl} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default VideoBanner;
