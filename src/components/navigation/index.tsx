import { useEffect } from "react";
import { useIsMobileTerminal } from "../../hooks/useIsMobileTerminal";
import MobileNavigation from "./mobile";
import { getCategory } from "../../api/category";

const Navigation = () => {
  const isMobileTerminal = useIsMobileTerminal();
  useEffect(() => {
    console.log(getCategory());
  }, []);
  return <div>{isMobileTerminal && <MobileNavigation></MobileNavigation>}</div>;
};

export default Navigation;
