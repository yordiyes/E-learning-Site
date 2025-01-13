import styled from "styled-components";
import student from "../assets/student.png";

export default function Show() {
  return (
    <Container>
      <div className="container items-center flex ">
        <div className="w-full lg:w-1/2 m-10">
          <h1 className="text-5xl pt-5 px-5 font-bold lg:text-6xl sm:text-4xl">
            Develop your skills <br /> in a new <br /> and unique way
          </h1>
          <p className="mt-4 py-5 px-5 text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            praesentium error tenetur quasi quas sed optio, eligendi provident
            perspiciatis magnam dolore repellat, numquam dolores vitae,
            dignissimos nisi dolor illo minus similique quos expedita facilis.
            Accusantium, delectus assumenda.
          </p>
          <button className="border-2 border-none text-Tan px-4 mx-12 py-2 text-2xl rounded hover:bg-blue-500 bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition">Enroll Now</button>
          <a href="#" className="underline">What's E-learning?</a>
        </div>

        <img src={student} className="stud-img" alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(249, 220, 247);
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    justify-content: space-around;
    .stud-img {
      height: 80vh;
      width: 30vw;
    }
  }
`;
