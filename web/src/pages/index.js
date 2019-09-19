// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import Btn from 'components/library/Btn';
import { Icon } from 'components/library/Icons';
import HeroContainer from 'components/library/Hero/HeroContainer';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Sections
import QuestionsCallout from 'sections/QuestionsCallout';

// Styles
import { SliderContainer, Arrow } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const ThemeProps = {
  BgColor: Theme.Color.Sunset,
  PrimaryColor: Theme.Color.White,
  SecondaryColor: Theme.Color.Primary,
  TertiaryColor: Theme.Color.Primary,
};

const HeroProps = {
  bg: '',
  color: 'White',
  textAlign: 'center',
};

// Render Page
const HomePage = () => (
  <Layout {...ThemeProps}>
    <HeroContainer {...HeroProps}>
      <SliderContainer
        textAlign="left"
        width={[1, 1, 7 / 10]}
        pl={[0, 0, 2, 6, 9]}
        pb={[2, 2, 0, 0]}
      >
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={9}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <Text as="h2">
                People are natural engineers. We help kids realize it.
              </Text>
            </Slide>
            <Slide index={1}>
              <Text as="h2">
                People are natural engineers. We help kids realize it.
              </Text>
            </Slide>
            <Slide index={2}>
              <Text as="h2">
                People are natural engineers. We help kids realize it.
              </Text>
            </Slide>
          </Slider>
          <ButtonBack>
            <Arrow>
              <Icon Name="NextArrow" />
            </Arrow>
          </ButtonBack>
          <ButtonNext>
            <Arrow className="next-slide">
              <Icon Name="NextArrow" />
            </Arrow>
          </ButtonNext>
        </CarouselProvider>
      </SliderContainer>
    </HeroContainer>
  </Layout>
);

export default HomePage;

//////////////////////////////////////////////////////////////////////
// End Component
