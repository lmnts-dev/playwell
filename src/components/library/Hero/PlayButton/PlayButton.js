// PlayButton Component:
//

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

import Tilt from 'react-tilt';

// Styles
import { Container, Inner } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Components
import { Box, Flex } from 'components/library/Elements';
import CoggWheel from 'components/library/CoggRotator/CoggWheel';

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
