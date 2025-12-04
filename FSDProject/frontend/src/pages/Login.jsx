import React, { useState } from "react";
import "./Login.css";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student"); 
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload =
      role === "student"
        ? { admissionNumber, password, role }
        : { email, password, role };

    try {
      const res = await api.post("/auth/login", payload);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (role === "student") navigate("/student-dashboard");
      else navigate("/teacher-dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">AttendEase</h2>
        <p className="login-subtitle">Please sign in to continue</p>

        <form className="login-form" onSubmit={handleLogin}>
          {role === "student" ? (
            <input
              type="text"
              placeholder="Admission Number"
              value={admissionNumber}
              onChange={(e) => setAdmissionNumber(e.target.value)}
              className="login-input"
              required
            />
          ) : (
            <input
              type="email"
              placeholder="Teacher Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              required
            />
          )}

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="login-input"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-footer">© 2025 College Attendance System</p>
      </div>
    </div>
  );
};

export default Login;
