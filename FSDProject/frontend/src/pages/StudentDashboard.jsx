import "./StudentDashboard.css";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function StudentDashboard() {
  const [showNotifs, setShowNotifs] = useState(false);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">📘 Attendance</h2>
        <ul>
          

          <li>
        <Link to="/student/my-attendance">📄 My Attendance</Link>
        </li>

        <li>
        <Link to="/student/audit-history">📊 Audit History</Link>
        </li>

        <li>
        <Link to="/student/exempt-requests">📝 Exempt Requests</Link>
        </li>

        <li>
        <Link to="/student/settings">⚙ Settings</Link>
        </li>
        </ul>
      </aside>



      {/* Main Content */}
      <main className="content">
        <header className="topbar">
          <h1>Welcome, Aashnaa 👋</h1>

          <div className="notif-wrapper">
            <button
              className="notif"
              onClick={() => setShowNotifs(!showNotifs)}
            >
              🔔
            </button>

            {showNotifs && (
              <div className="notif-dropdown">
                <p><b>New:</b> Attendance updated for DBMS</p>
                <p><b>New:</b> Your exempt request is approved ✔</p>
              </div>
            )}
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="cards">
          <div className="card blue">
            <h3>Overall Attendance</h3>
            <p className="value">72%</p>
          </div>

          <div className="card green">
            <h3>Today's Status</h3>
            <p className="value">Absent</p>
          </div>

          <div className="card orange">
            <h3>Classes this Week</h3>
            <p className="value">18</p>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="progress-box">
          <h2>Your Attendance Progress</h2>

          <div className="progress-bar">
            <div className="fill" style={{ width: "72%" }}></div>
          </div>

          <p className="info">You need 6 more classes to reach 75%</p>

          <button className="predict-btn">📈 Predict Attendance</button>
        </section>

        {/* Attendance Table */}
        <section className="table-section">
          <h2>Subject-wise Attendance</h2>

          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Held</th>
                <th>Attended</th>
                <th>%</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>DSA</td>
                <td>30</td>
                <td>22</td>
                <td>73%</td>
              </tr>

              <tr>
                <td>DBMS</td>
                <td>28</td>
                <td>20</td>
                <td>71%</td>
              </tr>

              <tr>
                <td>Maths</td>
                <td>25</td>
                <td>17</td>
                <td>68%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
