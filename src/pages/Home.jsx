import React, { useState, useEffect } from "react";
import { useWindowSize } from "../utils/hooks";
import Header from "../components/Header";
import VideoBanner from "../components/VideoBanner";
import Content from "../components/Content";

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
      <Header userOffset={userOffset} windowHeight={windowHeight} windowWidth={windowWidth} />
      <VideoBanner />
      <Content />
    </div>
  );
};

export default Home;
