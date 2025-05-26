const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Coonected sucessfully!");
  } catch (error) {
    console.error(`Failed to connect: ${error.message}`);
    process.exit(-1);
  }
};

module.exports = connectDB;
