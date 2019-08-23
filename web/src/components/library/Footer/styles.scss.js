// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Begin Styles

let footerHeight = '100vh';

export const FooterStyle = styled.footer`
  width: 100%;
  position: relative;
  height: ${footerHeight};

  svg {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${footerHeight};

    &.footer-curve-slice {
      opacity: 0.05;
    }
  }
`;

//////////////////////////////////////////////////////////////////////
