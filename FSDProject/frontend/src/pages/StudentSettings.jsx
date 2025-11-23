import "./StudentSettings.css";

export default function StudentSettings() {
  return (
    <div className="settings-page">

      <h1>⚙ Student Settings</h1>

      {/* Profile Section */}
      <div className="setting-card">
        <h2>👤 Profile</h2>

        <label>Name</label>
        <input type="text" value="Aashna" readOnly />

        <label>Email</label>
        <input type="text" value="aashna@student.com" readOnly />
      </div>

      {/* Theme Section */}
      <div className="setting-card">
        <h2>🎨 Theme</h2>

        <select>
          <option>Dark Mode</option>
          <option>Light Mode</option>
          <option>Galaxy Theme</option>
        </select>
      </div>

      {/* Password Section */}
      <div className="setting-card">
        <h2>🔒 Change Password</h2>

        <label>Old Password</label>
        <input type="password" />

        <label>New Password</label>
        <input type="password" />

        <button className="save-btn">Save</button>
      </div>

      {/* Logout */}
      <button className="logout-btn">🚪 Logout</button>
    </div>
  );
}
