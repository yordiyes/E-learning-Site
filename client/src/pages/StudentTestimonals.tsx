import { useState } from "react";
import styled from "styled-components";
import me from "../assets/me.png"; 
import me1 from "../assets/me1.jpg"; 
import me2 from "../assets/me2.jpg"; 
import me3 from "../assets/me3.jpg"; 
import me4 from "../assets/me4.jpg"; 


export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: me,
      name: "Alexa Rodriguez",
      job: "Web Developer",
      rating: 5,
      description:
        "Enrolling in courses at this eLearning platform was a game-changer for me.What a fantastic experience! The courses provided clear steps, Absolutely transformative experience!",
    },
    {
      image: me4,
      name: "Emily Chen",
      job: "UI/UX Designer",
      rating: 4,
      description:
        "Exceptional courses! The practical insights and flexible learning structure have been instrumental in my professional growth.",
    },
    {
      image: me2,
      name: "James Johnson",
      job: "Web Developer",
      rating: 3,
      description:
        "Highly recommend! The personalized feedback and real-world application in the courses have elevated my understanding.",
    },
    {
      image: me1,
      name: "Sophia Lee",
      job: "Product Manager",
      rating: 2,
      description:
        "This platform is a fantastic resource for anyone looking to enhance their skills. The course content was detailed and easy to follow.",
    },
    {
      image: me4,
      name: "David Kim",
      job: "Software Engineer",
      rating: 4,
      description:
        "The hands-on projects were invaluable! I feel much more confident in my abilities after completing the courses here.",
    },
    {
      image: me3,
      name: "Lily Martinez",
      job: "Data Scientist",
      rating: 5,
      description:
        "The level of detail and real-world applications in the courses helped me apply what I learned directly to my job. Highly recommend!",
    },
    {
      image: me2,
      name: "Ethan Walker",
      job: "Frontend Developer",
      rating: 5,
      description:
        "I was able to pick up new tools and skills that have significantly improved my workflow. The support from instructors was great.",
    },
    {
      image: me1,
      name: "Olivia Wilson",
      job: "Digital Marketing Specialist",
      rating: 5,
      description:
        "What a fantastic experience! The courses provided clear steps, and I was able to integrate what I learned into my daily work right away.",
    },
    {
      image: me2,
      name: "Aiden Brown",
      job: "Backend Developer",
      rating: 5,
      description:
        "I learned so much about advanced development techniques, and the courses were engaging and filled with practical examples.",
    },
  ];

  const cardsPerPage = 2;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to render the rating stars
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <span>
        {[...Array(fullStars)].map((_, index) => (
          <i key={`full-${index}`} className="fa fa-star checked text-orange-300 font-md text-sm"></i>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={`empty-${index}`} className="fa fa-star-o text-orange-300"></i>
        ))}
      </span>
    );
  };

  return (
    <Container className="bg-gradient-to-r from-purple-500 to-pink-400">
      <div className="flex flex-col justify-between items-center w-full max-w-8xl mx-auto">
        <div className="px-20 text-center mb-4">
          <h1 className="text-4xl font-semibold text-fuchsia-200">
            Student's Testimonials
          </h1>
          <p className="font-semibold text-fuchsia-200 text-wrap max-w-lg">
            Here's what our students have to say about their transformative
            learning experience: Real stories, real growth. Discover firsthand
            the impact our courses have had on their lives.
          </p>
        </div>
        <div className="relative w-full max-w-7xl mt-8 mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerPage}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/3 px-3 mb-6"
              >
                <div className="w-full h-auto bg-gray-100 p-3 rounded-lg shadow-md text-left items-start">
                  <div className="flex">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col ml-2">
                      <h3 className="text-xl font-semibold mb-2">
                        {card.name}
                      </h3>
                      <p>{card.job}</p>
                      <p>{renderRating(card.rating)}</p>
                    </div>
                  </div>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full max-w-4xl mx-auto mt-2">
          <button
            className="bg-transparent border-0 mx-3 rounded-full w-10 h-10 flex items-center justify-center text-xl text-white font-bold shadow-lg "
            onClick={handlePrev}
          >
            <i className="fa-solid fa-less-than"></i>
          </button>
          <span className="text-lg font-semibold text-fuchsia-200 mt-2">
            {currentIndex + 1}/{totalPages}
          </span>
          <button
            className="bg-transparent border-0 mx-3 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-white shadow-lg"
            onClick={handleNext}
          >
            <i className="fa-solid fa-greater-than"></i>
          </button>
        </div>  
      </div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
