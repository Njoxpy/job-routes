// import packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// create express instance
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
// config db.js
const connectDB = require("./config/DB");

const jobRoutes = require("./routes/careerRoutes");

app.get("/", (req, res) => {
  res.json({ message: "The server is running well and pretty" });
});

// register routes
app.use("/api/v1/careers", jobRoutes);

// declare port variables
const PORT = process.env.PORT || 5000;

// listen for requests
app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);

  connectDB();
});
