import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [admission, setAdmission] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">AttendEase</h2>
        <p className="login-subtitle">Please sign in to continue</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Admission Number"
            value={admission}
            onChange={(e) => setAdmission(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
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
