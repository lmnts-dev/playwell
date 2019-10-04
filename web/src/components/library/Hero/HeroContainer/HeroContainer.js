// HeroContainer Component:
// Outer Hero containment/wrapper

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Text } from 'components/library/Elements';
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';

// Styles
import { Container, Mask, Scroll } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HeroContainer = ({
  bg,
  color,
  px,
  children,
  textAlign,
  fullWidth,
  withMask,
  heroHeight,
  curveBg,
  sliceBg,
}) => (
  <Container
    as="section"
    flexWrap="wrap"
    justifyContent="center"
    alignItems={withMask ? 'flex-start' : 'center'}
    bg={bg}
    px={px}
    color={color}
    textAlign={textAlign ? textAlign : 'center'}
    fullWidth={fullWidth}
    withMask={withMask}
    heroHeight={heroHeight}
  >
    <Container.Inner>{children}</Container.Inner>
    {withMask && (
      <Mask>
        <FooterCurveSlice bgColor={curveBg} />
        <FooterAngleSlice bgColor={sliceBg} />
      </Mask>
    )}
  </Container>
);

HeroContainer.defaultProps = {
  bg: 'Sky',
  color: 'White',
  px: 1,
  curveBg: Theme.Color.Deepsea,
  sliceBg: Theme.Color.Background,
};

export default HeroContainer;

//////////////////////////////////////////////////////////////////////
// End Component
