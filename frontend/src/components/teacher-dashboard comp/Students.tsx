import { useEffect, useState } from "react";
import styled from "styled-components";

const Students = () => {
  interface Student {
    id: number;
    name: string;
    email: string;
    status: string;
  }

  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch students enrolled in teacher's courses
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/teacher/students", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching student data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <LoadingMessage>Loading students...</LoadingMessage>;

  return (
    <StudentsContainer>
      <h2>Students Enrolled in Your Courses</h2>
      <SearchContainer>
        <input type="text" placeholder="Search by name..." />
        <button>Search</button>
      </SearchContainer>

      <StudentList>
        {students.length === 0 ? (
          <p>No students found</p>
        ) : (
          students.map((student) => (
            <StudentCard key={student.id}>
              <h3>{student.name}</h3>
              <p>Email: {student.email}</p>
              <p>Status: {student.status}</p>
              <button>View Details</button>
            </StudentCard>
          ))
        )}
      </StudentList>
    </StudentsContainer>
  );
};

export default Students;

const StudentsContainer = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    width: 200px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #4c359f;
    color: white;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #6e49c9;
    }
  }
`;

const StudentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StudentCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  button {
    background-color: #4c359f;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #6e49c9;
    }
  }
`;
