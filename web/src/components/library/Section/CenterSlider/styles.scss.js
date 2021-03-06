// SimpleSection Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const CenterSliderStyle = styled.div`
  color: ${p => p.Color};

  .slick-slider {
    padding: 0 15%;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding: 0 ${Root.Size};
    }

    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      padding: 0 !important;
    }

    &:first-of-type {
      padding: 0 10%;

      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        margin-top: calc(${Theme.Base.Size.Lg} / 2);
      }

      .slick-list {
        position: relative;
        &:after,
        &:before {
          position: absolute;
          top: 0;
          content: '';
          height: 100%;
          width: calc(${Theme.Base.Size.Lg} / 2);
          background: linear-gradient(
            to left,
            ${props => (props.BgColor ? props.BgColor : Theme.Color.Blush)},
            transparent
          );
          z-index: 1;
          pointer-events: none;
        }

        &:after {
          right: 0;
        }

        &:before {
          left: 0;
          transform: scale(-1);
        }
      }

      .slick-slide {
        transition-duration: 0.25s;

        &.slick-active {
          opacity: 0.4;

          &:hover {
            opacity: 1;
            filter: drop-shadow(
              0px 5px 12px ${hexToRGB(Theme.Color.Eggplant, 0.3)}
            );
            cursor: pointer;
          }
        }

        &.slick-center {
          opacity: 1;
          filter: drop-shadow(
            0px 5px 12px ${hexToRGB(Theme.Color.Eggplant, 0.3)}
          );
        }
      }
    }

    .nav-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: calc(${Theme.Base.Size.Lg} / 2) 15%;

      .gatsby-image-wrapper {
        border-radius: calc(${Root.Size} * 20);
        height: 0;
        padding-top: 100%;
      }
    }

    .slick-arrow {
      position: absolute;
      top: 50%;
      left: auto;
      right: 0;
      border-radius: 50%;
      height: calc(${Root.Size} / 1.1);
      width: calc(${Root.Size} / 1.1);
      transition-duration: 0.5s;
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        top: calc(${Root.Size} / -3.5);
      }

      &:hover {
        background-color: ${p => hexToRGB(p.Color, 0.1)};
      }

      &:before {
        height: calc(${Root.Size} / 4);
        width: calc(${Root.Size} / 4);
        border: 1.5px solid ${p => p.Color};
        content: '';
        position: absolute;
        top: calc(${Root.Size} / 3.5);
        left: calc(${Root.Size} / 2.5);
        transform: rotate(45deg);
      }

      &.slick-prev {
        left: 0;
        right: auto;
        &:before {
          border-right-color: transparent;
          border-top-color: transparent;
        }
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          left: calc(50% - calc(${Root.Size} * 1.5));
        }
      }

      &.slick-next {
        &:before {
          left: calc(${Root.Size} / 4.5);
          border-left-color: transparent;
          border-bottom-color: transparent;
        }
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          left: calc(50% + (${Root.Size} / 2));
        }
      }
    }

    .item {
      text-align: center;

      div.p-lg {
        font-weight: 700;
        padding-top: calc(${Root.Size} / 1.5);
      }

      p {
        padding-bottom: 0;
      }

      .quote {
        position: relative;
        padding: calc(${Root.Size} / 3);
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          padding: calc(${Root.Size} / 2) 0;
        }

        &:before,
        &:after {
          position: absolute;
          font-size: 3.25rem;
          font-family: 'Brown';
        }

        &:before {
          left: 0;
          top: calc(${Root.Size} / -4);
          content: '”';
        }

        &:after {
          content: '“';
          right: 0;
          bottom: calc(${Root.Size} / -1.5);
        }
      }
    }
  }
`;

export default CenterSliderStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
