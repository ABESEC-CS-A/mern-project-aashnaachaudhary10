import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  department: { type: String },
  password: { type: String, required: true }
});

export default mongoose.model("Teacher", teacherSchema);
