const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Career = mongoose.model("Careers", careerSchema);
module.exports = Career;
