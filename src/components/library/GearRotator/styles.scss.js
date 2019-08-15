// CogRotator Styles:
// Container and animations for cog rotation

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Keyframe
import { Rotate } from 'components/core/Transition/Keyframes';

// Components
import { Box, Flex } from 'components/library/elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled(Box)``;

export const Rotator = styled(Box)`
  .ico {
    width: ${props => props.width};
    height: ${props => props.height};
    animation: ${Rotate} 20s infinite linear;

    svg {
      fill: ${props => props.fill};
      stroke: ${props => props.strokeColor};
      stroke-width: 1px;
      stroke-dashoffset: 5px;
      stroke-dasharray: 5px;
      transition: all 20s ease;
      width: ${props => props.width};
      height: ${props => props.height};

      &:hover {
        stroke-dashoffset: 0px;
        stroke-dasharray: 300px;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
