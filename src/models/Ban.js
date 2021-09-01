import mongoose from "mongoose";

const BanSchema = new mongoose.Schema({
  ruser: String,
  reason: String,
  time: String,
  notes: String,
  mod: String,
});

module.exports = mongoose.models.Ban || mongoose.model("Ban", BanSchema);
