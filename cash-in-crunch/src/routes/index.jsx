import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

// import { AuthProtected } from "./AuthProtected";

import { dashboardRoutes } from "./routes";

import Landing from "../pages/landingPage";
import MultiForm from "../pages/signup";
import Login from "../pages/login";

const Index = () => {

    return (
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/signup" element={<MultiForm />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}

            <Route>
                {dashboardRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            // <AuthProtected>
                                <DashboardLayout>{route.component}</DashboardLayout>
                            // </AuthProtected>
                        }
                        key={idx}
                        exact={true}
                    />
                ))}
            </Route>
        </Routes>
    );
};

export default Index;
