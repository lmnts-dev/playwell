// PlayButton Component:
// Play button with Tilt.js interaction

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Library
import Tilt from 'react-tilt';

// Styles
import { Container, Inner } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PlayButton = ({ bg }) => (
  <Container>
    <Tilt className="Tilt" options={{ max: 23 }}>
      <Inner bg={bg} p={[2, 2, 3, 3]}>
        &#x25BA;
      </Inner>
    </Tilt>
  </Container>
);

PlayButton.defaultProps = {
  bg: 'Nova',
};

export default PlayButton;

//////////////////////////////////////////////////////////////////////
// End Component
