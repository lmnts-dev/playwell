// PlayButton Styles:
// Container and layout styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Library
import Tilt from 'react-tilt';

// Components
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// Might want to move this out to where it is used so the button can
// be re-used without specific positioning.
export const Container = styled(Box)`
  position: absolute;
  z-index: 2;
  top: calc(${props => props.theme.Root.Size} * -1.4);
  transform: translateX(-50%) translateY(170%);
`;

export const Inner = styled(Box)`
  border-radius: 999em;
  font-size: 4rem;
  cursor: pointer;
  transform: translateZ(20px);
`;

export const Tilter = styled(Tilt)`
  transform-style: preserve-3d;
`;

//////////////////////////////////////////////////////////////////////
// End Styles