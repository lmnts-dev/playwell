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

//Constants
import { Theme, Root } from 'constants/Theme';

//Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// Might want to move this out to where it is used so the button can
// be re-used without specific positioning.
export const Container = styled(Box)`
  position: absolute;
  z-index: 2;
  top: 30%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 8px 34px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
`;

export const Inner = styled(Box)`
  border-radius: 999em;
  font-size: 4rem;
  cursor: pointer;
  transform: translateZ(20px);
  color: transparent !important;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${Theme.Color.White};
`;

export const Tilter = styled(Tilt)`
  transform-style: preserve-3d;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
