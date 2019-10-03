// <Spacer /> Component:
// Vertical dashed spacer

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Container } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Spacer = ({ children, indent }) => (
  <Container indent={indent}>
    <Container.Inner>
      <Container.Positioner>
        <span>{children}</span>
        <Container.Line />
      </Container.Positioner>
    </Container.Inner>
  </Container>
);

Spacer.defaultProps = {};

export default Spacer;

//////////////////////////////////////////////////////////////////////
// End Component
