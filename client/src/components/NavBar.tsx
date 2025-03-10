import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Nav className=" bg-blue-50 text-F6D6D6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-8 items-center h-12">
          <div className="flex-shrink-0">
            <h1 className="text-2xl text-3xl py-7 font-bold">
              <a href="http:/">Etech</a>
            </h1>
          </div>

          <div className="md-flex">
            <a
              href="#"
              className="hover:bg-white-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Courses
            </a>
            <a
              href="#"
              className="hover:bg-white-700 px-3 py-2 rounded-md text-l font-medium"
            >
              Teachers
            </a>
            <a
              href="#"
              className="hover:bg-white-700 px-3 py-2 rounded-md text-l font-medium"
            >
              Offers
            </a>
            <a
              href="#"
              className="hover:bg-white-700 px-3 py-2 rounded-md text-l font-medium"
            >
              Contacts
            </a>
          </div>
          <div className="md-flex">
            <button
              className="signup-btn border-2 font-medium border-pink-300 text-blue-500 px-4 mx-2 py-1 rounded hover:bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
            <button
              className="signin-btn border-2 font-medium border-none text-Tan px-4 mx-2 py-1 rounded bg-gradient-to-r from-purple-400 to-pink-300 hover:text-gray-100 transition"
              onClick={() => navigate("/signin")}
            >
              Free Trial
            </button>
          </div>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  // background-color: rgb(249, 220, 247);
  .signin-btn:hover {
    background: linear-gradient(
      to right,
      rgb(58, 79, 237),
      rgb(150, 27, 82)
    ); /* Darker purple to pink */
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  .signup-btn:hover {
    transition: all 0.3s ease;
  }
`;
