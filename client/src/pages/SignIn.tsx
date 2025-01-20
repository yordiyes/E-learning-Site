import { useState } from "react";
import styled from "styled-components";
import student3 from "../assets/student3.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // Handle form-based sign-in
  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;

      if (!token || !user) {
        setError("Authentication failed. Please try again.");
        return;
      }

      // Store token and role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.role);

      console.log("User signed in successfully:", user);

      // Navigate based on user role
      if (user.role === "student") {
        navigate("/student-dashboard");
      } else if (user.role === "teacher") {
        navigate("/teacher-dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response);
        setError(
          err.response?.data?.message || "Sign-in failed. Please try again."
        );
      } else {
        console.error("General error:", err);
        setError("Sign-in failed. Please try again.");
      }
    }
  };

  // Handle Google sign-in
  const handleGoogleLogin = async () => {
    try {
      // Redirect to Google authentication endpoint
      const googleAuthUrl = "http://localhost:5000/auth/google";
      window.location.href = googleAuthUrl;
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <Container>
      <div className="form-container">
        <div className="form-box">
          <h2>Sign In</h2>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSignIn}>
            <label htmlFor="email_signin">Email</label>
            <input
              type="email"
              id="email_signin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label htmlFor="password_signin">Password</label>
            <input
              type="password"
              id="password_signin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="social-login">
          <p className="mb-2 mt-4">Sign in with</p>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="social-btn google-btn"
          >
            Google
          </button>
        </div>
      </div>
      <div className="img-container">
        <img src={student3} className="stud-img" alt="Student Illustration" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(to left, rgb(253 242 248 ) 50%, white 50%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .stud-img {
    height: 90vh;
    width: 30vw;
  }

  .form-box {
    max-width: 400px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .error {
    color: red;
    margin-bottom: 10px;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #f9f9f9;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #6c63ff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #5a52e1;
  }

  &:disabled {
    background-color: #b2a9ff;
    cursor: not-allowed;
  }

  .social-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 200px;

    .social-btn {
      padding: 12px;
      margin: 10px 0;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      text-align: center;

      &:hover {
        opacity: 0.8;
      }
    }

    .google-btn {
      background-color: #4285f4;
      color: white;
    }
  }
`;
