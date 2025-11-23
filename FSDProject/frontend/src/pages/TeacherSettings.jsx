import React from "react";
import "./TeacherSettings.css";

export default function TeacherSettings() {
  return (
    <div className="teacher-settings-page">
      <h1 className="settings-title">⚙ Teacher Settings</h1>

      <div className="settings-card">
        <h2>Profile Information</h2>

        <label>Name</label>
        <input type="text" value="John Doe" readOnly />

        <label>Email</label>
        <input type="email" value="john.doe@college.edu" readOnly />

        <label>Department</label>
        <input type="text" value="Computer Science" readOnly />
      </div>

      <div className="settings-card">
        <h2>Change Password</h2>

        <label>Old Password</label>
        <input type="password" placeholder="Enter old password" />

        <label>New Password</label>
        <input type="password" placeholder="Enter new password" />

        <label>Confirm New Password</label>
        <input type="password" placeholder="Confirm new password" />

        <button className="save-btn">Update Password</button>
      </div>

      <button className="logout-btn">Logout</button>
    </div>
  );
}
