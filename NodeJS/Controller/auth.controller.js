import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../Model/User.model.js";

const Tokens = new Set(); // Temporary store for tokens

// Generate JWT Token
function generateToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || "fallbackSecret", {
    expiresIn: "7d", // Token expires in 7 day
  });
}

//  Register User
export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
}

//  Login User (Issue JWT Token)
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    Tokens.add(token); // Store token

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
}

// Logout (Remove Token)
export function logoutUser(req, res) {
  const { token } = req.body;
  if (Tokens.has(token)) {
    Tokens.delete(token);
    return res.status(200).json({ message: "Logged out successfully" });
  }
  res.status(400).json({ message: "Invalid token or already logged out" });
}
