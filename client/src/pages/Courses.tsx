import styled from "styled-components";
import pc from "../assets/pc.jpg";

export default function Courses() {
  return (
    <Container className="bg-gradient-to-r from-purple-500 to-pink-400">
      <div className="outer">
        <div className="inner-one px-20">
          <h1 className="text-4xl font-semibold text-fuchsia-200">
            Our Popular Courses
          </h1>
          <p className="font-semibold text-fuchsia-200 text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, provident repellat ex cupiditate quisquam quo quod
            itaque adipisci et, unde, sequi fugit. Ad, libero amet dolore beatae
            eos distinctio velit.
          </p>
        </div>
        <div className="inner-two mt-10">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="card">
              <img src={pc} alt="Web Design & Development" />
              <div className="badge">Web Design</div>
              <div className="rating">
                <span>4.{9 - index}</span>
                <span>⭐</span>
              </div>
              <h1>Web Design & Development</h1>
              <p className="text-gray-500 text-sm flex justify-between my-2">
                <span className="mx-8">{25 - index * 10} Classes</span>
                <span className="mx-10">{185 - index * 50} Students</span>
              </p>
              <div className="card-footer">
                <span className="price">${560 + index * 100}.00</span>
                <div className="author">
                  <img src="https://via.placeholder.com/30" alt="J. Morgan" />
                  <span>J. Morgan</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="outer">
        <div className="inner-one px-20">
          <h1 className="text-4xl font-semibold text-fuchsia-200">
            Our Popular Couses
          </h1>
          <p className="font-semibold text-fuchsia-200 text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, <br />
            provident repellat ex cupiditate quisquam quo quod itaque adipisci
            et, <br /> unde, sequi fugit. Ad, libero amet dolore beatae eos
            distinctio velit.
          </p>
        </div>
        <div className="inner-two mt-10">
          <div className="card rounded-lg mx-5 shadow-lg bg-white p-5 relative">
            <img
              src={pc}
              className="rounded-lg mb-4 w-full"
              alt="Web Design & Development"
            />
            <div className="badge absolute top-2 left-2 bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
              Web Design
            </div>
            <div className="rating absolute top-2 right-2 bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center gap-1">
              <span>4.9</span>
              <span>⭐</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              Web Design & Development
            </h1>
            <p className="text-gray-500 text-sm flex justify-between my-2">
              <span>25 Classes</span>
              <span>185 Students</span>
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-purple-800">
                $560.00
              </span>
              <div className="flex items-center ">
                <img
                  src="https://via.placeholder.com/30"
                  alt="J. Morgan"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2 text-sm text-gray-800 font-medium">
                  J. Morgan
                </span>
              </div>
            </div>
          </div>

          <div className="card rounded-lg mx-5 shadow-lg bg-white p-5 relative">
            <img
              src={pc}
              className="rounded-lg mb-4 w-full"
              alt="Web Design & Development"
            />
            <div className="badge absolute top-2 left-2 bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
              Web Design
            </div>
            <div className="rating absolute top-2 right-2 bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center gap-1">
              <span>4.7</span>
              <span>⭐</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              Web Design & Development
            </h1>
            <p className="text-gray-500 text-sm flex justify-between my-2">
              <span>15 Classes</span>
              <span>95 Students</span>
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-purple-800">
                $820.00
              </span>
              <div className="flex items-center ">
                <img
                  src="https://via.placeholder.com/30"
                  alt="J. Morgan"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2 text-sm text-gray-800 font-medium">
                  J. Morgan
                </span>
              </div>
            </div>
          </div>

          <div className="card rounded-lg mx-5 shadow-lg bg-white p-5 relative">
            <img
              src={pc}
              className="rounded-lg mb-4 w-full"
              alt="Web Design & Development"
            />
            <div className="badge absolute top-2 left-2 bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
              Web Design
            </div>
            <div className="rating absolute top-2 right-2 bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center gap-1">
              <span>4.6</span>
              <span>⭐</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              Web Design & Development
            </h1>
            <p className="text-gray-500 text-sm flex justify-between my-2">
              <span>33 Classes</span>
              <span>200 Students</span>
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-purple-800">
                $760.00
              </span>
              <div className="flex items-center ">
                <img
                  src="https://via.placeholder.com/30"
                  alt="J. Morgan"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2 text-sm text-gray-800 font-medium">
                  J. Morgan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  );
}
const Container = styled.div`
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  .inner-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 800px;
    padding: 0 20px;
    margin-left: 100px;
  }

  .inner-two {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .card {
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    max-width: 350px;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: #e0e7ff;
      color: #4338ca;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 20px;
    }

    .rating {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #fef3c7;
      color: #f59e0b;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    h1 {
      font-size: 1.25rem;
      font-weight: bold;
      color: #1f2937;
      margin: 15px 0;
    }

    p {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 5px 0;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 15px;

      .price {
        font-size: 1.2rem;
        font-weight: bold;
        color: #7c3aed;
      }

      .author {
        display: flex;
        align-items: center;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        span {
          font-size: 0.9rem;
          margin-left: 10px;
          color: #4b5563;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .inner-one h1 {
      font-size: 1.5rem;
    }

    .inner-one p {
      font-size: 0.9rem;
    }

    .card {
      max-width: 90%;
    }
  }
`;
