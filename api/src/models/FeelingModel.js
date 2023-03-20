const mongoose = require("mongoose");

const feelingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emotion: { type: String, required: true },
  jobRelated: { type: Boolean, required: true },
  resing: { type: Boolean, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

const Feeling = mongoose.model("Feeling", feelingSchema);

module.exports = Feeling;
  