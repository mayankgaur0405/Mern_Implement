const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // MongoDB URI se connect karne ka code
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err); // Error print karna
    process.exit(1); // Process stop kar dena agar DB connect na ho
  }
};

module.exports = connectDB;
