import mongoose from 'mongoose';

// Define the schema for the Course model
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model from the schema
const Course = mongoose.model('Course', courseSchema);

// module.exports = Course;
export default Course;
