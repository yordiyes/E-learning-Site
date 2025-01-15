import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  function logout() {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");

    navigate("/");
  }
  return (
    <Nav className="bg-gray-800 text-F6D6D6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-8 items-center h-12">
          <div className="flex-shrink-0">
            <h1 className="text-2xl text-3xl py-7 font-bold">
              <a href="http:/"></a>Etech
            </h1>
          </div>

          <div className="md-flex">
            <a
              href=""
              className="hover:bg-white-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Courses
            </a>
            <a
              href=""
              className="hover:bg-white-700 px-3 py-2 rounded-md text-l font-medium"
            >
              Students
            </a>
            <a
              href=""
              className="hover:bg-white-700 px-3 py-2 rounded-md text-l font-medium"
            >
              Offers
            </a>
            <a
              href=""
              className="hover:bg-white-700 px-3 py-2 rounded-md text-l font-medium"
            >
              Contacts
            </a>
          </div>
          <div className="md-flex">
            <button
              onClick={logout}
              className="border-2 border-none text-Tan px-4 mx-2 py-1 rounded hover:bg-blue-500 bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition"
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: rgb(249, 220, 247);
`;
