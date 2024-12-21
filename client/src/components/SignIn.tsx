import styled from "styled-components";
import student3 from "../assets/student3.png";

export default function SignIn() {
  return (
    <Container>
      
      <div className="form-container">
        <div className="max-w-l mx-auto bg-white shadow-lg rounded-lg p-16 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign Up
          </h2>

          <form>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Email
            </label>
            <input
              type="email"
              className="mb-4 w-full bg-gray-100 border border-gray-100"
              name="email"
              id="email"
              placeholder="Email"
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-3 "
            >
              Password
            </label>
            <input
              type="password"
              className="mb-4 w-full bg-gray-100 border border-gray-100"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              type="submit"
              value="Sign In"
              className="w-full border-2 border-none text-Tan px-4 mx-2 py-1 rounded hover:bg-blue-500 bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition"
            />
          </form>
        </div>
      </div>
      <div className="img-container">
        <img src={student3} className="stud-img" alt="" />
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: linear-gradient(to left, rgb(249, 220, 247) 50%, white 50%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .stud-img {
    height: 90vh;
    width: 30vw;
  }
`;
