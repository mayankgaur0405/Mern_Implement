import React, { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // 👈 custom CSS import

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(form);
      alert(res.data.message || "✅ Sign Up Successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Sign Up failed");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-card">
        <h2>📝 Create Account</h2>
        <p className="subtitle">Join us! It's quick and easy.</p>

        <input
          name="name"
          onChange={handleChange}
          placeholder="👤 Full Name"
          required
        />
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
        <button type="submit">Sign Up</button>

        <p className="footer-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
