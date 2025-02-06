import { useEffect, useState } from "react";

const useScroll = (ref) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setScrollLeft(ref.current.scrollLeft);
      }
    };
    ref.current?.addEventListener("scroll", handleScroll);
    return () => {
      ref.current?.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
  return { x: scrollLeft };
};

export default useScroll;
