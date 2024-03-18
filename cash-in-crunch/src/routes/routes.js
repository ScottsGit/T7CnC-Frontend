import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import MainDashboard from "../pages/dashboards/MainDashboard";



const dashboardRoutes = [
  //dashboard
  { path: "/dashboard", component: <MainDashboard /> },
];


export { dashboardRoutes };
