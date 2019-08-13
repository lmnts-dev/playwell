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
  <Box
    className="coggbox"
    css={css`
      position: absolute;
      top: calc(${Theme.Root.Size} * -1.2);
      left: calc(${Theme.Root.Size} * -1.2);
      z-index: 0;
    `}
  >
    <Container>
    <CoggWheel />
    </Container>
  </Box>
);

CoggRotator.defaultProps = {};

export default CoggRotator;

//////////////////////////////////////////////////////////////////////
// End Component
