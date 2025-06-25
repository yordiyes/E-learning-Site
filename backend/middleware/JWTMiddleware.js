// Middleware to verify JWT
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Access token is required" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const verifyRole = (requiredRole) => (req, res, next) => {
  console.log("User role:", req.user?.role); // Debugging
  if (req.user?.role !== requiredRole) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
