import React from "react";
import "./Content.scss";
import ReactPlayer from "react-player";

const Content = (props) => {
  console.log("inside content");
  return (
    <div className="content">
      <div className="welcome">
        <h1>WELCOME TO LEGACY RIDGE!</h1>
        <p>
          Legacy Ridge is a collection of 39 single family building lots with spectacular mountain
          and valley views! Located in prestigious University Highlands, overlooking Quest
          University (one of Canada’s most coveted private universities) and right next door to the
          world-class university mountain bike trails! Lots on sale NOW!…. so you can get started
          building your dream home.
        </p>
      </div>
      <div className="youtubeVideoWrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=tHld5Mdgm90&feature=emb_logo"
          width="100%"
          height="360px"
        />
      </div>
    </div>
  );
};

export default Content;
