import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const usePositionInViewport = (elementId: string, parentId: string) => {
  const [positionInViewPort, setPositionInViewPort] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      const position =
        document.getElementById(elementId)?.getBoundingClientRect().top ?? 0;

      setPositionInViewPort(position);
    };

    document
      .getElementById(parentId)
      ?.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, [elementId, parentId]);

  return positionInViewPort;
};
