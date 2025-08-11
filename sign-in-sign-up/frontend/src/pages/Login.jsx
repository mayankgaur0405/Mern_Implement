import React, { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 👈 custom CSS import

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      alert("✅ Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-card">
        <h2>🔑 Sign In</h2>
        <p className="subtitle">Welcome back! Please log into your account.</p>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="📧 Email Address"
          required
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="🔒 Password"
          required
        />
        <button type="submit">Login</button>
        <p className="footer-text">
          Don’t have an account? <a href="/register">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
