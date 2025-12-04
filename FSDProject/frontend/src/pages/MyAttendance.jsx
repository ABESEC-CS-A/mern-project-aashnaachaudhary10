import React, { useEffect, useState } from "react";
import axios from "axios";

const MyAttendance = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const token = localStorage.getItem("token");
        const studentId = JSON.parse(localStorage.getItem("user"))._id;

        const res = await axios.get(
          `http://localhost:5000/api/student/attendance/${studentId}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setRecords(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div>
      <h2>My Attendance</h2>
      {records.map((x) => (
        <p key={x._id}>{x.date} — {x.status}</p>
      ))}
    </div>
  );
};

export default MyAttendance;
