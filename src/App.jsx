import React, { useState, useRef, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import { useWindowSize, useMousePosition } from "./utils/hooks";

export default function App() {
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const [userOffset, setUserOffset] = useState(0);
  const { windowWidth, windowHeight } = useWindowSize();
  const { mouseX, mouseY } = useMousePosition();

  useEffect(() => {
    window.onscroll = () => {
      setUserOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className="App">
      <Header
        refs={{ aboutMe, projects, contact }}
        userOffset={userOffset}
        windowHeight={windowHeight}
      />
    </div>
  );
}
