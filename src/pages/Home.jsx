import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import VideoBanner from "../components/VideoBanner";
import Content from "../components/Content";
import Info from "../components/Info";
import Gallary from "../components/Gallary";

const Home = () => {
  const [userOffset, setUserOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setUserOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className="home">
      <Nav userOffset={userOffset} />
      <VideoBanner />
      <Content />
      <Info />
      <Gallary />
    </div>
  );
};

export default Home;
