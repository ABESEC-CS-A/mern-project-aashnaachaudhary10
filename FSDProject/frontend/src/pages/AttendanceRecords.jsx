import "./AttendanceRecords.css";

export default function AttendanceRecords() {
  const records = [
    { date: "2025-02-12", subject: "DBMS", present: 42, total: 50 },
    { date: "2025-02-11", subject: "DSA", present: 38, total: 50 },
    { date: "2025-02-10", subject: "Maths", present: 44, total: 50 },
  ];

  return (
    <div className="t-records-page">
      <h1>📄 Attendance Records</h1>

      <div className="t-records-table">
        <div className="t-head">
          <span>Date</span>
          <span>Subject</span>
          <span>Present</span>
          <span>Total</span>
          <span>%</span>
        </div>

        {records.map((rec, index) => {
          let percent = Math.round((rec.present / rec.total) * 100);

          return (
            <div className="t-row" key={index}>
              <span>{rec.date}</span>
              <span>{rec.subject}</span>
              <span>{rec.present}</span>
              <span>{rec.total}</span>
              <span className={percent < 75 ? "low" : "high"}>
                {percent}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
