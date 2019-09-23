// Homepage Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import Btn from 'components/library/Btn';

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
  text-align: left;

  .carousel {
    position: relative;
  }
  .carousel__back-button,
  .carousel__next-button {
    outline: none;
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(${Root.Size} * 1);
    height: calc(${Root.Size} * 1);

    &:disabled {
      opacity: 0.7;
    }
  }
  .carousel__next-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  .carousel__inner-slide {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding-right: calc(${Root.Size} * 2);
    padding-left: calc(${Root.Size} * 2);
  }
`;

export const SliderArrow = styled(Box)`
  cursor: pointer;
  transform: scale(1.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(${Root.Size} * 0.5);
  height: calc(${Root.Size} * 0.5);

  svg {
    transition: ${Theme.Base.Transition.String};
    transform: rotate(180deg) translateX(0);
    fill: ${Theme.Color.White};
  }

  &:hover {
    svg {
      transform: rotate(180deg) translateX(40%);
    }
  }

  &:active {
  }

  &.next-slide {
    svg {
      transform: rotate(0deg) translateX(0);
    }

    &:hover {
      svg {
        transform: rotate(0deg) translateX(40%);
      }
    }

    &:active {
    }
  }
`;

export const Actions = styled(Flex)`
  padding-left: calc(${Root.Size} * 2);
  position: relative;
`;

export const HeroBtn = styled.button`
  background-color: ${props =>
    props.bgColor ? props.bgColor : Theme.Color.Nova};
  border: 0;
  border-radius: 999px;
  color: ${props => (props.textColor ? props.textColor : Theme.Color.White)};
  cursor: pointer;
  height: calc(${Root.Button.Size} * 1.2);
  outline: 0;
  font-weight: bold;
  text-align: center;
  display: flex;
  position: relative;
  margin-right: calc(${Root.Size} / 4);
  padding: 1.2rem 3rem 2.1rem;

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(93, 99, 118, 0.2);
  }

  &:last-child {
    margin-right: 0;
  }

  .counter-inner {
    position: relative;
    top: 4px;
    width: 100%;
    text-align: center;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
