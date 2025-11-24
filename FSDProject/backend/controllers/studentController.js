import Attendance from "../models/Attendance.js";
import Request from "../models/Request.js";

export const getMyAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;
    const records = await Attendance.find({ student: studentId });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAuditHistory = async (req, res) => {
  try {
    const { studentId } = req.params;
    const history = await Attendance.find({ student: studentId }).sort({ date: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createExemptRequest = async (req, res) => {
  try {
    const { reason, studentId } = req.body;

    const request = await Request.create({
      student: studentId,
      reason,
      status: "Pending"
    });

    res.json({ message: "Request submitted", request });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyExemptRequests = async (req, res) => {
  try {
    const { studentId } = req.params;

    const requests = await Request.find({ student: studentId });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
