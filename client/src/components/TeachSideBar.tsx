import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  function logout() {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");

    navigate("/");
  }

  return (
    <SidebarContainer>
      <div className="logo">
        <h1 className="text-3xl font-bold text-center my-6">Etech</h1>
      </div>
      <nav className="menu">
        <a href="#" className="menu-item">
          Courses
        </a>
        <a href="#" className="menu-item">
          Students
        </a>
        <a href="#" className="menu-item">
          Offers
        </a>
        <a href="#" className="menu-item">
          Contacts
        </a>
      </nav>
      <div className="logout">
        <button onClick={logout} className="logout-btn">
          LogOut
        </button>
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: rgb(57, 37, 62); /* Gray-800 */
  color: #f6d6d6; /* Custom color */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo {
    text-align: center;
    padding: 1rem;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .menu-item {
    color: #f6d6d6;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
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
    background: linear-gradient(
      to right,
      #a78bfa,
      #f472b6
    ); /* Purple to pink */
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .logout-btn:hover {
    background: linear-gradient(
      to right,
      rgb(58, 79, 237),
      rgb(150, 27, 82)
    ); /* Darker purple to pink */
    transform: scale(1.05);
  }
`;
