// MenuHero Styles:
// These are nearly identical to the Section base styles.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled(Box)`
  position: absolute;
  z-index: 2;
  top: calc(${Theme.Root.Size} * -1.8);
  transform: translateX(-50%) translateY(170%);
`;

export const Inner = styled(Box)`
  border-radius: 999em;
  font-size: 4rem;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
