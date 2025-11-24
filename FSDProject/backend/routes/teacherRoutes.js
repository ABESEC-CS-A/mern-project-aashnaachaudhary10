import express from "express";
import {
  takeAttendance,
  getAttendanceRecords,
  getStudentList,
  getSubjects,
  handleRequest
} from "../controllers/teacherController.js";

const router = express.Router();

router.post("/attendance", takeAttendance);
router.get("/attendance-records/:subjectId", getAttendanceRecords);

router.get("/students/:classId", getStudentList);
router.get("/subjects/:teacherId", getSubjects);

// approve or reject exempt requests
router.put("/request/:requestId", handleRequest);

export default router;
