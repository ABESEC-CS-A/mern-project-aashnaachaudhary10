import "./ExemptRequests.css";
import { useState } from "react";

export default function ExemptRequests() {
  const [form, setForm] = useState({
    reason: "",
    date: "",
    file: null,
  });

  const [requests, setRequests] = useState([
    {
      date: "10 Nov 2025",
      reason: "Medical Leave",
      status: "Approved",
    },
    {
      date: "04 Nov 2025",
      reason: "Sports Event",
      status: "Pending",
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    const newReq = {
      date: form.date,
      reason: form.reason,
      status: "Pending",
    };

    setRequests([newReq, ...requests]);
    alert("Request submitted!");
  }

  return (
    <div className="exempt-page">
      <h1>📝 Exempt Attendance Request</h1>

      {/* FORM */}
      <form className="exempt-form" onSubmit={handleSubmit}>
        <label>Reason</label>
        <input
          type="text"
          placeholder="Medical reason, event name, etc."
          required
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
        />

        <label>Date</label>
        <input
          type="date"
          required
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <label>Upload Proof</label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
        />

        <button className="submit-btn" type="submit">
          Submit Request
        </button>
      </form>

      {/* PREVIOUS REQUESTS */}
      <h2 className="sub-heading">Your Previous Requests</h2>

      <table className="req-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((r, index) => (
            <tr key={index}>
              <td>{r.date}</td>
              <td>{r.reason}</td>
              <td className={r.status}>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
