// MasonrySection Component:
// This is a component for a MasonryGrid of Widgets.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';

// Constants

// Styles
import { BasicSectionStyle, BasicInnerStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const BasicSection = ({
  BgColor,
  TextColor,
  BorderTop,
  noPaddingBottom,
  noPaddingTop,
  children,
}) => (
  <BasicSectionStyle
    BgColor={BgColor}
    TextColor={TextColor}
    BorderTop={BorderTop}
    noPaddingBottom={noPaddingBottom}
    noPaddingTop={noPaddingTop}
  >
      {children}
  </BasicSectionStyle>
);

export const BasicInner = ({
         noPaddingLeft,
         noPaddingRight,
         wideWidth,
         children,
       }) => (
         <BasicInnerStyle
           noPaddingLeft={noPaddingLeft}
           noPaddingRight={noPaddingRight}
           wideWidth={wideWidth}
         >
           {children}
         </BasicInnerStyle>
       );

export default BasicSection;

//////////////////////////////////////////////////////////////////////
// End Component
