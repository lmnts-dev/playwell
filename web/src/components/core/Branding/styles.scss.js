// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Keyframes
import { Rotate } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BrandmarkStyle = styled.svg`
  &.animate {
    .bottom-arrow,
    .top-arrow,
    .well-text,
    .play-text,
    .well-gear,
    .play-gear {
      position: relative;
      opacity: 1;
      transition: ${Theme.Base.Transition.String};
    }

    .well-gear,
    .play-gear {
      &:before {
        content: '';
        position: absolute;
        background: ${Theme.Color.White};
        width: 20%;
        height: 20%;
        border-radius: 50%;
      }
    }

    &:hover {
      .bottom-arrow,
      .top-arrow,
      .well-text,
      .play-text {
        opacity: 0;
      }

      .play-text {
        transform-origin: center center;
        animation: ${Rotate} 10s linear 0s infinite normal;
      }

      .well-text {
        transform-origin: center center;
        animation: ${Rotate} 10s linear 0s infinite normal;
      }

      .play-gear {
        transform-origin: center center;
        animation: ${Rotate} 10s linear 0s infinite normal;
      }

      .well-gear {
        transform-origin: center center;
        animation: ${Rotate} 10s linear 0s infinite normal;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
