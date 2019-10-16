// HomeHero.js:
// Homepage hero with slick slider

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react';
import { Link } from 'gatsby';
import $ from 'jquery';

// Components
import ImgMatch from 'components/core/ImgMatch';
import { Box, Flex, Text } from 'components/library/Elements';

import Btn from 'components/library/Btn';
import { Icon } from 'components/library/Icons';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
// import HeroContainer from 'components/library/Hero/HeroContainer';
import { LocationFilter } from './LocationFilter';
import { BasicInner } from 'components/library/Section/BasicSection';

// Vendor
import Slider from 'react-slick';

// Styles
import {
  SliderArrow,
  Actions,
  HeroContainer,
  AbsoluteDecor,
  HeroBtn,
  Mask,
  Item,
} from './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Decorator } from '../../pages/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  bg: '',
  color: 'White',
  textAlign: 'left',
  withMask: true,
  fullWidth: true,
  className: 'hero-slider',
  curveBg: Theme.Color.Deepsea,
  sliceBg: Theme.Color.Background,
};

const settings = {
  infinite: true,
  speed: 500,
  autoPlay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
};

class MySlider extends Slider {
  updateSlideHeights() {
    var sliderHeight = $('.hero-slider')
      .find('.slick-track')
      .css('height');
    $('.hero-slider')
      .find('.slick-slide .item')
      .css('height', sliderHeight);
  }

  componentDidMount() {
    this.updateSlideHeights();
    window.addEventListener('resize', this.updateSlideHeights());
  }
}

// Render Page
const HomeHero = ({ bgColor, textColor, slides }) => {
  return (
    <HeroContainer {...HeroProps}>
      <MySlider {...settings}>
        <Item
          className="item"
          BgColor={Theme.Color.Ocean}
          SubTextColor={Theme.Color.Deepsea}
        >
          <BasicInner>
            <div className="text">
              <h2>People are natural engineers. We help kids realize it.</h2>
              <div className="h6">Purposeful Play to Build a Better Future</div>
              <Actions width={[1, 1, 1, 7 / 10]}>
                <Link to="/programs">
                  <HeroBtn
                    className="hero-btn"
                    bgColor={Theme.Color.Nova}
                    textColor={Theme.Color.White}
                  >
                    Explore Courses
                  </HeroBtn>
                </Link>
                <LocationFilter />
              </Actions>
            </div>
          </BasicInner>
          <AbsoluteDecor>
            <div className="decor-container absolute-cloud-small">
              <ImgMatch src="cloud-small.png" />
            </div>
            <div className="decor-container absolute-cloud-big">
              <ImgMatch src="cloud-big.png" />
            </div>
            <div className="decor-container absolute-waterfall">
              <ImgMatch src="waterfall.png" />
            </div>
            <div className="decor-container absolute-volcano">
              <ImgMatch src="volcano.png" />
            </div>
            <div className="decor-container absolute-lego">
              <Icon Name="basicLego" Color="orange" />
            </div>
            <div className="decor-container absolute-ladder">
              <ImgMatch src="ladder.png" />
            </div>
            <div className="decor-container absolute-legos">
              <ImgMatch src="three-legos.png" />
            </div>
          </AbsoluteDecor>
          <div className="absolute-curve">
            <FooterCurveSlice bgColor={Theme.Color.Deepsea} />
          </div>
        </Item>
        <Item
          className="item"
          SubTextColor={Theme.Color.White}
          BgColor={Theme.Color.Eggplant}
        >
          <div className="bg-image">
            <ImgMatch src="boy-smiles.jpg" />
          </div>
          <BasicInner>
            <div className="text">
              <h2>Find the perfect birthday for your future engineer.</h2>
              <div className="h6">
                We supply the activity, instruction, and materials.
              </div>
              <Link to="/parties">
                <HeroBtn
                  bgColor={Theme.Color.Nova}
                  textColor={Theme.Color.White}
                >
                  Parties
                </HeroBtn>
              </Link>
            </div>
          </BasicInner>
          <AbsoluteDecor>
            <div className="decor-container absolute-gears">
              <ImgMatch src="gears.png" />
            </div>
          </AbsoluteDecor>
          <div className="absolute-curve">
            <FooterCurveSlice bgColor={Theme.Color.Dino} />
          </div>
        </Item>
        <Item
          className="item"
          BgColor={Theme.Color.Sunset}
          SubTextColor={Theme.Color.Dino}
        >
          <BasicInner>
            <div className="text">
              <h2>Learning through play isn't just for kids.</h2>
              <div className="h6">
                We believe that play reveals who you are, and who you are
                inspires your work.
              </div>
              <Link to="/">
                <HeroBtn
                  bgColor={Theme.Color.Nova}
                  textColor={Theme.Color.White}
                >
                  View Team Building
                </HeroBtn>
              </Link>
            </div>
          </BasicInner>
          <AbsoluteDecor>
            <div className="decor-container absolute-gears">
              <ImgMatch src="gears.png" />
            </div>
            <div className="absolute-lego-ladder">
              <ImgMatch src="lego-ladder.png" />
            </div>
          </AbsoluteDecor>
          <div className="absolute-curve">
            <FooterCurveSlice bgColor={Theme.Color.Dino} />
          </div>
        </Item>
      </MySlider>
      <div className="absolute-angle">
        <FooterAngleSlice bgColor={Theme.Color.Background} />
      </div>
    </HeroContainer>
  );
};

export default HomeHero;

//////////////////////////////////////////////////////////////////////
// End Component
