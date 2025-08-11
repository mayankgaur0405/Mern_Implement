// Express ka use server banane ke liye
const express = require("express");
// CORS ka use frontend se request allow karne ke liye hota hai
const cors = require("cors");
// .env file me rakhe secrets ko use karne ke liye
const dotenv = require("dotenv");
// MongoDB connect karne ke liye custom function
const connectDB = require("./config/db");

dotenv.config(); // .env ka data load kar raha hai
connectDB(); // MongoDB se connect ho raha hai

const app = express();

app.use(cors()); // Cross-origin requests allow kar raha hai
app.use(express.json()); // Request body ko JSON me parse karega

// Auth routes ko /api/auth pe mount kar rahe
app.use("/api/auth", require("./routes/authRoutes"));

// Server ko port 5000 pe start kar rahe
app.listen(5000, () => console.log("Server running on port 5000"));
