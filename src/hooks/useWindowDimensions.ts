import { useEffect, useState } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== undefined) {
      handleResize();
      console.log("window", window);
      window.addEventListener("DOMContentLoaded", handleResize);
      return () => window.removeEventListener("DOMContentLoaded", handleResize);
    }
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
