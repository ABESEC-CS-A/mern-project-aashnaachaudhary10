import "./Subjects.css";
import { useState } from "react";

export default function Subjects() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Data Structures", code: "CS201" },
    { id: 2, name: "DBMS", code: "CS202" },
    { id: 3, name: "Operating Systems", code: "CS203" },
  ]);

  const [newSub, setNewSub] = useState("");
  const [newCode, setNewCode] = useState("");

  const addSubject = () => {
    if (!newSub || !newCode) return;

    setSubjects([
      ...subjects,
      { id: subjects.length + 1, name: newSub, code: newCode },
    ]);

    setNewSub("");
    setNewCode("");
  };

  return (
    <div className="subjects-page">
      <h1>📚 Subjects</h1>

      {/* Add Subject Form */}
      <div className="sub-form">
        <input
          type="text"
          placeholder="Subject Name"
          value={newSub}
          onChange={(e) => setNewSub(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject Code"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
        />

        <button onClick={addSubject}>Add Subject</button>
      </div>

      {/* Subject List */}
      <table className="sub-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Code</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
