import React from "react";
import "./DashboardLayout.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-wrapper">

      {/* TOP NAVBAR */}
      <header className="top-nav">
        <h2 className="logo">Attendance Portal</h2>
        <div className="top-right">
          <p className="username">Welcome User</p>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      {/* SIDE MENU */}
      <aside className="side-menu">
        <a href="#" className="menu-item active">Dashboard</a>
        <a href="#" className="menu-item">My Attendance</a>
        <a href="#" className="menu-item">Correction Requests</a>
        <a href="#" className="menu-item">Notifications</a>
        <a href="#" className="menu-item">Settings</a>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;
