// CoggRotator Component:
// Cogg backgorund image and rotator animation

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { Container } from './styles.scss';

// Components
import { Box, Flex } from 'components/library/Elements';
import CoggWheel from './CoggWheel';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const CoggRotator = ({ bg, color, px, children }) => (
  <Container>
    <CoggWheel />
  </Container>
);

CoggRotator.defaultProps = {};

export default CoggRotator;

//////////////////////////////////////////////////////////////////////
// End Component
