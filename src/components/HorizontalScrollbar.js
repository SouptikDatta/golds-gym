import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const NextArrow = ({ onClick }) => (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <GrFormNext style={{ display: 'flex', width:'30px', height:'30px', color:'white', background: '#FF2625', borderRadius: '50%', zIndex: '1' }}
        size={25}/>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
    >
      <GrFormPrevious style={{ display: 'flex', width:'30px', height:'30px', color:'white', background: '#FF2625', borderRadius: '50%', zIndex: '1' }}
        size={25}/>
    </div>
  );

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
