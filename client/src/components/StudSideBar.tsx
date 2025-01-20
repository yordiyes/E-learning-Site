import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  function logout() {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    }
  }
  
  const currentPath = window.location.pathname;
  const menuItems = [
    {
      icon: <i className="bx bxs-dashboard mr-2"></i>,
      name: "Dashboard",
      path: "/student-dashboard",
    },
    {
      icon: <i className="bx bx-book mr-2"></i>,
      name: "Courses",
      path: "/courses",
    },
    {
      icon: <i className="bx bxs-user-pin mr-2"></i>,
      name: "Teachers",
      path: "/teachers",
    },
    {
      icon: <i className="bx bx-question-mark mr-2"></i>,
      name: "Assessment",
      path: "/assessment",
    },
    {
      icon: <i className="bx bx-badge-check mr-2"></i>,
      name: "Resources Hub",
      path: "/resourcesHub",
    },
    {
      icon: <i className="bx bx-badge-check mr-2"></i>,
      name: "Progress",
      path: "/progress",
    },
    {
      icon: <i className="bx bxs-comment-detail mr-2"></i>,
      name: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <SidebarContainer>
      <div className="logo">
        <i className="bx bxs-graduation text-7xl"></i>
        <h1 className="text-3xl font-bold text-center my-6 mt-1">Etech</h1>
      </div>
      <nav className="menu">
        {menuItems.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className={`menu-item ${currentPath === item.path ? "active" : ""}`}
          >
            {item.icon}
            {item.name}
          </a>
        ))}
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
  background-color: rgb(76, 53, 159);
  color: #f6d6d6;
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
  .menu-item.active {
    background-color: rgba(
      255,
      255,
      255,
      0.2
    ); /* Example: Highlight the active link */
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

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 80px;
    .menu-item {
      font-size: 0.85rem;
    }
  }
`;
