import express from "express";
import axios from "axios";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "./models/userModel.js";
import APIRoute from "./routes/APIRoutes.js";

const port = 5000;
const saltRounds = 10;

const app = express();
app.use(cors());
app.use(express.json());

app.post(APIRoute.AUTH.SIGNUP, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("All input is required");
    }

    const user = await Users.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).send("User created successfully");
  } catch (err) {
    console.error("Error occurred:", err);
    if (err.message.includes("duplicate key")) {
      return res.status(400).send("User already exists");
    }
    res.status(500).send("Error processing request");
  }
});
app.post(APIRoute.AUTH.SIGNIN, async (req, res) => {
  if (req.body.email === undefined || req.body.password === undefined) {
    return res.status(400).send("Email and Password are required");
  }

  try {
    // Use async/await with findOne
    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("User not found");
    }

    // Here you can add password checking and token generation logic if needed
    // const match = await bcrypt.compare(req.body.password, user.password);
    // if (!match) {
    //   return res.status(400).send("Invalid credentials");
    // }

    // const token = jwt.sign({ userId: user._id }, "mysecretkey", { expiresIn: "1h" });

    return res.status(200).json({ message: "Sign in successful" });
  } catch (err) {
    return res.status(500).send("Error finding user in the database");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
