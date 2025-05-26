const mongoose = require("mongoose");

const Career = require("../models/careerModel");

// http://localhost:5000/api/v1/careers/
const createJobPost = async (req, res) => {
  try {
    const { title, salary, location, description } = req.body;

    // validate those fields
    if (!title || !salary || !location || !description) {
      return res.status(400).json({
        message:
          "All fields (title, salary, location, description) must be provided.",
      });
    }

    // check for the type of salary if it is a number
    if (typeof salary !== "number") {
      return res.status(400).json({ message: "Salary should be a number" });
    }

    // create job post
    const newJob = await Career.create({
      title,
      salary,
      location,
      description,
    });

    res.status(201).json({ message: "New job added", newJob });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// http://localhost:5000/api/v1/careers/
const getJobs = async (req, res) => {
  try {
    const jobs = await Career.find();

    if (jobs.length === 0) {
      return res.status(404).json({ message: "No job found!" });
    }

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// localhost:5000/api/v1/careers/68342980db2ae5f1fd67893a
const getJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id format!" });
    }

    const job = await Career.findById(id);

    res.status(200).json(job);

    // check if the id format is valid
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error({ error: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, salary, location, description } = req.body;

    if (!id) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "INvalid id" });
    }

    const updatedPost = await Career.findByIdAndUpdate(id, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ message: "Updated sucessfully", updatedPost });
  } catch (error) {
    res.status(500).json({ message: "Failed to update post" });
    console.error(error.message);
  }
};

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id format!" });
    }

    const deletedPost = await Career.deleteOne({ _id: id });

    if (deletedPost.deletedCount === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Deleted successfully", deletedPost });
  } catch (error) {
    console.error("Delete job error:", error.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = {
  createJobPost,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
};
