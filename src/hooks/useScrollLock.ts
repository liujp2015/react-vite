import { useEffect } from "react";

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // 恢复滚动
    }
  }, [isLocked]);
  return null;
};

export default useScrollLock;
