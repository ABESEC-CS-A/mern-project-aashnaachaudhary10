import React from "react";
import "./StudentList.css";

export default function StudentList() {
  const students = [
    { id: 1, name: "Aashna Chaudhary", roll: "21CS001", course: "B.Tech CSE" },
    { id: 2, name: "Rohan Sharma", roll: "21CS002", course: "B.Tech CSE" },
    { id: 3, name: "Mehak Singh", roll: "21CS003", course: "B.Tech CSE" },
    { id: 4, name: "Arjun Verma", roll: "21CS004", course: "B.Tech CSE" },
  ];

  return (
    <div className="studentlist-page">
      <h1>📚 Student List</h1>

      <div className="student-search">
        <input type="text" placeholder="Search student by name or roll..." />
        <button>Search</button>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Profile</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.course}</td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
