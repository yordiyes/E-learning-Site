import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Nav className="bg-blue-50 text-F6D6D6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-4 items-center h-12">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold">
              <a href="http:/" className="hover:underline">
                Etech
              </a>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="#"
              className="hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Courses
            </a>
            <a
              href="#"
              className="hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Teachers
            </a>
            <a
              href="#"
              className="hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Offers
            </a>
            <a
              href="#"
              className="hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Contacts
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-2 items-center">
            <button
              className="signup-btn border-2 font-medium border-pink-300 text-blue-500 px-4 py-1 rounded hover:bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
            <button
              className="signin-btn border-2 font-medium border-none text-Tan px-4 py-1 rounded bg-gradient-to-r from-purple-400 to-pink-300 hover:text-gray-100 transition"
              onClick={() => navigate("/signin")}
            >
              Free Trial
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 text-base font-medium hover:bg-gray-200"
          >
            Courses
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 text-base font-medium hover:bg-gray-200"
          >
            Teachers
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 text-base font-medium hover:bg-gray-200"
          >
            Offers
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 text-base font-medium hover:bg-gray-200"
          >
            Contacts
          </a>
          <div className="flex flex-col space-y-2 p-4">
            <button
              className="signup-btn border-2 font-medium border-pink-300 text-blue-500 px-4 py-1 rounded hover:bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition"
              onClick={() => {
                navigate("/signup");
                setMobileMenuOpen(false);
              }}
            >
              Sign Up
            </button>
            <button
              className="signin-btn border-2 font-medium border-none text-Tan px-4 py-1 rounded bg-gradient-to-r from-purple-400 to-pink-300 hover:text-gray-100 transition"
              onClick={() => {
                navigate("/signin");
                setMobileMenuOpen(false);
              }}
            >
              Free Trial
            </button>
          </div>
        </MobileMenu>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  .signin-btn:hover {
    background: linear-gradient(to right, rgb(58, 79, 237), rgb(150, 27, 82));
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  .signup-btn:hover {
    transition: all 0.3s ease;
  }
`;

const MobileMenu = styled.div`
  background-color: #eff6ff; /* Tailwind's blue-50 */
  border-top: 1px solid #dbeafe; /* Tailwind's blue-200 */
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
