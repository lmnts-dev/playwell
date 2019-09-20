// HomeHero.js:
// This is the course detail page data template.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import HeroContainer from 'components/library/Hero/HeroContainer';
import { LocationFilter } from './LocationFilter';

import Slider from 'react-slick';

// Styles
import { SliderContainer, Actions, HeroBtn } from './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HeroProps = {
  bg: '',
  color: 'White',
  textAlign: 'center',
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// Render Page
const HomeHero = ({ bgColor, textColor, slides }) => {
  return (
    <HeroContainer {...HeroProps}>
      <SliderContainer width={[1, 1, 1, 1, 6 / 10]} pl={[0, 0, 2, 6, 9]}>
        <Slider {...settings}>
          {slides.map(slide => (
            <Box index={slide.index} key={slide.message}>
              <Text as="h2">{slide.message}</Text>
              <Text as="span" fontSize={3} color="Primary" pb={2}>
                {slide.detail}
              </Text>
            </Box>
          ))}
        </Slider>
        <Actions width={[1, 1, 1, 7 / 10]} pl={[0, 0, 2, 6, 9]}>
          <HeroBtn bgColor={Theme.Color.Nova} textColor={Theme.Color.White}>
            Explore Courses
          </HeroBtn>
          <LocationFilter />
        </Actions>
      </SliderContainer>
    </HeroContainer>
  );
};

export default HomeHero;

//////////////////////////////////////////////////////////////////////
// End Component
