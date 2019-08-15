// BackgroundSlice/FooterAngleSlice/FooterAngleSlice.js:
// SVG for the sliced background on the Footer.

// Core
import React from 'react';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const FooterAngleSlice = ({ bgColor }) => (
  <svg version="1.1" viewBox="0 0 1440 654.7" preserveAspectRatio="none">
    <path
      class="st0"
      d="M1035.4,491.9c-17.1,7.8-36.8,7.5-53.6-0.9L0,0v654.7h1440V306.1L1035.4,491.9z"
      fill={bgColor}
    />
  </svg>
);

// Defult Props

FooterAngleSlice.defaultProps = {
  bgColor: Theme.Color.White,
};
