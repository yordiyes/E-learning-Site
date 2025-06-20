import styled from "styled-components";
import student from "../assets/student.png";

export default function Hero() {
  return (
    <Container className="bg-blue-50">
      <div className="container items-center flex flex-col lg:flex-row px-6 lg:px-0">
        <div className="w-full lg:w-1/2 m-4 lg:m-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl pt-5 font-bold leading-tight">
            Develop your skills <br /> in a new <br /> and unique way
          </h1>
          <p className="mt-4 py-5 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            praesentium error tenetur quasi quas sed optio, eligendi provident
            perspiciatis magnam dolore repellat, numquam dolores vitae,
            dignissimos nisi dolor illo minus similique quos expedita facilis.
            Accusantium, delectus assumenda.
          </p>
          <button className="btn border-2 border-none text-Tan font-medium px-6 py-2 text-xl sm:text-2xl rounded bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition mx-auto lg:mx-12">
            Enroll Now
          </button>
          <div className="mt-6">
            <a
              href="https://youtu.be/ZPs3URGs0KQ"
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center justify-center font-medium underline text-fuchsia-500 hover:text-fuchsia-700"
            >
              <i className="bx bx-play-circle text-xl mr-1"></i>
              What's E-learning?
            </a>
          </div>
        </div>

        <img
          src={student}
          className="stud-img mt-8 lg:mt-0 h-80 lg:h-auto w-auto max-w-lg"
          alt="Student illustration"
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .stud-img {
    height: 50vh;
    width: auto;
    max-width: 90vw;
    object-fit: contain;
  }

  .link:hover {
    color: rgb(116, 84, 116);
  }

  .btn:hover {
    background: linear-gradient(to right, rgb(58, 79, 237), rgb(150, 27, 82));
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;
