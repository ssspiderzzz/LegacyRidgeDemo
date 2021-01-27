import { useState, useEffect, useLayoutEffect } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({windowWidth: 0, windowHeight:0})
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return windowSize
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ mouseX: null, mouseY: null });

  const updateMousePosition = event => {
    setMousePosition({ mouseX: event.clientX, mouseY: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

