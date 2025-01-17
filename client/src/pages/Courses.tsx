import styled from "styled-components";
import pc from "../assets/pc.jpg";
// import pc2 from "../assets/pc2.jpg";
import pc3 from "../assets/pc3.jpg";
import me from "../assets/me.png"
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
          {[
            {
              id: 1,
              name: "Web Design & Development",
              image: pc,
              badge: "Web Design",
              rating: 4.9,
              classes: 25,
              students: 185,
              price: 560,
              author: {
                name: "J. Morgan",
                avatar: me,
              },
            },
            {
              id: 2,
              name: "UI/UX Design Fundamentals",
              image: pc,
              badge: "UI/UX Design",
              rating: 4.8,
              classes: 20,
              students: 150,
              price: 460,
              author: {
                name: "A. Smith",
                avatar: me,
              },
            },
            {
              id: 3,
              name: "React Development",
              image: pc3,
              badge: "React",
              rating: 4.7,
              classes: 30,
              students: 210,
              price: 760,
              author: {
                name: "C. Taylor",
                avatar:me,
              },
            },
          ].map((course) => (
            <div key={course.id} className="card">
              <img src={course.image} alt={course.name} />
              <div className="badge">{course.badge}</div>
              <div className="rating">
                <span>{course.rating}</span>
                <span>⭐</span>
              </div>
              <h1>{course.name}</h1>
              <p className="text-gray-500 text-sm flex justify-between my-2">
                <span className="mx-5"><i className='bx bx-book-open text-violet-500 mx-2 font-bold'></i>{course.classes} Classes</span>
                <span className="mx-5"><i className='bx bxs-user text-violet-500 mx-2 font-bold'></i>{course.students} Students</span>
              </p>
              <div className="card-footer">
                <span className="price">${course.price}.00</span>
                <div className="author">
                  <img src={course.author.avatar} alt={course.author.name} />
                  <span>{course.author.name}</span>
                </div>
              </div>
            </div>
          ))}
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
    margin-left: 170px;
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
    margin: 0 10px;
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
