import styled from "styled-components";
import SideBar from "../components/StudSideBar";
import { useEffect } from "react";

export default function StudentDashboard() {
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
    } else {
      // If no token is found, redirect to login page
      window.location.href = "/signin";
    }
  }, []);
  return (
    <Container>
      <div>
        <SideBar />
      </div>
      <div className="inner-container">
        <p>StudentDashboard</p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: rgb(160, 139, 160);
  height: 100vh;
  display: flex;
  .inner-container {
    padding: 15px;
  }
`;
