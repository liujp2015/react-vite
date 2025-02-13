import { useEffect, useState } from "react";
import { PC_DEVICE_WIDTH } from "../constants";

export const useIsMobileTerminal = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // 初始化为 null

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const mobileRegex =
      /Android|WebOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    console.log("userAgent", userAgent);
    console.log("mobileRegex.test", mobileRegex.test(userAgent));
    const checkMobile = () => {
      const windowWidth = window.innerWidth; // 获取当前窗口宽度
      const isMobileDevice =
        mobileRegex.test(userAgent) || windowWidth < PC_DEVICE_WIDTH;

      console.log("Window width:", windowWidth); // 打印窗口宽度
      console.log("Is mobile device:", isMobileDevice); // 打印是否是移动设备

      setIsMobile(isMobileDevice); // 更新状态
    };

    checkMobile(); // 初次渲染时运行一次检查

    window.addEventListener("resize", checkMobile); // 监听窗口大小变化

    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // 确保只在组件首次渲染时执行一次

  return isMobile;
};
