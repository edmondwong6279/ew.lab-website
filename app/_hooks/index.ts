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
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export const usePositionInViewport = (elementId: string, parentId: string) => {
  const [positionInViewPort, setPositionInViewPort] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      const pos =
        document.getElementById(elementId)?.getBoundingClientRect().top ?? 0;

      setPositionInViewPort(pos);
    };

    document
      .getElementById(parentId)
      ?.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [elementId, parentId]);

  return positionInViewPort;
};
