import React, { useState, useEffect } from "react";
import { useWindowSize } from "../utils/hooks";
import Header from "../components/Header";
import VideoBanner from "../components/VideoBanner";
import Content from "../components/Content";
import Info from "../components/Info";

const Home = () => {
  const [userOffset, setUserOffset] = useState(0);
  const { windowWidth, windowHeight } = useWindowSize();

  useEffect(() => {
    window.onscroll = () => {
      setUserOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className="home">
      <Header userOffset={userOffset} />
      <VideoBanner windowHeight={windowHeight} windowWidth={windowWidth} />
      <Content />
      <Info />
    </div>
  );
};

export default Home;
