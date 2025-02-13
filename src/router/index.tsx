import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mobile from "../pages/mobile/index";
import PC from "../pages/pc/index";
import { useIsMobileTerminal } from "../hooks/useIsMobileTerminal";

// 定义PC和移动设备的路由
const pc_router = [
  {
    path: "/",
    element: <PC />,
  },
];
const mobile_router = [
  {
    path: "/",
    element: <Mobile />,
  },
];

const Router = () => {
  const isMobile = useIsMobileTerminal();
  console.log("Router" + isMobile);
  // 判断状态是否已加载，如果是 null（表示未初始化），可以先返回一个 loading 组件
  if (isMobile === null) {
    return <div>Loading...</div>; // 或者可以返回一个简单的等待页面
  }

  // 根据设备类型动态选择路由配置
  const router = createBrowserRouter(isMobile ? mobile_router : pc_router);
  console.log(isMobile ? "切换手机路由" : "切换电脑路由");
  console.log(router.routes);
  return <RouterProvider key={isMobile ? "mobile" : "pc"} router={router} />;
};

export default Router;
