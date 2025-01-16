import styled from "styled-components";
import pc from "../assets/pc.jpg";

export default function Courses() {
  return (
    <Container className="bg-gradient-to-r from-purple-500 to-pink-400">
      <div className="outer">
        <div className="inner-one px-20">
          <h1 className="text-4xl font-semibold text-fuchsia-200">
            Our Popular Couses
          </h1>
          <p className="font-semibold text-fuchsia-200 text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, <br />provident repellat ex cupiditate quisquam quo quod
            itaque adipisci et, <br /> unde, sequi fugit. Ad, libero amet dolore beatae
            eos distinctio velit.
          </p>
        </div>
        <div className="inner-two mt-10">
          <div className="card rounded-lg mx-5">
            <img
              src={pc}
              className="mx-9 rounded-lg mb-4"
              width="350"
              height="350"
              alt=""
            />
            <p>
              <span className="left-0">Web Design</span>{" "}
              <span className="right-0">4.3</span>
            </p>
            <h1 className="">Web Design & Development</h1>
            <p>
              <span>25 Classes</span> <span>185 Students</span>
            </p>
            <div className="card-in">
              <p>
                <span>$560</span>J.Morgan
              </p>
            </div>
          </div>

          <div className="card rounded-lg mx-5">
            <img
              src={pc}
              className="mx-9 rounded-lg mb-4"
              width="350"
              height="350"
              alt=""
            />
            <p>
              <span className="left-0">Web Design</span>{" "}
              <span className="right-0">4.3</span>
            </p>
            <h1 className="">Web Design & Development</h1>
            <p>
              <span>25 Classes</span> <span>185 Students</span>
            </p>
            <div className="card-in">
              <p>
                <span>$560</span>J.Morgan
              </p>
            </div>
          </div>

          <div className="card rounded-lg mx-5">
            <img
              src={pc}
              className="mx-9 rounded-lg mb-4"
              width="350"
              height="350"
              alt=""
            />
            <p>
              <span className="left-0">Web Design</span>{" "}
              <span className="right-0">4.3</span>
            </p>
            <h1 className="">Web Design & Development</h1>
            <p>
              <span>25 Classes</span> <span>185 Students</span>
            </p>
            <div className="card-in">
              <p>
                <span>$560</span>J.Morgan
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // width: 700px;
  }
  .inner-two {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    background: #ffeeff;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 380px;
  }
`;
