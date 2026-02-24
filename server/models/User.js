const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  role: {
    type: String,
    enum: ["Patient", "Admin", "Specialist", "Physician"],
    default: "Patient"
  },
  account_status: { type: Boolean, default: true },
  created_timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);