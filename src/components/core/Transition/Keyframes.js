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
export const SlideToRightKeyframes = keyframes`
  0% {
    transform: translateX(-100%);
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
export const FadeInKeyFrames = keyframes`
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

function Cascade(Keyframes, Duration, DelayBase, Increment) {
  const DelayScale = DelayBase * Increment;

  return css`
    animation: ${Keyframes} ${Duration}s ${Theme.Base.Transition.CssEase} 1;
    animation-delay: ${DelayScale}s;
    animation-fill-mode: forwards;

    /* -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden; */

    /* -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000; */
  `;
}
export const FadeIn = css`
  opacity: 0;
  ${Cascade(FadeInKeyFrames, 1, 0.25, 1)}
  &:first-child {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 0.25, 1.3)}
  }
  &:nth-child(2) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 0.25, 1.4)}
  }
  &:nth-child(3) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 0.25, 1.5)}
  }
  &:nth-child(4) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 0.25, 1.6)}
  }
  &:nth-child(5) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 0.25, 1.7)}
  }
  &:nth-child(6) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 0.25, 1.8)}
  }
  &:nth-child(7) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 0.25, 1.9)}
  }
  &:nth-child(8) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 0.25, 2)}
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
