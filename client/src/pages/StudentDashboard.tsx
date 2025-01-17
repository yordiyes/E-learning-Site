import styled from "styled-components";
import SideBar from "../components/StudSideBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import boy from "../assets/boy.png";

const StudentDashboardValidate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");

    if (userRole !== "student") {
      console.warn("Unauthorized access attempt.");
      if (!sessionStorage.getItem("redirected")) {
        sessionStorage.setItem("redirected", "true");
        navigate("/teacher-dashboard");
      }
    }
  }, []);
};

export default function StudentDashboard() {
  StudentDashboardValidate();
  useEffect(() => {
    // Extract token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Decode the token to get the role (optional)
      const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
      const userRole = payload.role;

      // Store token and userRole in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", userRole);

      console.log("Token and role saved:", { token, userRole });
    }
  }, []);
  const currentDate = new Date();

  // Extract the day, month, and year
  const day = currentDate.getDate(); 
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear(); 
  
  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Get the name of the current month
  const month = monthNames[monthIndex];
  
  return (
    <Container>
      <div>
        <SideBar />
      </div>
      <div className="inner-container">
        <div className="user-board">
          <div>
            <p className="text-sm font-bold text-slate-200">{month + " " + day + " " + year}</p>

            <h1 className="mt-20 text-3xl font-bold text-slate-200">Welcome Back, 🖐</h1>
            <p className="text-slate-300">
              Always stay update in your student portal.
            </p>
          </div>
          <div>
            <img src={boy} width={259} className="mr-10 pb-0" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: rgb(218, 190, 218);
  height: 100vh;
  display: flex;
  .inner-container {
    width: 100%;
    padding: 15px;
  }

  .user-board {
    background-color: rgb(114, 90, 199);
    width: 100%;
    height: 210px;
    margin-left: 2px;
    padding: 20px 20px 0px 80px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
  }
`;
