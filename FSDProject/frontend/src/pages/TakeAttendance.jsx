import React, { useState } from "react";
import "./TakeAttendance.css";

export default function TakeAttendance() {
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [attendance, setAttendance] = useState({});

  const students = [
    { id: 1, name: "Aashna" },
    { id: 2, name: "Riya" },
    { id: 3, name: "Kabir" },
    { id: 4, name: "Aditya" },
  ];

  const toggleAttendance = (id) => {
    setAttendance({
      ...attendance,
      [id]: !attendance[id],
    });
  };

  const handleSubmit = () => {
    if (!date || !subject) {
      alert("Please select date & subject");
      return;
    }
    console.log("Submitted:", attendance);
    alert("Attendance Saved Successfully");
  };

  return (
    <div className="take-att-page">
      <h1>📝 Take Attendance</h1>

      {/* DATE + SUBJECT */}
      <div className="filters-box">
        <div className="filter-item">
          <label>Select Date</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="filter-item">
          <label>Select Subject</label>
          <select onChange={(e) => setSubject(e.target.value)}>
            <option value="">-- choose --</option>
            <option value="DSA">DSA</option>
            <option value="DBMS">DBMS</option>
            <option value="Maths">Maths</option>
            <option value="OS">OS</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <table className="take-att-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Mark Present</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>
                <button
                  className={
                    attendance[s.id] ? "present-btn" : "absent-btn"
                  }
                  onClick={() => toggleAttendance(s.id)}
                >
                  {attendance[s.id] ? "Present" : "Absent"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="submit-att-btn" onClick={handleSubmit}>
        Save Attendance
      </button>
    </div>
  );
}
