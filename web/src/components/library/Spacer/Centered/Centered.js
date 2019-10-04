// <SpacerCentered /> Component:
// Vertical centered dashed spacer

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Container } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Centered = () => (
  <Container>
    <Container.Line />
  </Container>
);

Centered.defaultProps = {};

export default Centered;

//////////////////////////////////////////////////////////////////////
// End Component
