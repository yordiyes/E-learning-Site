import styled from "styled-components";
import search from "../assets/education.png";

export default function Coureses() {
  return (
    <Container className="bg-blue-50">
      <div className="second-cont">
        <h1 className="text-2xl font-bold">Search Courses</h1>
        <div className="search-container">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for over 50+ courses"
            className="search-input"
          />
          <button className="search-btn border-2 border-none text-Tan px-4 mx-2 py-1 
          rounded hover:bg-blue-500 bg-gradient-to-r from-purple-400 to-pink-300  transition">
            Search
          </button>
        </div>
      </div>
      <div className="third-container">
        <div className="inner">
          <img className="img2" src={search} alt="search" />
        </div>
        <div className="inner">
          <h1 className="text-3xl font-bold my-7">
            <span className="text-fuchsia-500">Benefits</span> From Our Online
            Learning
          </h1>
          <div className="in-outer">
            <i className=" bx bxs-graduation mx-7 text-6xl text-purple-700"></i>
            <div className="in-inner">
              <h2 className="my-1 text-xl font-bold">Online Degrees</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />At
                illum enim magni?
              </p>
            </div>
          </div>

          <div className="in-outer my-4">
            <i className="bx bx-book-open mx-7 text-6xl text-red-400"></i>
            <div className="in-inner">
              <h2 className="my-1 text-xl font-bold">Short Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />At
                illum enim magni?
              </p>
            </div>
          </div>

          <div className="in-outer">
            <i className="bx bxs-user-circle mx-7 text-6xl text-purple-700"></i>
            <div className="in-inner">
              <h2 className="my-1 text-xl font-bold">Training From Experts</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />At
                illum enim magni?
              </p>
            </div>
          </div>

          <div className="in-outer">
            <i className="bx bx-play-circle mx-7 text-6xl text-red-400"></i>
            <div className="in-inner">
              <h2 className="my-1 text-xl font-bold">1.5k+ Video Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />At
                illum enim magni?
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .second-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
  }

  .search-input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    border-radius: 5px;
    width: 380px;
    height: 45px;
  }
  .search-btn {
    font-size: 22px;
    font-weight: 500;
    color: white;
    width: 120px;
    height: 45px;
  }
  .search-btn:hover {
    background: linear-gradient(
      to right,
      rgb(58, 79, 237),
      rgb(150, 27, 82)
    ); /* Darker purple to pink */
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  .img2 {
    width: 450px;
    height: 450px;
  }
  .third-container {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    width: 100%;
  }
  .inner {
    min-height: 52vh;
    margin: 20px 50px;
    align-items: center;
    justify-content: center;
  }
  .in-outer {
    display: flex;
    text-align: left;
  }
  .in-inner {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`;
