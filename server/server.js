import express from "express";
import axios from "axios";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "./models/userModel";

const port = 5000;
const saltRounds = 10;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/auth/signup", (req, res) => {
  res.send("Sign up");
  if (
    req.body.name === undefined ||
    req.body.email === undefined ||
    req.body.password === undefined
  ) {
    return res.status(400).send("All input is required");
  }
  Users.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(400).send("Error finding user in the database");
    }
    if (user) {
      res.status(400).send("User already exists");
    }

    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        return res.status(400).send("Error generating salt");
      }
      bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
        if (err) {
          return res.status(400).send("Error hashing password");
        }
        const newUser = new Users({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        });
        newUser.save((err) => {
          if (err) {
            return res.status(400).send("Error saving user to the database");
          }
          return res.status(201).send("User created successfully");
        });
      });
    });
  });
});
app.post("/api/auth/signin", (req, res) => {
  if(req.body.email === undefined || rq.body.password === undefined){
    return res.status(400).send("Email and Password are required");
  }

  Users.findOne({email: req.body.email}, (err, user)=>{
    if(err){
        return res.status(400).send("Error finding user in the database");
    }
    if(!user){
        return res.status(400).send("User not found");
    }

    const token = jwt.sign({userId: user._id}, "mysecretkey", {
        expiredin:"1h"
    })

    return res.status(200).json({message: "Sign in successful", token});
  })
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
