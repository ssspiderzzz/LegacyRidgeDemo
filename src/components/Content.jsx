import React from "react";
import ReactPlayer from "react-player";

const Content = (props) => {
  return (
    <div className="w-80% m-auto text-center py-5 mb-10">
      <div className="w-60% m-auto">
        <h1 className="font-sans font-black uppercase tracking-wider text-grey-title">
          WELCOME TO LEGACY RIDGE!
        </h1>
        <p className="text-grey-p">
          Legacy Ridge is a collection of 39 single family building lots with spectacular mountain
          and valley views! Located in prestigious University Highlands, overlooking Quest
          University (one of Canada’s most coveted private universities) and right next door to the
          world-class university mountain bike trails! Lots on sale NOW!…. so you can get started
          building your dream home.
        </p>
      </div>
      <div className="py-5 w-auto h-auto">
        <div className="relative pt-fluid-video">
          <ReactPlayer
            className="absolute top-0 left-0"
            url="https://www.youtube.com/watch?v=tHld5Mdgm90&feature=emb_logo"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
