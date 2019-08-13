// CogRotator Component:
// Cog svg and rotator animation

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Container, Rotator } from './styles.scss';

// Components
import CogWheel from './CogWheel';

// Begin Component
//////////////////////////////////////////////////////////////////////

const CoggRotator = () => (
  <Container>
    <Rotator>
      <CogWheel />
    </Rotator>
  </Container>
);

CoggRotator.defaultProps = {};

export default CoggRotator;

//////////////////////////////////////////////////////////////////////
// End Component
