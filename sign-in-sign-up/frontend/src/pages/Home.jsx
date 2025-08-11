import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // 👈 Custom CSS

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>
          Welcome to <span className="highlight">MERN Auth</span>
        </h1>
        <p>Sign up to create an account or log in to access your dashboard.</p>

        <div className="button-group">
          <Link to="/register" className="btn btn-signup">
            🚀 Sign Up
          </Link>
          <Link to="/login" className="btn btn-login">
            🔑 Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
