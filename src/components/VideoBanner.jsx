import React from "react";
import "./VideoBanner.scss";

const videoUrl = "https://legacyridge.ca/wp-content/uploads/Legacy-ridge.mp4";

const VideoBanner = (props) => {
  return (
    <div className="videoBanner">
      <video autoPlay muted loop>
        <source src={videoUrl} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default VideoBanner;
