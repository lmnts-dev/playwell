// Hero Component:
// This is a helper component containing base
// Hero styles shared across all Hero components.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { HeroInnerStyle, HeroContentStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const HeroInner = ({
  imgRight,
  imgLeft,
  imgBottom,
  imgTop,
  imgWidth,
  Size,
  Flex,
  Padding,
  children,
  JustifyContent,
}) => (
  <HeroInnerStyle
    Size={Size ? Size : false}
    Padding={Padding ? Padding : false}
    imgRight={imgRight ? imgRight : false}
    imgLeft={imgLeft ? imgLeft : false}
    imgBottom={imgBottom ? imgBottom : false}
    imgTop={imgTop ? imgTop : false}
    imgWidth={imgWidth ? imgWidth : false}
    className="hero-inner"
  >
    <HeroContentStyle
      className="hero-content"
      JustifyContent={JustifyContent}
      Flex={Flex}
    >
      {children}
    </HeroContentStyle>
  </HeroInnerStyle>
);

export const HeroContent = ({ children, Flex }) => (
  <HeroContentStyle Flex={Flex} className="hero-content">
    {children}
  </HeroContentStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component
