const mongoose = require("mongoose");

// User ka schema banaya jisme fields ka type aur rules set kiye
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name required hai
  email: { type: String, required: true, unique: true }, // Email unique & required
  password: { type: String, required: true }, // Password required
});

// Model export kar rahe
module.exports = mongoose.model("User", userSchema);
