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
  lazyLoad: 'progressive',
  adaptiveHeight: true,
  useTransform: false,
};

// Render Page
const HomeCommunity = ({ slides }) => {
  return (
    <Community pt={0} fullWidth>
      <SliderContainer width={1}>
        <Slider {...settings}>
          {slides.map(slide => (
            <Box key={slide.index}>
              <Box mx={1}>
                <Box className="slick-inner">
                  <div className="img-container">
                    <ImgMatch src="intro-smiles.jpg" AltText="Hero Alt" />
                  </div>
                  <Box p={2}>
                    <ul>
                      {slide.tags.map(tags => (
                        <li key={tags.id}>{tags.tag}</li>
                      ))}
                    </ul>
                    <span className="slide-header">{slide.header}</span>
                    <p className="slide-detail">{slide.detail}</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </SliderContainer>
      <Btn
        External
        Label="Our Community"
        BgColor={Theme.Color.Primary}
        TextColor={Theme.Color.White}
      />
    </Community>
  );
};

export default HomeCommunity;

//////////////////////////////////////////////////////////////////////
// End Component
