import styled from "styled-components";

export default function SignUp() {
  return (
    <Container>
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
          <input type="text" className=" w-full mb-4 bg-gray-100 border border-gray-100 " placeholder="Name" id="name" />
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

          <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: rgb(126, 167, 190);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
