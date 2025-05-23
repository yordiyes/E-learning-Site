import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");

    if (userRole !== "teacher") {
      console.warn("Unauthorized access attempt.");
      navigate("/student-dashboard");
    }
  }, []);
  return (
    <DashboardContainer>
      {/* Sidebar */}
      <SidebarContainer>
        <div className="logo">
          <i className="bx bxs-user text-7xl mt-4"></i>
          <h1 className="text-3xl font-bold text-center my-6 mt-1">Teacher</h1>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/teacher-dashboard/dashboard" className="menu-item my-3">
                <i className="bx bxs-dashboard mr-2"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/teacher-dashboard/courses" className="menu-item my-3">
                <i className="bx bx-book mr-2"></i> Courses
              </Link>
            </li>
            <li>
              <Link to="/teacher-dashboard/students" className="menu-item my-3">
                <i className="bx bx-user mr-2"></i> Students
              </Link>
            </li>
            <li>
              <Link to="/teacher-dashboard/assessment" className="menu-item my-3">
                <i className="bx bx-comment-check mr-2"></i> Assessments
              </Link>
            </li>
            <li>
              <Link to="/teacher-dashboard/contacts" className="menu-item my-3">
                <i className="bx bxs-comment-detail mr-2"></i> Payment
              </Link>
            </li>
          </ul>
        </nav>
        <div className="logout">
          <button
            onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userRole");
                window.location.href = "/";
            }}
            className="logout-btn"
          >
            LogOut
          </button>
        </div>
      </SidebarContainer>

      {/* Main Content */}
      <MainContentContainer>
        <Outlet /> {/* Child components (from routes) will render here */}
      </MainContentContainer>
    </DashboardContainer>
  );
};

export default TeacherDashboard;

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 0;
`;

const SidebarContainer = styled.div`
  width: 250px;
  background-color: rgb(76, 53, 159); /* Adjusted color for teacher dashboard */
  color: #f6d6d6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo {
    text-align: center;
    padding: 1rem;
  }

  .menu {
    padding: 1rem;
  }

  .menu-item {
    color: #f6d6d6;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
  }

  .menu-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .logout {
    padding: 1rem;
    text-align: center;
  }

  .logout-btn {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    background: linear-gradient(to right, #a78bfa, #f472b6); /* Purple to pink gradient */
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .logout-btn:hover {
    background: linear-gradient(to right, rgb(58, 79, 237), rgb(150, 27, 82));
    transform: scale(1.05);
  }
`;

const MainContentContainer = styled.div`
  flex: 1;
  padding: 0;
  background-color: #f9fafb;
  overflow-y: auto;
`;
