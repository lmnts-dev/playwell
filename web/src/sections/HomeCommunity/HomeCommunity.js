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

// Styles
import { Community, SliderContainer } from './styles.scss';
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
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '20px',
  focusOnSelect: true,
  className: 'center',
  variableWidth: true,
};

// Render Page
const HomeCommunity = ({ slides }) => {
  return (
    <Community>
      <Text as="h3" color="Sunset">
        People Who've
        <br />
        Played Well With Us
      </Text>
      <SliderContainer width={1}>
        <Slider {...settings}>
          {slides.map(slide => (
            <Box index={slide.index} key={slide.message}>
              <Box mx={1}>
                <Box p={2} bg="White">
                  <Text as="p">{slide.message}</Text>
                  <Text
                    as="span"
                    fontSize={[1, 2, 3, 3]}
                    color="Primary"
                    pb={2}
                  >
                    {slide.detail}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </SliderContainer>
    </Community>
  );
};

export default HomeCommunity;

//////////////////////////////////////////////////////////////////////
// End Component
