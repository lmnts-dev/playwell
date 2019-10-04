// HomeHero.js:
// Homepage hero with slick slider

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';

// Components
import ImgMatch from 'components/core/ImgMatch';
import { Box, Flex, Text } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';
import HeroContainer from 'components/library/Hero/HeroContainer';
import { LocationFilter } from './LocationFilter';

// Vendor
import Slider from 'react-slick';

// Styles
import {
  SliderContainer,
  SliderArrow,
  Actions,
  HeroBtn,
  Mask,
} from './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Decorator } from '../../pages/HomePage/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Slick slider custom arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <SliderArrow className="next-slide" onClick={onClick}>
      <Icon Name="carat" />
    </SliderArrow>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <SliderArrow className="prev-slide" onClick={onClick}>
      <Icon Name="carat" />
    </SliderArrow>
  );
}

// Props
const HeroProps = {
  bg: '',
  color: 'White',
  textAlign: 'center',
  withMask: true,
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '60px',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

// Render Page
const HomeHero = ({ bgColor, textColor, slides }) => {
  return (
    <HeroContainer {...HeroProps} fullWidth>
      <Decorator>
        <div className="decorator__hero decorator__hero--top">
          <ImgMatch src="cloud-big.png" AltText="Cloud" />
        </div>
        <div className="decorator__hero decorator__hero--waterfall">
          <ImgMatch src="waterfall.png" AltText="Cloud" />
        </div>
        <div className="decorator__hero decorator__hero--volcano">
          <ImgMatch src="volcano.png" AltText="Cloud" />
        </div>
      </Decorator>
      <SliderContainer
        width={[1, 1, 1, 1, 6 / 10]}
        pt={2}
        pl={Root.Grid.Indent.X}
      >
        <Slider {...settings}>
          {slides.map(slide => (
            <Box key={slide.index}>
              <Text as="h2">{slide.message}</Text>
              <Text className="h5" fontWeight={700} color="Deepsea">
                {slide.detail}
              </Text>
            </Box>
          ))}
        </Slider>
        <Actions width={[1, 1, 1, 7 / 10]}>
          <HeroBtn bgColor={Theme.Color.Nova} textColor={Theme.Color.White}>
            Explore Courses
          </HeroBtn>
          <LocationFilter />
        </Actions>
      </SliderContainer>
      <Decorator
        css={css`
          position: relative;
        `}
      >
        <div className="decorator__hero decorator__hero--left">
          <ImgMatch src="cloud-small.png" AltText="Cloud" />
        </div>
      </Decorator>
    </HeroContainer>
  );
};

export default HomeHero;

//////////////////////////////////////////////////////////////////////
// End Component
