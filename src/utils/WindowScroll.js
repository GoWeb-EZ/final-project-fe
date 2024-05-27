import { useEffect } from "react";

// Add/Remove Window Scroll listener
export const useWindowScrollListener = (listener) => {
  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
};

// Check element is in viewport
export const checkIsInViewport = (el) => {
  if (!el || !window) return false;

  const { top, bottom } = el.getBoundingClientRect();
  return bottom > 0 && top <= window.innerHeight;
};
