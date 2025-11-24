import Request from "../models/Request.js";

export const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate("student");
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
