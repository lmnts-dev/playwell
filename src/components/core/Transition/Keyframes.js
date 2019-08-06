// Keyframes.js:
// For CSS Keyframes.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Slide to Right
export const SlideToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
`;

// Slide to Right
export const SlideToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
`;

// Slide Up
export const SlideUp = keyframes`
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0%);
  }
`;

// Fade In
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

// Fade In to 60% Opacity
export const FadeIn60KeyFrames = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: .6;
  }
`;

// Fade In to 60% Opacity
export const FadeIn75KeyFrames = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: .75;
  }
`;

// Fade Out
export const FadeOutKeyFrames = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const FadeOut = css`
  animation: ${FadeOutKeyFrames} ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase} 1;
`;

//////////////////////////////////////////////////////////////////////
// End Component
