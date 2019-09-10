// HeroContainer Component:
// Outer Hero containment/wrapper

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Container } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HeroContainer = ({ bg, color, px, children, textAlign }) => (
  <Container
    as="section"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    bg={bg}
    px={px}
    color={color}
    textAlign={textAlign}
  >
    <Container.Inner>{children}</Container.Inner>
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