// PlayButton Component:
// Play button with Tilt.js interaction
// TODO: arrow svg

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import { Container, Inner, Tilter } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PlayButton = ({ bg, reversed, children }) => (
  <Container reversed={reversed} className="play-button">
    <Tilter
      className="Tilt"
      options={{
        max: 23,
        scale: 1.05,
        speed: 400,
        perspective: 300,
      }}
    >
      <Inner bg={bg} p={2}>
        &#x25BA;
      </Inner>
    </Tilter>
  </Container>
);

PlayButton.defaultProps = {
  bg: 'Nova',
};

export default PlayButton;

//////////////////////////////////////////////////////////////////////
// End Component
