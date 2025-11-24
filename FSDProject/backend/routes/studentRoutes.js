import express from "express";
import {
  getMyAttendance,
  getAuditHistory,
  createExemptRequest,
  getMyExemptRequests
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/attendance/:studentId", getMyAttendance);
router.get("/audit/:studentId", getAuditHistory);
router.post("/exempt", createExemptRequest);
router.get("/exempt/:studentId", getMyExemptRequests);

export default router;
