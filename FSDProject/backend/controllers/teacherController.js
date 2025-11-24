import Student from "../models/Student.js";
import Attendance from "../models/Attendance.js";
import Subject from "../models/Subject.js";
import Request from "../models/Request.js";

export const takeAttendance = async (req, res) => {
  try {
    const { studentId, subjectId, status } = req.body;

    const record = await Attendance.create({
      student: studentId,
      subject: subjectId,
      status,
      date: new Date()
    });

    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAttendanceRecords = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const records = await Attendance.find({ subject: subjectId });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStudentList = async (req, res) => {
  try {
    const { classId } = req.params;
    const students = await Student.find({ classId });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSubjects = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const subjects = await Subject.find({ teacher: teacherId });
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const handleRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;

    const updated = await Request.findByIdAndUpdate(
      requestId,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
