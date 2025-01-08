import styled from "styled-components";
import student2 from "../assets/student2.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/signup`,
        payload
      );
      console.log(response.data);
      setIsLoading(false);
      // Handle successful signup (e.g., redirect or message)
    } catch (error) {
      setIsLoading(false);
      setError(error.response?.data || "Something went wrong");
    }
  };

  return (
    <Container>
      <div className="img-container">
        <img src={student2} className="stud-img" alt="Student" />
      </div>
      <div className="form-container">
        <div className="form-card">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="role" className="label">
                Role
              </label>
              <input
                type="text"
                name="role"
                id="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password" className="label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            {error && <p className="error-text">{error}</p>}

            <input
              type="submit"
              value={isLoading ? "Signing Up..." : "Sign Up"}
              disabled={isLoading}
              className="submit-btn"
            />
            
            <p className="text-center mt-4">
              If you already have an account{" "}
              <Link to="/signin" className="link">
                <button type="button" className="text-blue-500 font-medium">
                  Sign In
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(to right, rgb(249, 220, 247) 50%, white 50%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .stud-img {
    height: 80vh;
    width: 38vw;
  }

  .form-card {
    max-width: 400px;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }

  .input-group {
    margin-bottom: 1.5rem;
  }

  .label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 14px;
    color: #333;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f7f7f7;
    color: #333;
    transition: border-color 0.3s;

    &:focus {
      border-color: #6c63ff;
      outline: none;
    }
  }

  .error-text {
    color: red;
    font-size: 12px;
    text-align: center;
    margin-bottom: 1rem;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #6c63ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5a52e1;
    }

    &:disabled {
      background-color: #b2a9ff;
      cursor: not-allowed;
    }
  }

  .link {
    text-decoration: none;
  }
`;
