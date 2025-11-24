import express from "express";
import {
  createAttendance,
  getAttendance,
  updateAttendance
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/", createAttendance);
router.get("/:studentId", getAttendance);
router.put("/:attendanceId", updateAttendance);

export default router;
