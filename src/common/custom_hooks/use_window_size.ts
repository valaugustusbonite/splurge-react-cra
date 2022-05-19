import { useState, useEffect } from "react";

interface WindowSize {
  width?: number,
  height?: number
}

export const useWindowSize = () => {

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0.0,
    height: 0.0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize.height === undefined || windowSize.width === undefined) return;

  return windowSize;
}