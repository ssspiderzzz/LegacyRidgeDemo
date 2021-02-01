import React from "react";

const Gallary = (props) => {
  return (
    <>
      <div className="py-3 w-full h-screen">
        <div className="w-full h-screen bg-gallary-background">
          <div className="w-80% m-auto py-10 text-left text-white text-3xl tracking-widest flex flex-wrap">
            <div className="py-12 mr-12 h-40 font-extrabold flex-1 flex items-center">
              <span>39 SPECTACULAR VIEW LOTS</span>
            </div>
            <div className="py-12 mr-12 h-40 font-light flex-1 flex items-center">
              <span>NOW SELLING!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
