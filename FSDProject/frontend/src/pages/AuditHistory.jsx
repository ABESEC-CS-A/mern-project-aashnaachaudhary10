import "./AuditHistory.css";

export default function AuditHistory() {
  const logs = [
    { date: "14 Nov 2025", subject: "DBMS", status: "Present" },
    { date: "14 Nov 2025", subject: "DSA", status: "Absent" },
    { date: "13 Nov 2025", subject: "Maths", status: "Present" },
    { date: "12 Nov 2025", subject: "OS", status: "Present" },
    { date: "12 Nov 2025", subject: "DSA", status: "Absent" },
  ];

  return (
    <div className="audit-page">
      <h1>📊 Attendance Audit History</h1>

      <table className="audit-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((row, idx) => (
            <tr key={idx}>
              <td>{row.date}</td>
              <td>{row.subject}</td>
              <td className={row.status === "Present" ? "present" : "absent"}>
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
