import React from "react";
import "./Requests.css";

const Requests = () => {
  const requests = [
    {
      id: 1,
      student: "Aashna Chaudhary",
      subject: "Maths",
      date: "2025-02-15",
      reason: "Medical issue",
      status: "Pending",
    },
    {
      id: 2,
      student: "Rahul Sharma",
      subject: "Physics",
      date: "2025-02-10",
      reason: "Family Function",
      status: "Pending",
    },
  ];

  return (
    <div className="requests-container">
      <h2>Requests</h2>

      {requests.map((req) => (
        <div className="request-card" key={req.id}>
          <div className="request-info">
            <p><strong>Student:</strong> {req.student}</p>
            <p><strong>Subject:</strong> {req.subject}</p>
            <p><strong>Date:</strong> {req.date}</p>
            <p><strong>Reason:</strong> {req.reason}</p>
          </div>

          <div className="request-actions">
            <button className="pending-btn">Pending</button>
            <button className="approve-btn">Approve</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Requests;
