// MediaQuery.js:
// This creates the media templates, which allows for simple
// breakpoint usage inside styled-components, e.g.:
//
// ${Media.Lg`
//   font-size: 1.6rem;
// `};
//
// ${Media.Min_Md`
//   display: flex;
// `};
//
// Edit or add breakpoints inside constants/styles/Base.js

// Begin Helper
//////////////////////////////////////////////////////////////////////

import { css } from 'styled-components';
import { Base } from '../constants/styles/Base';

const Media = Object.keys(Base.Media).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Base.Media[label] / 16}px) {
      ${css(...args)};
    }
  `;

  acc[`Min_${label}`] = (...args) => css`
    @media (min-width: ${Base.Media[label] / 16}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default Media;

//////////////////////////////////////////////////////////////////////
// End Helper
