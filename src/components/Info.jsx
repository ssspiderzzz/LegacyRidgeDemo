import React from "react";
import Camping from "../assets/Camping@2x.png";
import Biking from "../assets/Biking@2x.png";
import Skiing from "../assets/Skiing@2x.png";
import Hiking from "../assets/Hiking@2x.png";

const Info = (props) => {
  const lifestyles = [
    { name: "Camping", img: Camping },
    { name: "Biking", img: Biking },
    { name: "Skiing", img: Skiing },
    { name: "Hiking", img: Hiking },
  ];
  return (
    <>
      <div className="flex justify-center	py-10 cursor-pointer">
        <span className="text-2xl text-blue-400 px-2 py-2 border-blue-400 border-2 rounded hover:bg-gray-200 hover:border-gray-200 transition-all duration-500">
          Legacy Ridge - Price List
        </span>
      </div>
      <div>
        <img
          className="-mb-0.5 w-full"
          src="http://legacy.robertbfreeman.com/wp-content/uploads/2018/08/legacy-ridge-new.jpg"
          alt="newList"
        />
        <div className="new-list-polygon"></div>
      </div>

      <div className="-mt-12 text-center py-5 relative w-80% m-auto">
        <div className="w-60% m-auto py-5">
          <h1 className="font-sans font-black uppercase tracking-wider text-grey-title">
            THE LEGACY LIFESTYLE
          </h1>
          <p className="text-grey-p">
            Come live the LEGACY LIFESTYLE. Perched above the valley floor with views for days, step
            out your front door and head into the mountains for recreational bliss!
          </p>
        </div>
        <div className="flex justify-center py-5">
          <div className="shadow-lg">
            <img
              className="block object-contain"
              src="https://legacyridge.ca/wp-content/uploads/2018/08/hiking.jpg"
              alt="lifestylePic"
            />
          </div>
        </div>
        <div className="py-20 flex flex-wrap justify-evenly">
          {lifestyles.map((lifestyle) => {
            return (
              <div className="flex flex-col items-center flex-shrink-0 w-48 md:w-28 md:flex-shrink">
                <img className="h-28 w-28" src={lifestyle.img} alt={lifestyle.name} />
                <h2 className="uppercase text-grey-title">{lifestyle.name}</h2>
              </div>
            );
          })}
        </div>

        <hr />

        <div className="w-60% m-auto py-5 text-left">
          <h2 className="text-grey-title">39 SPECTACULAR LOTS</h2>
          <p className="text-grey-p">
            Masterfully engineered to capture the natural landscape, these lots possess views of Sky
            Pilot, The Chief, and the Tantalus Mountain Range.
          </p>
          <br />
          <ul className="text-grey-p list-disc">
            <li>
              Register today and secure your interest on the priority list (contact listing realtors
              for the process).
            </li>
            <li>Sept 29/18 = priority list lot picks reviewed.</li>
            <li>Jan/19 = estimated completion for lots.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Info;
