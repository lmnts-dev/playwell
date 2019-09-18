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
import { SlideToRightKeyframes } from 'components/core/Transition/Keyframes.js';
import { FadeIn75KeyFrames } from 'components/core/Transition/Keyframes.js';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const HamburgerOverlayStyle = styled.div`
  width: 350px;
  height: 100vh;
  /* height: calc(100vh - ${Root.Nav.Size}); */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${Theme.Color.White};
  z-index: 999;
  animation: ${SlideToRightKeyframes} .5s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed !important;
  -webkit-transform: none !important;

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    width: 75vw;
  }
`;

HamburgerOverlayStyle.Inner = styled.div`
  position: relative;
  flex: 1;
  overflow-x: hidden;
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  padding-bottom: calc(${Root.Size} * 2);
  background: ${Theme.Color.White};

  .overlay-top {
    top: 0;
    background-color: ${Theme.Color.Primary};
    color: ${Theme.Color.White};
    padding: calc(${Root.Size} / 2) calc(${Root.Size} / 3);

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: calc(${Root.Size} * 2) calc(${Root.Size} / 3);
    }

    .overlay-top-inner {
      position: relative;

      a {
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        .brandmark {
          width: calc(${Root.Size} * 2.5);
          margin: calc(${Root.Size} / 4) 0 calc(${Root.Size} / 6) 0;
          fill: ${Theme.Color.White};

          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            width: calc(${Root.Size} * 6);
            /* height: calc(${Root.Size} * 4); */
          }
        }
      }

      .overlay-tag {
        font-weight: bold;
        font-size: 1.2rem;
      }

      .overlay-date {
        display: block;
        /* margin-top: calc((${Root.Size} * 0.75) / 2); */
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: normal;
      }
    }

    .overlay-close {
      position: absolute;
      width: calc(${Root.Size} * 0.75);
      height: calc(${Root.Size} * 0.75);
      right: 0;
      top: 0;
      cursor: pointer;

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: calc(${Root.Size} * 1.2);
        height: calc(${Root.Size} * 1.2);
      }

      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1);
        transform-origin: center center;
        opacity: 0;
        transition: all 0.5s ease;
        width: 100%;
        height: 100%;
        background: ${hexToRGB(Theme.Color.Nightsky, 0.1)};
        border-radius: calc(${Root.Radius} / 4);
      }

      &:hover {
        &:before {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 1;
        }
      }

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
          height: 1px;
          background-color: ${Theme.Color.White};
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
  }

  .overlay-bottom {
    .overlay-quicklink-list {
      display: flex;
      justify-content: space-between;
      border-bottom: ${hexToRGB(Theme.Color.Black, 0.08)} 1px solid;

      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        li {
          padding: 0;
          margin: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          a {
            flex: 1;
            width: 100%;
            color: ${Theme.Color.Primary};
            font-weight: bold;
            display: inline-block;
            text-decoration: none;
            padding: calc(${Root.Size} / 2) calc(${Root.Size} / 4);
            text-align: center;
            transition: all 0.25s ease;

            @media (max-width: ${Base.Media.Width.Md + 'px'}) {
              padding: calc(${Root.Size} / 1.5) calc(${Root.Size} / 4);
            }

            &:hover {
              background-color: ${hexToRGB(Theme.Color.Nightsky, 0.05)};
            }
            &:focus {
              background-color: ${hexToRGB(Theme.Color.Nightsky, 0.09)};
            }
          }
        }
      }
    }

    .overlay-link-list {
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;

        a {
          display: flex;
          align-items: center;
          width: 100%;
          padding: calc(${Root.Size} / 3) calc(${Root.Size} / 4);
          text-decoration: none;
          color: ${Theme.Color.Nightsky};
          transition: all 0.25s ease;

          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            padding: calc(${Root.Size} / 1.5) calc(${Root.Size} / 4);
          }

          &:hover {
            background-color: ${hexToRGB(Theme.Color.Nightsky, 0.05)};
          }
          &:focus {
            background-color: ${hexToRGB(Theme.Color.Nightsky, 0.09)};
          }

          li {
            display: flex;
            align-items: center;
            width: 100%;

            .ico {
              padding-right: calc(${Root.Size} / 6);
            }

            span {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
`;

HamburgerOverlayStyle.BodyOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${Theme.Color.Black};
  opacity: 0.75;
  z-index: 995;
  animation: ${FadeIn75KeyFrames} 0.5s ease;
`;

export default HamburgerOverlayStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
