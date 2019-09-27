// Section Component:
// Section grid container

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Container } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Section = ({
  alpha,
  bg,
  bgImage,
  bgOverlay,
  color,
  fullWidth,
  children,
  pt,
  pb,
  textAlign,
}) => (
  <Container
    as="section"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    bg={bg}
    color={color}
    pt={pt}
    pb={pb}
    bgImage={bgImage}
    textAlign={textAlign}
  >
    {alpha && <Container.Overlay bg={bgOverlay} alpha={alpha} />}
    <Container.Inner fullWidth={fullWidth}>{children}</Container.Inner>
  </Container>
);

Section.defaultProps = {
  bg: 'Background',
  color: 'Text',
  pt: [4, 4, 8, 8],
  pb: [4, 4, 8, 8],
  textAlign: 'center',
  fullWidth: true,
};

export default Section;

//////////////////////////////////////////////////////////////////////
// End Component
