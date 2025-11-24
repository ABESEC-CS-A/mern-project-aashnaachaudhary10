import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  action: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Audit", auditSchema);
