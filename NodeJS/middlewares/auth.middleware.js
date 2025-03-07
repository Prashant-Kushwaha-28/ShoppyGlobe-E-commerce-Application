import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const authHeader = req.header("Authorization");
  console.log("Auth Header:", authHeader); // Debugging

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1]; // Extract token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallbackSecret");
    console.log("Decoded Token:", decoded); // Debugging
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default authMiddleware;
