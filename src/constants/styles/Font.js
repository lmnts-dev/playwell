/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import { Root } from './../Theme';
import { Base } from './Base';

// Font.js:
// This is the sitewide font reference.

export const Font = {
  // Header: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  // Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Header: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Body: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
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
    line-height: 1.2;
    font-size: 1rem;
    letter-spacing: -0.2px;

    &.p-sm {
      line-height: 1.2;
      font-size: 1rem;
    }

    &.p-md {
      line-height: 1.3;
      font-size: 1.3rem;
    }

    &.p-lg {
      line-height: 1.2;
      font-size: 1.5rem;
    }
  }

  /* Header Styles */
  h1, h2, h3, h4, h5, h6 {
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

  h1, h2, h3, h4, h5, h6, p { padding-bottom: calc(var(--Size) / 3.5); }
`;
