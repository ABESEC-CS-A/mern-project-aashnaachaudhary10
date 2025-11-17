import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  return (
    <DashboardLayout>

      <div className="teacher-dashboard">

        {/* Header */}
        <h2 className="dashboard-heading">Teacher Dashboard</h2>

        {/* Top Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>5</h3>
            <p>Classes Today</p>
          </div>

          <div className="stat-card">
            <h3>180</h3>
            <p>Total Students</p>
          </div>

          <div className="stat-card">
            <h3>3</h3>
            <p>Attendance Marked</p>
          </div>

          <div className="stat-card">
            <h3>2</h3>
            <p>Pending Correction Requests</p>
          </div>
        </div>

        {/* Classes List */}
        <div className="section">
          <h3 className="section-title">Today's Classes</h3>

          <div className="class-list">
            <div className="class-card">
              <h4>OOP (CSE-A)</h4>
              <p>10:00 AM – 11:00 AM</p>
              <button className="btn-primary">Mark Attendance</button>
            </div>

            <div className="class-card">
              <h4>DBMS (CSE-B)</h4>
              <p>12:00 PM – 1:00 PM</p>
              <button className="btn-primary">Mark Attendance</button>
            </div>

            <div className="class-card">
              <h4>DSA Lab (CSE-A)</h4>
              <p>2:00 PM – 4:00 PM</p>
              <button className="btn-primary">Mark Attendance</button>
            </div>
          </div>
        </div>

        {/* Correction Requests */}
        <div className="section">
          <h3 className="section-title">Pending Correction Requests</h3>

          <div className="correction-box">
            <p><strong>Aashna Chaudhary</strong> → Marked absent by mistake on 14 Nov</p>
            <button className="btn-secondary">Review</button>
          </div>

          <div className="correction-box">
            <p><strong>Riya Sharma</strong> → Medical Leave (submit exemption)</p>
            <button className="btn-secondary">Review</button>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
};

export default TeacherDashboard;
