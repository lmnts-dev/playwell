/* eslint-disable */

// Font.js:
// This is the sitewide font reference.

import { createGlobalStyle } from 'styled-components';
import { Root } from './../Theme';
import { Base } from './Base';

// Our Local Fonts: Brown
import BrownBoldOTF from './fonts/brown/Brown-Bold.otf';
import BrownBoldEOT from './fonts/brown/Brown-Bold.eot';
import BrownBoldTTF from './fonts/brown/Brown-Bold.ttf';
import BrownBoldWOFF_Two from './fonts/brown/Brown-Bold.woff2';
import BrownSemiboldOTF from './fonts/brown/Brown-Semibold.otf';
import BrownSemiboldEOT from './fonts/brown/Brown-Semibold.eot';
import BrownSemiboldTTF from './fonts/brown/Brown-Semibold.ttf';
import BrownSemiboldWOFF_Two from './fonts/brown/Brown-Semibold.woff2';
import BrownRegularOTF from './fonts/brown/Brown-Regular.otf';
import BrownRegularEOT from './fonts/brown/Brown-Regular.eot';
import BrownRegularTTF from './fonts/brown/Brown-Regular.ttf';
import BrownRegularWOFF_Two from './fonts/brown/Brown-Regular.woff2';

// Our Local Fonts: Cera Pro Bol
import CeraProBoldOTF from './fonts/cera/CeraPro-Bold.otf';
import CeraProBoldEOT from './fonts/cera/CeraPro-Bold.eot';
import CeraProBoldTTF from './fonts/cera/CeraPro-Bold.ttf';
import CeraProBoldWOFF from './fonts/cera/CeraPro-Bold.woff';
import CeraProBoldWOFF_Two from './fonts/cera/CeraPro-Bold.woff2';

export const Font = {
  // Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Header: `"Cera Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Body: `"Brown", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Size: {
    Sm: '1rem',
    Md: '1rem',
    Lg: '1rem',
    ViewWidth: {
      Sm: '6.8vw',
      Md: '5.2vw',
      Lg: '1.2vw',
    },
    ViewHeight: {
      Sm: '6.8vh',
      Md: '5.2vh',
      Lg: '2vh',
    },
  },
  Icon: {
    Size: {
      Sm: '8.5vw',
      Md: '8.5vw',
      Lg: '1.7vw',
    },
  },
};

// Global Type Styles
export const Typography = createGlobalStyle`

  /* Font Face Declaration */
  @font-face {
    font-family: "Cera Pro";
    src: url(${CeraProBoldWOFF_Two}) format("woff2"),
         url(${CeraProBoldWOFF}) format("woff"),
         url(${CeraProBoldTTF}) format("ttf"),
         url(${CeraProBoldEOT}) format("eot"),
         url(${CeraProBoldOTF}) format("otf");
  }

  @font-face {
    font-family: "Brown";
    src: url(${BrownRegularWOFF_Two}) format("woff2"),
         url(${BrownRegularTTF}) format("ttf"),
         url(${BrownRegularEOT}) format("eot"),
         url(${BrownRegularOTF}) format("otf");
    font-weight: normal;
  }

  @font-face {
    font-family: "Brown";
    src: url(${BrownBoldWOFF_Two}) format("woff2"),
         url(${BrownBoldTTF}) format("ttf"),
         url(${BrownBoldEOT}) format("eot"),
         url(${BrownBoldOTF}) format("otf");
    font-weight: 700;
  }

  @font-face {
    font-family: "Brown";
    src: url(${BrownSemiboldWOFF_Two}) format("woff2"),
         url(${BrownSemiboldTTF}) format("ttf"),
         url(${BrownSemiboldEOT}) format("eot"),
         url(${BrownSemiboldOTF}) format("otf");
    font-weight: 500;
  }

  /* Base Text Styles */
  body {
    line-height: 1;
    font-size: 1rem;
    font-family: ${Font.Body};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  /* Paragraph Styles */
  p {
    font-family: ${Font.Body};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.2px;

    &.lead {
      font-size: 1.4rem;
    }
  }

  .p-lg {
    font-family: ${Font.Body};
    line-height: 1.4;
    font-size: 1.2rem;
    letter-spacing: -0.2px;
  }

  /* Header Styles */
  h1, h2, h3, h4, h5, h6, .headline {
    font-family: ${Font.Header};
    line-height: 1.1;
    padding: 0;
    margin: 0;
    letter-spacing: -0.2px;
  }

  h1, .h1 {
    font-size: 4rem;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 2rem;
    }
  }
  h2, .h2 {
    font-size: 3rem;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 2rem;
    }
  }
  h3, .h3 {
    font-size: 2.5rem;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 1.5rem;
    }
  }
  h4, .h4 {
    font-size: 2rem;
  }
  h5, .h5 {
    font-size: 1.75rem;
  }
  h6, .h6 {
    font-size: 1.5rem;
  }

  .headline {
    font-size: 7.25rem;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 4rem;
    }
  }

  h1, h2, h3, h4, h5, h6, p { padding-bottom: calc(var(--Size) / 3.5); }
`;
