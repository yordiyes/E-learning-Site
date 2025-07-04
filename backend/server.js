import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "./models/userModel.js";
import Course from "./models/coursesModel.js";
import APIRoute from "./routes/APIRoutes.js";
import passport from "./passport.js";
import { verifyToken, verifyRole } from "./middleware/JWTMiddleware.js";
import dotenv from "dotenv";
dotenv.config();

const port = 5000;
const saltRounds = 10;
const secretKey = process.env.SECRET_KEY;

const app = express();
app.use(cors());
app.use(express.json());

app.use(passport.initialize());

app.use("/protected", verifyToken);
app.use("/student-dashboard", verifyToken, verifyRole("student"));
app.use("/teacher-dashboard", verifyToken, verifyRole("teacher"));

app.get(
  "/student-dashboard",
  verifyToken,
  verifyRole("student"),
  (req, res) => {
    res.status(200).json({ message: "Welcome to the student dashboard" });
  }
);

app.get(
  "/teacher-dashboard",
  verifyToken,
  verifyRole("teacher"),
  (req, res) => {
    res.status(200).json({ message: "Welcome to the teacher dashboard" });
  }
);

// Generic protected route example
app.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "Access granted to protected route" });
});

app.get(
  APIRoute.AUTH.GOOGLE_LOGIN,
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// Handle Google callback
app.get(
  APIRoute.AUTH.GOOGLE_CALLBACK,
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // Generate JWT token for social login
    const token = jwt.sign(
      { userId: req.user._id, role: req.user.role },
      secretKey,
      { expiresIn: "1h" }
    );

    let redirectTo = "";

    if (req.user.role === "student") redirectTo = "student-dashboard";
    else {
      redirectTo = "teacher-dashboard";
    }

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
      return res.status(401).send("Invalid Password");
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey, {
      expiresIn: "1h",
    });

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

app.get("/api/courses", async (req, res) =>{
  try{
  const courses = await Course.find();
  res.status(200).json(courses); 

  }catch(err){
    console.error("Error occurred:", err);
    res.status(500).send("Error Fetching Courses");
  }
})

app.delete("/api/courses/:id", verifyToken, verifyRole("teacher"), async (req, res) => {
  try {
    const courseId = req.params.id;
    console.log("Course ID:", courseId);
    console.log("User Role:", req.user.role);

    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ message: "Error deleting course" });
  }
});



app.post('/api/courses', async (req, res) => {
  const { title, description, instructor } = req.body;

  // Check if all necessary fields are provided
  if (!title || !description || !instructor) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Create a new course
    const newCourse = new Course({ title, description, instructor });
    await newCourse.save();
    
    // Respond with success message
    res.status(201).json({ message: 'Course added successfully!' });
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ message: 'Error adding course.' });
  }
});

app.get('/api/teacher/students',verifyToken, verifyRole("teacher") ,async (req, res) => {
  try {
    // Query all users with the role 'student'
    const students = await Users.find({ role: 'student' });

    if (students.length === 0) {
      return res.status(404).json({ msg: 'No students found' });
    }

    res.json(students);  
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
