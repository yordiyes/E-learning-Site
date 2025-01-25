import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Courses() {
  interface Course {
    title: string;
    description: string;
    instructor: string;
  }

  const [courses, setCourses] = useState<Course[]>([]); 

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Container>
      <h1 className="heading">Courses</h1>
      <div className="courses">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} className="course-card">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <span>{course.instructor}</span>
              <button className="block w-20 bg-blue-200 p-1 rounded">Enroll</button>
            </div>
          ))
        ) : (
          <p>No courses available right now.</p>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  .heading {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  .courses {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  .course-card {
    background-color:rgb(148, 163, 193);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  .course-card h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .course-card p {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  .course-card span {
    font-size: 0.9rem;
    color: #555;
  }
`;
