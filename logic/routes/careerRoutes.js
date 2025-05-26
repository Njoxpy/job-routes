const express = require("express");
const {
  createJobPost,
  getJobs,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/career");
const careerRoutes = express.Router();

// create
careerRoutes.post("/", createJobPost);

// read jobs
careerRoutes.get("/", getJobs);

// read job
careerRoutes.get("/:id", getJob);

// update job
careerRoutes.patch("/:id", updateJob);
// delete job
careerRoutes.delete("/:id", deleteJob);

module.exports = careerRoutes;
