import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import instructor from "../assets/instructor.png";

export default function Coureses() {
  const navigate = useNavigate();
  return (
    <Container className="bg-blue-50">
      <div className="inner-container">
        <div className="inner">
          <h2 className="text-3xl font-bold my-3">
            If You Are A Certified Teacher <br />
            Then <span className="text-purple-400">Become An Instructor</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            magnam officia blanditiis eum reprehenderit totam expedita qui,
            aspernatur ad eius commodi repudiandae enim sit nihil asperiores
            mollitia animi dolore modi dicta nobis sequi delectus fuga deleniti
            in? Mollitia iste culpa sit perferendis iusto repudiandae porro,
            delectus modi dolores doloribus, libero hic quae dolor repellat.
          </p>
          <h2 className="text-3xl font-bold mt-3 mb-3">Enjoy Many Perks</h2>
          <div className="flex">
            <p className="mr-10"><i className='bx bxs-circle text-xs text-purple-400 mr-3'></i>Global Impact</p>
            <p className="ml-20"><i className='bx bxs-circle text-xs text-purple-400 mr-3'></i>Creative Freedom</p>
          </div>
          <div className="flex ">
            <p className="mr-3"><i className='bx bxs-circle text-xs text-purple-400 mr-3'></i>Flexible Schedule</p>
            <p className="ml-20"><i className='bx bxs-circle text-xs text-purple-400 mr-3'></i>Monitize Youe Expertise</p>
          </div>
          <div className="flex">
            <p className="mr-0"><i className='bx bxs-circle text-xs text-purple-400 mr-3'></i>Innovative Teaching Tools</p>
            <p className="mx-9"><i className='bx bxs-circle text-xs text-purple-400 mr-3'></i>Professional Development</p>
          </div>
          <div className="flex ">
            <p className="mr-0"><i className='bx bxs-circle text-xs text-purple-400 mr-3'></i>Recognition and Reaputation</p>
            <p className="mx-3"><i className='bx bxs-circle text-xs text-purple-400 mr-3'></i>Networking Opportunities</p>
          </div>
          <div className="md-flex">
            <button
              className="btn border-2 font-bold border-none text-lg text-slate-50 px-4 mx-1 my-4 py-2 rounded hover:bg-blue-500 bg-gradient-to-r from-purple-400 to-pink-300 hover:text-white transition"
              onClick={() => navigate("/signup")}
            >
              Become an Instructor
            </button>
          </div>
        </div>
        <div className="inner">
          <img className="img2" src={instructor} alt="search" />
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
  .img2 {
    width: 450px;
    height: 480px;
  }
  .inner-container {
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: center;
    width: 100%;
  }
  .inner {
    min-height: 52vh;
    margin: 20px 20px 20px 50px;
    align-items: center;
    justify-content: center;
    max-width: 600px;
  }
  .btn:hover{
    background: linear-gradient(
      to right,
      rgb(81, 95, 203),
      rgb(189, 92, 136)
    ); /* Darker purple to pink */
    transform: scale(1.05);
  }
`;
