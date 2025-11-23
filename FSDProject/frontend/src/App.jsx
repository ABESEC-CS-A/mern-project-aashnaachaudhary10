import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import MyAttendance from "./pages/MyAttendance";
import AuditHistory from "./pages/AuditHistory";
import ExemptRequests from "./pages/ExemptRequests";
import StudentSettings from "./pages/StudentSettings";
import TakeAttendance from "./pages/TakeAttendance";
import AttendanceRecords from "./pages/AttendanceRecords";
import StudentList from "./pages/StudentList";
import Subjects from "./pages/Subjects";
import Requests from "./pages/Requests";
import TeacherSettings from "./pages/TeacherSettings";


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
        <Route path="/teacher/take-attendance" element={<TakeAttendance />} />
        <Route path="/teacher/attendance-records" element={<AttendanceRecords />} />
        <Route path="/teacher/student-list" element={<StudentList />} />
        <Route path="/teacher/subjects" element={<Subjects />} />
        <Route path="/teacher/requests" element={<Requests />} />
        <Route path="/teacher/settings" element={<TeacherSettings />} />

      </Routes>
    </Router>
  );
}

export default App;
