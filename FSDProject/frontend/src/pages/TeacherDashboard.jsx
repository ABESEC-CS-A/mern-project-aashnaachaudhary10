import "./TeacherDashboard.css";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function TeacherDashboard() {
  const [showNotifs, setShowNotifs] = useState(false);

  return (
    <div className="teacher-dashboard">

      {/* Sidebar */}
      <aside className="teacher-sidebar">
        <h2 className="teacher-logo">📘 Teacher Panel</h2>

        <ul>
          <li>
            <Link to="/teacher/take-attendance">📝 Take Attendance</Link>
            </li>

          <li>
            <Link to="/teacher/attendance-records">📄 Attendance Records</Link>
          </li>

          <li>
            <Link to="/teacher/student-list">👥 Student List</Link>
          </li>

          <li>
            <Link to="/teacher/subjects">📚 Subjects</Link>
          </li>

          <li>
            <Link to="/teacher/requests">📨 Requests</Link>
          </li>

          <li>
            <Link to="/teacher/settings">⚙ Settings</Link>
          </li>
        </ul>

      </aside>

      {/* Content */}
      <main className="teacher-content">

        {/* TOP BAR */}
        <header className="teacher-topbar">
          <h1>Welcome, Teacher 👋</h1>

          <div className="teacher-notif-wrapper">
            <button
              className="teacher-notif"
              onClick={() => setShowNotifs(!showNotifs)}
            >
              🔔
            </button>

            {showNotifs && (
              <div className="teacher-notif-dropdown">
                <p><b>New:</b> 1 student submitted an exemption request</p>
                <p><b>Reminder:</b> Attendance pending for today's classes</p>
              </div>
            )}
          </div>
        </header>

        {/* CARDS */}
        <section className="teacher-cards">
          <div className="teacher-card blue">
            <h3>Total Students</h3>
            <p className="value">120</p>
          </div>

          <div className="teacher-card green">
            <h3>Classes Today</h3>
            <p className="value">4</p>
          </div>

          <div className="teacher-card orange">
            <h3>Pending Requests</h3>
            <p className="value">3</p>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="teacher-quick-actions">
          <h2>Quick Actions</h2>

          <div className="qa-grid">
            <button className="qa-btn">📝 Take Attendance</button>
            <button className="qa-btn">📄 View Records</button>
            <button className="qa-btn">👥 Manage Students</button>
            <button className="qa-btn">📚 Manage Subjects</button>
          </div>
        </section>

      </main>
    </div>
  );
}
