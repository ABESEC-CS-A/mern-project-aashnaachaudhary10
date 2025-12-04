import React, { useEffect, useState } from "react";
import axios from "axios";

const AuditHistory = () => {
  const [audit, setAudit] = useState([]);

  useEffect(() => {
    const loadAudit = async () => {
      try {
        const token = localStorage.getItem("token");
        const studentId = JSON.parse(localStorage.getItem("user"))._id;

        const res = await axios.get(
          `http://localhost:5000/api/student/audit/${studentId}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setAudit(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    loadAudit();
  }, []);

  return (
    <div>
      <h2>Audit Logs</h2>
      {audit.map((x) => (
        <p key={x._id}>{x.action} — {x.date}</p>
      ))}
    </div>
  );
};

export default AuditHistory;
