import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type:String, required: true, unique: true}, 
    password: {type:String, required: true},
    role: {type:String, default: 'user'},
})

const Users = mongoose.model('Users', userSchema);

mongoose.connect("mongodb://127.0.0.1:27017/E-learning")
.then(()=>{
    console.log("Database connected");
})
.catch((error)=>{
    console.log("Error connecting to databacse" + error);   
})

export default Users;