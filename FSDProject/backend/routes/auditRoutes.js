import express from "express";
import {
  addAuditEntry,
  getAuditByStudent,
  getAllAudit
} from "../controllers/auditController.js";

const router = express.Router();

// ADD a new audit entry
router.post("/add", addAuditEntry);

// GET audit for a specific student
router.get("/student/:studentId", getAuditByStudent);

// GET all audit entries (for teacher/admin)
router.get("/all", getAllAudit);

export default router;
