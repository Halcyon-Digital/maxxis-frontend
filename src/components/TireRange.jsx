import React from "react";
import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import Image1 from "../assets/images/tire-range1.png";
import Image2 from "../assets/images/tire-range2.png";
import Image3 from "../assets/images/tire-range3.png";
import Image4 from "../assets/images/tire-range4.png";
import "../assets/sass/components/_tire-range.scss";

function TireRange() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="tire__range">
      <Container>
        <div className="text-center">
          <h3 className="tire__title">
            <span>Tire</span> Range
          </h3>
        </div>
      </Container>
      <div className="slider__main">
        <Slider {...settings}>
          <HashLink to="/tire/motorcycle">
            <div className="tire__item">
              <img
                className="position-absolute w-100 h-100"
                src={Image1}
                alt="tire"
              />
              <div className="overlay position-absolute w-100 h-100" />
              <h3>Track</h3>
            </div>
          </HashLink>

          <HashLink to="/tire/motorcycle">
            <div className="tire__item">
              <img
                className="position-absolute w-100 h-100"
                src={Image2}
                alt="tire"
              />
              <div className="overlay position-absolute w-100 h-100" />
              <h3>BUS</h3>
            </div>
          </HashLink>

          <HashLink to="/tire/car">
            <div className="tire__item">
              <img
                className="position-absolute w-100 h-100"
                src={Image3}
                alt="tire"
              />
              <div className="overlay position-absolute w-100 h-100" />
              <h3>Passenger Car</h3>
            </div>
          </HashLink>

          <HashLink to="/tire/motorcycle">
            <div className="tire__item">
              <img
                className="position-absolute w-100 h-100"
                src={Image4}
                alt="tire"
              />
              <div className="overlay position-absolute w-100 h-100" />
              <h3>Motorcycle</h3>
            </div>
          </HashLink>

          <HashLink to="/tire/motorcycle">
            <div className="tire__item">
              <img
                className="position-absolute w-100 h-100"
                src={Image4}
                alt="tire"
              />
              <div className="overlay position-absolute w-100 h-100" />
              <h3>Motorcycle</h3>
            </div>
          </HashLink>
        </Slider>
      </div>
    </section>
  );
}

export default TireRange;
