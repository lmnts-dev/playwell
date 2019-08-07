// PlayButton Component:
// 

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import { PlayButtonStyle } from './styles.scss';

// Components
import { Box, Flex } from 'components/library/Elements';

import CoggWheel from 'components/library/CoggRotator/CoggWheel';

import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PlayButton = () => (
  <Box
    bg="Nova"
    p={[2]}
    css={css`
      position: absolute;
      z-index: 2;
      border-radius: 999em;
      font-size: 4rem;
      top: calc(${Theme.Root.Size} * -1.2);
      transform: translateX(-50%) translateY(170%);
    `}
  >
    &#x25BA;
  </Box>
);

PlayButton.defaultProps = {};

export default PlayButton;

//////////////////////////////////////////////////////////////////////
// End Component
