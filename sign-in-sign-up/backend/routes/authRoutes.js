const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

// Sign-Up route
router.post("/register", registerUser);

// Sign-In route
router.post("/login", loginUser);

module.exports = router;
