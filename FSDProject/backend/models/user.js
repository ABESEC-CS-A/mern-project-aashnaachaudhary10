import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["student", "teacher"],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  studentId: {
    type: String, 
    required: function () { return this.role === "student"; }
  },
  teacherId: {
    type: String, 
    required: function () { return this.role === "teacher"; }
  },
  department: String,
  semester: Number,
});

export default mongoose.model("User", userSchema);
