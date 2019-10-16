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
import { Base } from 'constants/styles/Base';

//Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// Might want to move this out to where it is used so the button can
// be re-used without specific positioning.
export const Container = styled(Box)`
  position: absolute;
  z-index: 2;
  top: 20%;
  left: 0;
  transform: translateX(-50%);
  filter: drop-shadow(0px 8px 34px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    right: 0;
    left: auto;
    transform: translateX(50%);
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    transform: translateX(20%);
  }
`;

export const Inner = styled(Box)`
  border-radius: 999em;
  font-size: 4rem;
  cursor: pointer;
  transform: translateZ(20px);
  color: transparent !important;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${Theme.Color.White};
  @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
    font-size: 3vw;
    padding: 2vw;
  }
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    font-size: 1.4rem;
    padding: calc(${Theme.Base.Size.Lg} / 3);
  }
`;

export const Tilter = styled(Tilt)`
  transform-style: preserve-3d;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
