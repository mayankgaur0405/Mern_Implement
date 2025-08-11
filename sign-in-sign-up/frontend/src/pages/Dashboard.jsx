import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const userName = localStorage.getItem("userName") || "User"; // Agar tum signup pe save karo to naam show hoga

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>🎉 Welcome, {userName}!</h1>
        <p>You have successfully logged in to your account.</p>

        <div className="dashboard-actions">
          <button onClick={() => alert("Feature coming soon!")}>
            📂 View Profile
          </button>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
