import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Home() {
  return (
    <div>
      <h1>Welcome to MERN Auth</h1>
      <Link to="/register">Sign Up</Link> | <Link to="/login">Sign In</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* 👈 Add kiya */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
