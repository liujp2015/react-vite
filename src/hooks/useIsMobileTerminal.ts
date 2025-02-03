import { useEffect, useState } from "react";
import { PC_DEVICE_WIDTH } from "../constants";

export const useIsMobileTerminal = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileRegex =
      /Android|WebOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const checkMobile = () => {
      return setIsMobile(
        mobileRegex.test(userAgent) || window.innerWidth < PC_DEVICE_WIDTH
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return isMobile;
};
