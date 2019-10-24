// HomeCommunity.js:
// Homepage community reviews

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';
import Slider from 'react-slick';
import ImgMatch from 'components/core/ImgMatch';

// Styles
import { SliderContainer } from './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const settings = {
  centerMode: true,
  infinite: true,
  dots: true,
  arrows: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  variableWidth: true,
  slidesToScroll: 1,
  className: 'center',
  lazyLoad: 'progressive',
  adaptiveHeight: true,
  useTransform: false,
};

// Render Page
const HomeCommunity = ({ slides }) => {
  return (
      <SliderContainer>
        <Slider {...settings}>
          {slides.map(slide => (
            <div className="item" key={slide.index}>
              <a className="image" href={slide.link} aria-label="View Project">
                <ImgMatch src="boy-4.jpg"/>
              </a>
              <a href={slide.link} aria-label="View Project" className="text">
                <ul>
                  {slide.tags.map(tags => (
                    <li key={tags.id}>{tags.tag}</li>
                  ))}
                </ul>
                <div className="h6">{slide.header}</div>
                <p>{slide.detail}</p>
              </a>
            </div>
          ))}
        </Slider>
        <Btn
          External
          Label="Our Community"
          BgColor={Theme.Color.Primary}
          TextColor={Theme.Color.White}
        />
      </SliderContainer>
  );
};

export default HomeCommunity;

//////////////////////////////////////////////////////////////////////
// End Component
