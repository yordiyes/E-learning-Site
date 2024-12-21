import styled from "styled-components";
import student2 from "../assets/student2.png";

export default function SignUp() {
  return (
    <Container>
      <div className="img-container">
        <img src={student2} className="stud-img" alt="" />
      </div>
      <div className="form-container">
        <div className="max-w-l mx-auto bg-white shadow-lg rounded-lg p-16 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign Up
          </h2>

          <form>
            <label
              htmlFor="name"
              className="block mb-4 text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              className=" w-full mb-4 bg-gray-100 border border-gray-100 "
              placeholder="Name"
              id="name"
            />
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
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="mb-4 w-full bg-gray-100 border border-gray-100"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm-password"
            />

            <input
              type="submit"
              value="Sign Up"
              className="w-full border-2 border-none text-Tan px-4 mx-2 py-1 rounded hover:bg-blue-500 bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition"
            />
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
`;
