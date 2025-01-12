import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "./models/userModel.js";
import APIRoute from "./routes/APIRoutes.js";
import passport from "./passport.js"; 
import dotenv from "dotenv";
dotenv.config();


const port = 5000;
const saltRounds = 10;
const secretKey = process.env.SECRET_KEY; 

const app = express();
app.use(cors());
app.use(express.json());


app.use(passport.initialize());

app.get(
  APIRoute.AUTH.GOOGLE_LOGIN,
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Handle Google callback
app.get(
  APIRoute.AUTH.GOOGLE_CALLBACK,
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // Generate JWT token for social login
    const token = jwt.sign(
      { userId: req.user._id, role: req.user.role }, // Payload
      secretKey, // Secret key
      { expiresIn: "1h" } // Expiry time
    );

    let redirectTo = ""

    if(req.user.role === "student")
      redirectTo = "student-dashboard"
    else{
      redirectTo = "teacher-dashboard"
    }

    // Redirect the user to the homepage with the token in the URL
    res.redirect(`http://localhost:5173/${redirectTo}/?token=${token}`);
  }
);


// SIGNUP Route
app.post(APIRoute.AUTH.SIGNUP, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All inputs are required" });
    }

    // Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the new user
    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
      role: role || "user", // Default role if not provided
    });

    await newUser.save();

    // Respond with success
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error occurred:", err);

    // Handle specific errors
    if (err.message.includes("duplicate key")) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generic server error
    res.status(500).json({ message: "Error processing request" });
  }
});


// SIGNIN Route
app.post(APIRoute.AUTH.SIGNIN, async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and Password are required");
  }

  try {
    // Find the user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }

    // Compare the entered password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid credentials");
    }


    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role }, // Payload
      secretKey, // Secret key
      { expiresIn: "1h" } // Expiry time
    );

    // Respond with the token and user details
    res.status(200).json({
      message: "Sign in successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("Error processing sign-in");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
