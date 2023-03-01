import { createBrowserRouter } from "react-router-dom";
// import { lazy } from "react";
import Auth from "../src/pages/auth/index";
import Home from "../src/pages/home/index";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Auth />
    },
    {
      path: '/home',
      element: <Home />
    }
])

export default router