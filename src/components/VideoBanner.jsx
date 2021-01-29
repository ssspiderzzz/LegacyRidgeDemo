import React from "react";

const VideoBanner = (props) => {
  const videoUrl = "https://legacyridge.ca/wp-content/uploads/Legacy-ridge.mp4";
  return (
    <div className="h-screen w-screen">
      <video autoPlay muted loop className="top-0 left-0 object-cover h-full w-full">
        <source src={videoUrl} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default VideoBanner;
