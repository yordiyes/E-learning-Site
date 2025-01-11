import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { 
      type: String, 
      required: function() { 
        // Password is required only if the user doesn't log in through Google
        return !this.googleId; 
      }
    },
    role: { type: String, default: "user" },
    googleId: { type: String }, // Google ID for OAuth users
  });
  

const Users = mongoose.model('Users', userSchema);

mongoose.connect("mongodb://127.0.0.1:27017/E-learning")
.then(()=>{
    console.log("Database connected");
})
.catch((error)=>{
    console.log("Error connecting to databacse" + error);   
})

export default Users;