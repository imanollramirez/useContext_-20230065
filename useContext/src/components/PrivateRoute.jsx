import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const PrivateRoute = () => {
    const { isLoggedIn } = useAuth();
    //If the user is not authenticated, redirect to the index page.
    return isLoggedIn ? <Outlet/> : <Navigate to="/"/>;
};

export default PrivateRoute;