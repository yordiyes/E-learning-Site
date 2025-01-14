import styled from "styled-components";
import search from "../assets/education.png";

export default function Coureses() {
  return (
    <Container>
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
          <button className="search-btn border-2 border-none text-Tan px-4 mx-2 py-1 rounded hover:bg-blue-500 bg-gradient-to-r from-purple-400 to-pink-300 hover:text-black transition">
            Search
          </button>
        </div>
      </div>
      <div className="third-container">
        <div className="inner">
          <img className="img2" src={search} alt="search" />
        </div>
        <div className="inner">
          <h1 className="text-2xl font-bold my-7">
            <span className="text-blue-600">Benefits</span> From Our Online
            Platform
          </h1>
          <div className="in-outer">
            <i className="bx bxs-graduation mx-7 text-6xl"></i>
            <div className="in-inner">
              <h2 className="my-1 text-xl font-bold">Online Degrees</h2>
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
  background-color: rgb(249, 220, 237);
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
    font-weight: 500;
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
    color: #eeddff;
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
