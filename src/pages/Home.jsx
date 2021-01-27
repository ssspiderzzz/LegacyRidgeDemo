import React, { useState, useEffect } from "react";
import { useWindowSize } from "../utils/hooks";
import Header from "../components/Header";
import VideoBanner from "../components/VideoBanner";

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
      <Header userOffset={userOffset} windowHeight={windowHeight} />
      <VideoBanner />
    </div>
  );
};

export default Home;
