import { useState, useEffect } from "react";
import styled from "styled-components";

export default function CoursesPage() {
  interface Course {
    _id: string;
    title: string;
    description: string;
    instructor: string;
  }

  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");

  // Fetch existing courses from the database
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const courseData = { title, description, instructor };
  
    // Get the token from localStorage or another source
    const token = localStorage.getItem("token");  
  
    if (!token) {
      alert("You must be logged in to add a course.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  
        },
        body: JSON.stringify(courseData),
      });
  
      if (response.ok) {
        const newCourse = await response.json();
        setCourses((prevCourses) => [...prevCourses, newCourse]);  // Add new course to the list
        setTitle("");  // Reset form fields
        setDescription("");
        setInstructor("");
        alert("Course added successfully!");
      } else {
        alert("Failed to add course.");
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };
  
  // Handle deleting a course
  const handleDelete = async (courseId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`, // or sessionStorage/cookies where token is stored
          'Content-Type': 'application/json'  // Add Content-Type if needed
        }
      });
  
      const data = await response.json(); // Handle the response as JSON
  
      if (response.ok) {
        console.log('Course deleted successfully:', data);
        setCourses([...courses.filter((course) => course._id !== courseId)]);

      } else {
        console.error('Failed to delete course:', data);
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
  

  return (
    <Container>
      <CoursesList>
        <h2 className="text-2xl font-bold my-3">Available Courses</h2>
        {courses.length > 0 ? (
          <CourseCards>
            {courses.map((course) => (
              <CourseCard key={course._id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <Instructor>{course.instructor}</Instructor>
                <DeleteButton onClick={() => handleDelete(course._id)}>
                  Delete
                </DeleteButton>
              </CourseCard>
            ))}
          </CourseCards>
        ) : (
          <p>No courses available at the moment.</p>
        )}
      </CoursesList>

      <Form onSubmit={handleSubmit}>
        <Title>Add New Course</Title>
        <FormGroup>
          <Label htmlFor="title">Course Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Course Description</Label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></TextArea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="instructor">Instructor Name</Label>
          <Input
            type="text"
            id="instructor"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Add Course</SubmitButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f7fc;
  padding: 20px;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #4b9cd3;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 150px;
  &:focus {
    border-color: #4b9cd3;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #4b9cd3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3578a5;
  }
  &:active {
    background-color: #2b5e8a;
  }
`;

const CoursesList = styled.div`
  margin: 40px 0;
  width: 100%;
  max-width: 800px;
`;

const CourseCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const CourseCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Instructor = styled.span`
  font-size: 1rem;
  color: #555;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
  &:active {
    background-color: #e74c3c;
  }
`;
