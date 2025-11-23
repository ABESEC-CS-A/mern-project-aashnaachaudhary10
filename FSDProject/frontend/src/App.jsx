import React from "react";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import MyAttendance from "./pages/MyAttendance";
import AuditHistory from "./pages/AuditHistory";
import ExemptRequests from "./pages/ExemptRequests";
import StudentSettings from "./pages/StudentSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student/my-attendance" element={<MyAttendance />} />
        <Route path="/student/audit-history" element={<AuditHistory />} />
        <Route path="/student/exempt-requests" element={<ExemptRequests />} />
        <Route path="/student/settings" element={<StudentSettings />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
