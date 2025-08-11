const User = require("../models/User");
const bcrypt = require("bcryptjs"); // Password hash karne ke liye
const jwt = require("jsonwebtoken"); // Token generate karne ke liye

// User Register karna
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body; // Body se data nikalna

  try {
    // Pehle check kar rahe ki user already exist na kare
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Password ko encrypt (hash) karna
    const hashedPassword = await bcrypt.hash(password, 10);

    // New user create karna
    user = new User({ name, email, password: hashedPassword });
    await user.save(); // DB me save karna

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message }); // Server error
  }
};

// User Login karna
exports.loginUser = async (req, res) => {
  const { email, password } = req.body; // Body se data lena

  try {
    // User exist karta hai ya nahi check
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Password match check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // JWT token create karna
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // 1 hour expiry
    });

    // Token aur user ka basic data bhejna
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
