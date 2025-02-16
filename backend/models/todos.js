const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    description: { type: String, require: true },
    status: { type: String, require: true, enum: ["TODO", "DONE"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todos", todoSchema);
