import React from "react";
import Slider from "react-slick";
import "../assets/sass/components/_banner.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import BannerImage from "../assets/images/banner.png";

function Banner() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    arrows: true,
    infinite: true,
    autoplay: true,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="banner">
      <Slider
        {...settings}
        prevArrow={<IoIosArrowBack />}
        nextArrow={<IoIosArrowForward />}
      >
        <div className="w-100">
          <img className="w-100" src={BannerImage} alt="banner" />
        </div>
        <div className="w-100">
          <img className="w-100" src={BannerImage} alt="banner" />
        </div>
        <div className="w-100">
          <img className="w-100" src={BannerImage} alt="banner" />
        </div>
        <div className="w-100">
          <img className="w-100" src={BannerImage} alt="banner" />
        </div>
        <div className="w-100">
          <img className="w-100" src={BannerImage} alt="banner" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
