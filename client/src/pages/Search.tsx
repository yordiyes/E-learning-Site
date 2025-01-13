import styled from "styled-components";

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
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(236, 232, 236);
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .second-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    height: 45px
  }
  .search-btn {
    font-size: 22px;
    font-weight: 500;
    color: white;
    width: 120px;
    height: 45px;
  }

`;
