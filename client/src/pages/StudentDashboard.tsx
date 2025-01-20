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
  const navigate = useNavigate();

  StudentDashboardValidate();
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        const userRole = payload.role;

        localStorage.setItem("token", token);
        localStorage.setItem("userRole", userRole);

        console.log("Token and role saved:", { token, userRole });
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      alert("Invalid token detected. Please log in again.");
      navigate("/signin");
    }
  }, []);

  const currentDate = new Date();

  // Extract the day, month, and year
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const getGreeting = () => {
    const hours = currentDate.getHours();
    if (hours < 12) return "Good Morning, 🖐";
    if (hours < 18) return "Good Afternoon, 🖐";
    return "Good Evening, 🖐";
  };

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the name of the current month
  const month = monthNames[monthIndex];

  return (
    <Container className="bg-blue-50">
      <div>
        <SideBar />
      </div>
      <div className="inner-container">
        <div className="user-board">
          <div>
            <p className="text-sm font-bold text-slate-200">
              {getGreeting() + month + " " + day + " " + year}
            </p>

            <h1 className="mt-20 text-3xl font-bold text-slate-200">
              Welcome Back, 🖐
            </h1>
            <p className="text-slate-300">
              Always stay update in your student portal.
            </p>
          </div>
          <div>
            <img src={boy} width={259} className="mr-10 pb-0" alt="" />
          </div>
        </div>
        <h1 className="mt-5 ml-5 mb-0 text-xl font-bold">Finance</h1>

        <div className="second-inner flex w-9/12 h-2/5">
          <div className="cards bg-blue-200 rounded-xl p-3 mx-4 mt-3 h-60 w-full ">
          
          </div>
          <div className="cards bg-blue-200 rounded-xl p-3 m-6 mt-3 h-60 w-full">
          
          </div>
          <div className="cards bg-blue-200 rounded-xl p-3 m-6 mt-3 h-60 w-full">
           
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  // background: rgb(218, 190, 218);
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
  @media (max-width: 768px) {
    .user-board {
      flex-direction: column;
      height: auto;
      align-items: center;
      text-align: center;
      padding: 20px;
    }

    .user-board img {
      margin-top: 20px;
      width: 200px;
    }
  }
    .second-inner{
      justify-content: space-between:
      align-item: center;
    }
`;
