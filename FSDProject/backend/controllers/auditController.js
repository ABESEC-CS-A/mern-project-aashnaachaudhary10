import Audit from "../models/Audit.js";

// ➤ ADD AUDIT ENTRY
export const addAuditEntry = async (req, res) => {
  try {
    const { student, action, date } = req.body;

    const entry = await Audit.create({
      student,
      action,
      date: date || new Date(),
    });

    res.json({ message: "Audit entry added", entry });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ➤ GET AUDIT HISTORY OF ONE STUDENT
export const getAuditByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const history = await Audit.find({ student: studentId }).sort({ date: -1 });

    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ➤ GET ALL AUDIT ENTRIES (ADMIN/TEACHER)
export const getAllAudit = async (req, res) => {
  try {
    const all = await Audit.find().sort({ date: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
