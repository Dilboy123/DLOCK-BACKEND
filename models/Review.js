const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide user name"],
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
    },
    review: {
      type: String,
      required: [true, "Please provide review"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
