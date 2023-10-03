import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

const HeroSlider = ({ slides }) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   autoplay: true,
  //   fade: true,
  //   autoplaySpeed: 9000,
  //   pauseOnHover: false,
  //   beforeChange: (prevSlide, nextSlide) => setCurrentSlide(nextSlide),
  // };

  const settings = {
    dots: false, // Hide the dots (pagination)
    infinite: true,
    speed: 1000, // Adjust the speed as needed
    autoplay: true,
    autoplaySpeed: 6000, // Adjust the autoplay speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false, // Hide the next and previous arrows
  };
  return (
    <div className="over">
      <Slider {...settings}>
        <div className="slide1 relative min-h-[100vh]">
          <div className="overlay"></div>
        </div>
        <div className="slide2 relative min-h-[100vh]">
          <div className="overlay"></div>
        </div>
        <div className="slide3 relative min-h-[100vh]">
          <div className="overlay"></div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default HeroSlider;
