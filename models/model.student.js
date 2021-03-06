const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      uppercase: false,
      required: [true, "Name is required"],
    },
    dob: {
      type: Date,
      required: [true, "Please provide the DOB"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["female", "male"],
    },
    class: {
      type: String,
    },
    uppercase: false,
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "parent" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", userSchema);
