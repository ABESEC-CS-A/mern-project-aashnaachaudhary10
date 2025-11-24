import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true
  },
  markedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Teacher
    required: true
  }
});

export default mongoose.model("Attendance", attendanceSchema);
