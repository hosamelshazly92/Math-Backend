// imports
const mongoose = require("mongoose");
const { Schema } = mongoose;

// schema
const questionSchema = new Schema(
  {
    type: {
      type: String,
      default: "N/A",
    },
    question: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("question", questionSchema);
