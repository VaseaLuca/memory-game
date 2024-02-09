// import HomePage from "pages/home/Home";
import { lazy } from "react";
// import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("pages/home/Home"));

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
];
