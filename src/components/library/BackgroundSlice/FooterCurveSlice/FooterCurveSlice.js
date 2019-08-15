// BackgroundSlice/FooterCurveSlice/FooterCurveSlice.js:
// SVG for the sliced background on the Footer.

// Core
import React from 'react';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const FooterCurveSlice = ({ bgColor }) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    width="1440px"
    height="665px"
    viewBox="0 0 1440 665"
  >
    <path
      d="M0,665h1440V0c-204,113.8-116.6,405.2-495.7,475.2c-122.7,22.7-288.9-20.3-497-132C255.9,240.4,0,219.2,0,219.2
	V665z"
      fill={bgColor ? bgColor : Theme.Color.White}
    />
  </svg>
);

export default FooterCurveSlice;
