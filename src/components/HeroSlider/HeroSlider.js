import React, { useState } from "react";
import Slider from "react-slick";
import "animate.css";

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    autoplaySpeed: 9000,
    pauseOnHover: false,
    beforeChange: (prevSlide, nextSlide) => setCurrentSlide(nextSlide),
  };

  return (
    <>
      <Slider {...settings}>
        <div
          className={`slide slide1 min-h-[60vh] lg:min-h-[80vh] ${
            currentSlide === 0 ? "active" : ""
          }`}
        >
          <div className="overlay"></div>
          <div className="content">
            <h4
              className={`${
                currentSlide === 0 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              } text-xl md:text-2xl font-semibold mb-4 text-[#ff683f]`}
            >
              Welcome to Russell Global Consultancy!
            </h4>
            <h2
              className={`${
                currentSlide === 0 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              } text-3xl md:text-5xl font-bold mb-4`}
            >
              Make Your Dreams Come True with Us.
            </h2>
            <p
              className={`${
                currentSlide === 0 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              }`}
            >
              Russell Global Consultancy is one of the best and leading
              education consultancy firms in Dhaka, Bangladesh.
            </p>
          </div>
        </div>
        <div
          className={`slide slide2 min-h-[60vh] lg:min-h-[80vh] ${
            currentSlide === 1 ? "active" : ""
          }`}
        >
          <div className="overlay"></div>
          <div className="content">
            <h4
              className={`${
                currentSlide === 1 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              } text-xl md:text-2xl font-semibold mb-4 text-[#ff683f]`}
            >
              Study In
            </h4>
            <h2
              className={`${
                currentSlide === 1 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              } text-3xl md:text-5xl font-bold mb-4`}
            >
              Australia . New Zealand . UK . Europe . China
            </h2>
            <p
              className={`${
                currentSlide === 1 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              }`}
            >
              Process your application with the most dependable and successful
              consultant.
            </p>
          </div>
        </div>
        <div
          className={`slide slide3 min-h-[60vh] lg:min-h-[80vh] ${
            currentSlide === 2 ? "active" : ""
          }`}
        >
          <div className="overlay"></div>
          <div className="content flex flex-col justify-center items-center">
            <h4
              className={`${
                currentSlide === 2 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              } text-xl md:text-2xl font-semibold mb-4 text-[#ff683f] mt-[40px] md:mt-0`}
            >
              Global workforce solutions provider to multiple industries.
            </h4>
            <h2
              className={`${
                currentSlide === 2 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              } text-2xl md:text-5xl font-bold mb-4 lg:w-2/3`}
            >
              Presenting Skilled Overseas Manpower Recruitment Services
              Globally.
            </h2>
            <p
              className={`${
                currentSlide === 2 &&
                "animate__animated animate__fadeInUp animate__delay-0.3s"
              }`}
            >
              Process your Application through the most Reputed and Successful
              Consultancy Firm in Dhaka, Bangladesh.
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default HeroSlider;
