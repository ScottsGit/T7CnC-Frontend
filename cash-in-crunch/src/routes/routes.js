import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import MainDashboard from "../pages/dashboards/MainDashboard";
import GoalDashboard from "../pages/dashboards/GoalDashboard";


const dashboardRoutes = [
  //dashboard
  { path: "/dashboard", component: <MainDashboard /> },
  { path: "/goal-dashboard", component: <GoalDashboard /> },
];


export { dashboardRoutes };
