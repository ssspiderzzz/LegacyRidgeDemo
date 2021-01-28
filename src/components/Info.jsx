import React from "react";
import "./Info.scss";
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
      <div className="info">
        <span>Legacy Ridge - Price List</span>
      </div>
      <div className="legacyNewListWrapper">
        <img
          src="http://legacy.robertbfreeman.com/wp-content/uploads/2018/08/legacy-ridge-new.jpg"
          alt="newList"
        />
        <div className="polygon"></div>
      </div>

      <div className="lifestyle">
        <div className="lifestyleText">
          <h1>THE LEGACY LIFESTYLE</h1>
          <p>
            Come live the LEGACY LIFESTYLE. Perched above the valley floor with views for days, step
            out your front door and head into the mountains for recreational bliss!
          </p>
        </div>
        <div className="lifestylePicWrapper">
          <div className="lifestylePicWrapperInner">
            <img
              src="https://legacyridge.ca/wp-content/uploads/2018/08/hiking.jpg"
              alt="lifestylePic"
            />
          </div>
        </div>
        <div className="lifestyleInfoLinks">
          {lifestyles.map((lifestyle) => {
            return (
              <div className="lifestyleInfoLinksWrapper">
                <img src={lifestyle.img} alt={lifestyle.name} />
                <h2>{lifestyle.name}</h2>
              </div>
            );
          })}
        </div>

        <hr />

        <div className="speculator">
          <h2>39 SPECTACULAR LOTS</h2>
          <p>
            Masterfully engineered to capture the natural landscape, these lots possess views of Sky
            Pilot, The Chief, and the Tantalus Mountain Range.
          </p>
          <br />
          <ul>
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
