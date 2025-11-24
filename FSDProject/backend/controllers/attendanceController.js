import Attendance from "../models/Attendance.js";

// Create attendance record
export const createAttendance = async (req, res) => {
  try {
    const { studentId, subjectId, status } = req.body;

    const record = await Attendance.create({
      student: studentId,
      subject: subjectId,
      status,
      date: new Date(),
    });

    res.json({ message: "Attendance saved", record });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get attendance by studentId
export const getAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;

    const records = await Attendance.find({ student: studentId });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update attendance record
export const updateAttendance = async (req, res) => {
  try {
    const { attendanceId } = req.params;
    const { status } = req.body;

    const updated = await Attendance.findByIdAndUpdate(
      attendanceId,
      { status },
      { new: true }
    );

    res.json({ message: "Attendance updated", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
