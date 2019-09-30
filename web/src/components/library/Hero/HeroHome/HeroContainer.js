// HeroContainer Component:
// Outer Hero containment/wrapper

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';

// Styles
import { Container, Mask } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HeroContainer = ({ bg, color, px, children, textAlign, FullWidth }) => (
  <Container
    as="section"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    bg={bg}
    px={px}
    color={color}
    textAlign={textAlign ? textAlign : 'center'}
  >
    <Container.Inner>{children}</Container.Inner>
    <Mask>
      <FooterCurveSlice bgColor={Theme.Color.Black} />
      <FooterAngleSlice />
    </Mask>
  </Container>
);

HeroContainer.defaultProps = {
  bg: 'Sky',
  color: 'White',
  px: 1,
};

export default HeroContainer;

//////////////////////////////////////////////////////////////////////
// End Component
