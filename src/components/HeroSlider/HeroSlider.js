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
    autoplaySpeed: 3000, // Adjust the autoplay speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide the next and previous arrows
  };
  return (
    <div className="over">
      <h2>Infinite Autoplay Slider</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://www.usnews.com/object/image/0000018a-3d19-dfa2-ab9f-bfdd163c0000/gettyimages-1355430861.jpg?update-time=1693242221902&size=responsive970"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://www.usnews.com/object/image/0000018a-3d19-dfa2-ab9f-bfdd163c0000/gettyimages-1355430861.jpg?update-time=1693242221902&size=responsive970"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://www.usnews.com/object/image/0000018a-3d19-dfa2-ab9f-bfdd163c0000/gettyimages-1355430861.jpg?update-time=1693242221902&size=responsive970"
            alt="Slide 3"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default HeroSlider;
