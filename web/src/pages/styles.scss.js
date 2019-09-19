// Homepage Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex, Text } from 'components/library/Elements';

// Keyframe
import {
  FadeIn,
  FadeOut,
  SlideUp,
  SlideToRight,
  SlideToLeft,
  Rotate,
} from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SliderContainer = styled(Box)`
  .carousel {
    position: relative;
  }
  .carousel__back-button,
  .carousel__next-button {
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(${Root.Size} * 1);
    height: calc(${Root.Size} * 1);
  }
  .carousel__next-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: calc(${Root.Size} * 2);
    padding-left: calc(${Root.Size} * 2);
  }
`;

export const Arrow = styled(Box)`
  cursor: pointer;
  transform: scale(1.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: ${Theme.Base.Transition.String};
    transform: rotate(0deg) translateX(0);
    fill: ${Theme.Color.Primary};
  }

  &:hover {
    svg {
      transform: rotate(0deg) translateX(-40%);
    }
  }

  &:active {
  }

  &.next-slide {
    svg {
      transition: ${Theme.Base.Transition.String};
      transform: rotate(180deg) translateX(0);
      fill: ${Theme.Color.Primary};
    }

    &:hover {
      svg {
        transform: rotate(180deg) translateX(-40%);
      }
    }

    &:active {
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
