// imports
const mongoose = require("mongoose");
const { Schema } = mongoose;

// schema
const questionSchema = new Schema(
  {
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
