// <Section> Component:
// This is the sitewide Section Style of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import { SectionStyle } from 'elements/Section/styles.scss';

// Begin Block
//////////////////////////////////////////////////////////////////////

const Section = ({
  children,
  FullWidth,
  JustifyContent,
  FlexDir,
  AlignItems,
  Background,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
  PaddingBottom,
  TextColor,
  MinHeight,
}) => (
  <SectionStyle
    FullWidth={FullWidth}
    JustifyContent={JustifyContent}
    FlexDir={FlexDir}
    AlignItems={AlignItems}
    Background={Background}
    PaddingLeft={PaddingLeft}
    PaddingRight={PaddingRight}
    PaddingTop={PaddingTop}
    PaddingBottom={PaddingBottom}
    TextColor={TextColor}
    MinHeight={MinHeight}
  >
    {children}
  </SectionStyle>
);

export default Section;

//////////////////////////////////////////////////////////////////////
// End Block
