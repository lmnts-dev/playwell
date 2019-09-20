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

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Styles
import { SliderContainer, SliderArrow, Actions, HeroBtn } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HeroProps = {
  bg: '',
  color: 'White',
  textAlign: 'center',
};

// Render Page
const HomeHero = ({ bgColor, textColor, slides }) => {
  return (
    <HeroContainer {...HeroProps}>
      <SliderContainer width={[1, 1, 1, 1, 7 / 10]} pl={[0, 0, 2, 6, 9]}>
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={3}
          totalSlides={3}
        >
          <Slider>
            {slides.map(slide => (
              <Slide index={slide.index} key={slide.message}>
                <Text as="h2">{slide.message}</Text>
                <Text as="span" fontSize={3} color="Primary" pb={2}>
                  {slide.detail}
                </Text>
              </Slide>
            ))}
          </Slider>
          <ButtonBack>
            <SliderArrow>
              <Icon Name="carat" />
            </SliderArrow>
          </ButtonBack>
          <ButtonNext>
            <SliderArrow className="next-slide">
              <Icon Name="carat" />
            </SliderArrow>
          </ButtonNext>
        </CarouselProvider>
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
