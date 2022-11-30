import React, { useEffect } from 'react';
import Slider from 'react-slick';
import '../assets/sass/components/_banner.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useQuery } from 'react-query';
import { allBanner } from '../api/fetchData';

function Banner() {
  const { data, isLoading } = useQuery('banner', () => allBanner());

  const settings = {
    dots: true,
    infinite: true,
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
          {data?.map((banner) => (
            <div key={banner._id} className="w-100">
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

/* 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { data, multiData } from './data';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: 'blue', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: 'blue', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: '30px' }} className='carousel'>
      <h1>Basic carousel</h1>
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        className='multi__image'
        src={item}
        alt=''
        style={{
          width: '100%',
          height: '170px',
          objectFit: 'contain',
          marginBottom: '10px',
        }}
      />
      <p style={{ fontSize: '14px', padding: '5px 0' }}>TOP TRNDING TVs</p>
      <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
        From ₹ 7,000
      </p>
      <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray' }}>
        Up To ₹ 5,000 Off on HDFC
      </p>
    </div>
  );
};

export default MultiItemCarousel;
 */
