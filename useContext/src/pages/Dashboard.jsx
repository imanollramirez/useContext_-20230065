import React from "react";
import "./Dashboard.css";
import { useAuth} from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => 
{
    const navigate = useNavigate();
    const { user, logOut } = useAuth();

    const handeLogOut = () => {
        if (logOut())
        {
            navigate("/")
        }
    };

    const Information = () => {
            navigate("/information")
    };

    return (
        <>
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1 className="dashboard-title">¡Welcome to Dashboard!</h1>
                <p className="dashboard-user">
                    Hi, <span>{user}</span>
                </p>
                <button className="dashboard-button" onClick={handeLogOut}>
                    Log Out
                </button>
                <button className="dashboard-button" onClick={Information}>
                    Information
                </button>
            </div>
        </div>
        </>
    )
}

export default Dashboard;