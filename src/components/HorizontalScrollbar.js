import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <div
      className="slick-arrow slick-next"
      style={{ display: 'block', background: '#FF2625', borderRadius: '50%', padding: '10px', right: '10px', zIndex: '1' }}
      onClick={onClick}
    />
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="slick-arrow slick-prev"
      style={{ display: 'block', background: '#FF2625', borderRadius: '50%', padding: '10px', left: '10px', zIndex: '1' }}
      onClick={onClick}
    />
  );

  // Slick slider settings
  const settings = {
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <Slider {...settings}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 20px"
        >
          {bodyParts ? (
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </Slider>
  );
};

export default HorizontalScrollbar;
