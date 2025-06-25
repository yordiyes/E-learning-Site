import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MUNGODB_URI = process.env.MONGODB_URI;
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: function () {
      // Password is required only if the user doesn't log in through Google
      return !this.googleId;
    },
  },
  role: { type: String, default: "student" },
  googleId: { type: String }, // Google ID for OAuth users
});

const Users = mongoose.model("Users", userSchema);

mongoose
  .connect(MUNGODB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to databacse" + error);
  });

export default Users;
