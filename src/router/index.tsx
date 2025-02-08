import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Index from "../layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

export default router;
