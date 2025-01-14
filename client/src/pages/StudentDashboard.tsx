import styled from "styled-components";

export default function StudentDashboard() {
  function logout() {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Redirect to the sign-in page
    window.location.href = "/";
  }

  return (
    <Container>
      <p>StudentDashboard</p>
      <button
        onClick={logout}
        className="border-2 border-none text-Tan px-4 mx-2 py-1 rounded hover:bg-blue-500 bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition"
      >
        LogOut
      </button>
    </Container>
  );
}
const Container = styled.div`
  background: #ffeeff;
  height: 100vh;
  padding: 10px;
`