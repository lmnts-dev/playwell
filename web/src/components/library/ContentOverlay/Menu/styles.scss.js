// MenuHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Extended Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframes
import { SlideUpKeyframes } from 'components/core/Transition/Keyframes.js';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const MenuOverlayStyle = styled.div`
  position: relative;
  flex: 1;
  overflow-x: hidden;
  width: 100%;
  overflow-y: auto;
  background: ${Theme.Color.White};

  iframe {
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${Root.Nav.Size * 0.4};
    top: ${Root.Nav.Size};
    width: 100%;
    height: calc(100% - (${Root.Nav.Size} + (${Root.Nav.Size} * 0.4)));
  }

  .overlay-bar-inner {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .overlay-top-bar,
  .overlay-bottom-bar {
    position: absolute;
    z-index: 500;
    left: 0;
    right: 0;
    height: ${Root.Nav.Size};
    background: ${Theme.Color.White};
    color: ${Theme.Color.Nightsky};
    display: flex;
    align-items: center;
    padding: 0 calc(${Root.Size});
    font-weight: bold;
    font-size: 1.1rem;
  }

  .overlay-top-bar {
    top: 0;
    justify-content: center;

    .overlay-close {
      position: absolute;
      width: calc(${Root.Size} * 1.4);
      height: calc(${Root.Size} * 1.4);
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      figure {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        position: relative;

        &:before,
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 2px;
          background-color: ${Theme.Color.Nightsky};
        }

        &:before {
          transform: rotate(45deg) translate(-50%, -50%);
          transform-origin: left center;
        }
        &:after {
          transform: rotate(-45deg) translate(-50%, -50%);
          transform-origin: left center;
        }
      }
    }

    .overlay-icon {
      position: absolute;
      width: calc(${Root.Size} * 1.4);
      height: calc(${Root.Size} * 1.4);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 1.7rem;
        line-height: 0;
      }
    }

    .overlay-bar-inner {
      justify-content: center;
    }
  }

  .overlay-bottom-bar {
    bottom: 0;
    border-top: ${Theme.Color.Slate} 1px solid;
    padding: 0 calc(${Root.Size} * 1.5);

    .overlay-bar-inner {
      justify-content: space-between;
    }

    a {
      color: ${Theme.Color.Primary};
      text-decoration: none;

      &:hover {
        color: ${Theme.Color.Primary};
      }
    }
  }
`;

export default MenuOverlayStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
