import React from "react";
import "./MyAttendance.css";

const MyAttendance = () => {
  const subjects = [
    { name: "DSA", held: 30, attended: 22 },
    { name: "DBMS", held: 28, attended: 20 },
    { name: "Maths", held: 25, attended: 17 },
    { name: "OS", held: 26, attended: 21 },
  ];

  return (
    <div className="attendance-page">
      <h2 className="page-title">My Attendance</h2>

      <div className="attendance-table">
        <div className="table-header">
          <span>Subject</span>
          <span>Held</span>
          <span>Attended</span>
          <span>Percentage</span>
        </div>

        {subjects.map((sub, index) => {
          const percent = Math.round((sub.attended / sub.held) * 100);

          return (
            <div className="table-row" key={index}>
              <span>{sub.name}</span>
              <span>{sub.held}</span>
              <span>{sub.attended}</span>

              <div className="progress-wrapper">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <span className="percent">{percent}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAttendance;
