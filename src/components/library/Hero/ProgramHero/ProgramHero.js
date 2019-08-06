// SimpleHero Component:
// This is a basic hero component for a hero
// and a background image.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Helpers
import { HeroInner } from './../../Hero';

// Styles
import SimpleHeroStyle from './styles.scss';

// Components
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ProgramHero = ({
  Background,
  imgRight,
  imgLeft,
  imgBottom,
  imgTop,
  imgWidth,
  TextColor,
  Tint,
  Padding,
  Size,
  BgMatch,
  BgQuery,
  BgAlt,
  Flex,
  JustifyContent,
  TintBorder,
  children,
}) => (
  <SimpleHeroStyle
    Background={Background}
    TextColor={TextColor}
    Tint={Tint}
    TintBorder={TintBorder}
    className={Tint ? 'simple-hero tint' : 'simple-hero'}
  >
    <HeroInner
      Size={Size ? Size : false}
      Padding={Padding}
      imgRight={imgRight ? imgRight : false}
      imgLeft={imgLeft ? imgLeft : false}
      imgBottom={imgBottom ? imgBottom : false}
      imgTop={imgTop ? imgTop : false}
      imgWidth={imgWidth ? imgWidth : false}
      JustifyContent={JustifyContent}
      className="inner"
      Flex={Flex}
    >
      {children}
    </HeroInner>
    {BgMatch ? (
      <div className="section-img">
        <ImgMatch src={BgMatch} AltText={BgAlt} className="hero-img" />
      </div>
    ) : null}
    {BgQuery ? (
      <div className="section-img">
        <ImgQuery src={BgQuery} AltText="Hero Alt" className="hero-img" />
      </div>
    ) : null}
  </SimpleHeroStyle>
);

export default ProgramHero;

//////////////////////////////////////////////////////////////////////
// End Component