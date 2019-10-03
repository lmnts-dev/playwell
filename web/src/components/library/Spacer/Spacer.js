// Section Component:
// Section grid container

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Scroll } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Spacer = ({ children, indent }) => (
  <Scroll indent={indent}>
    <Scroll.Inner>
      <Scroll.Positioner>
        <span>{children}</span>
        <Scroll.Line />
      </Scroll.Positioner>
    </Scroll.Inner>
  </Scroll>
);

Spacer.defaultProps = {};

export default Spacer;

//////////////////////////////////////////////////////////////////////
// End Component
