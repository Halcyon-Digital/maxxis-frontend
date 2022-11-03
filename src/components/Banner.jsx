import React from "react";
import Slider from "react-slick";
import "../assets/sass/components/_banner.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useQuery } from "react-query";
import { allBanner } from "../api/fetchData";

function Banner() {
  const { data, isLoading } = useQuery("banner", () => allBanner());

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    arrows: true,
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
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="banner">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Slider
          {...settings}
          prevArrow={<IoIosArrowBack />}
          nextArrow={<IoIosArrowForward />}
        >
          {data.map((banner) => (
            <div className="w-100">
              <LazyLoadImage
                className="w-100"
                src={`${process.env.REACT_APP_PROXY}/files/${banner.image}`}
                alt="banner"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Banner;
