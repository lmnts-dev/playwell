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
    padding: 0 10%;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding: 0 ${Root.Size};
    }

    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      padding: calc(${Root.Size} * 1.5) 0 0 0;
    }

    .slick-arrow {
      position: absolute;
      top: calc(${Root.Size});
      left: auto;
      right: 0;
      border-radius: 50%;
      height: calc(${Root.Size} / 1.1);
      width: calc(${Root.Size} / 1.1);
      transition-duration: 0.5s;
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        top: calc(${Root.Size} / 4);
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
      }

      &.slick-next {
        &:before {
          left: calc(${Root.Size} / 4.5);
          border-left-color: transparent;
          border-bottom-color: transparent;
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
