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

const EdgeSliderStyle = styled.div`
  .h5,
  .h6,
  .h3 {
    font-weight: 700;
  }

  .h5 {
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 17.6px;
      white-space: nowrap;
    }
  }

  .h3 {
    padding-top: calc(${Root.Size} / 6);
    color: ${Theme.Color.Sunset};
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      margin-bottom: calc(${Theme.Base.Size.Lg});
    }
  }

  .h6, .h3 {
    margin-right: calc(${Root.Size} * 3.25);
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      margin-right: calc(${Theme.Base.Size.Lg} / 2);
    }
  }

  .slick-slider {
    padding-top: calc(${Root.Size} / 2);
    filter: drop-shadow(0px 8px 34px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      filter: drop-shadow(0px 8px 20px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
    }
    position: relative;

    .slick-list {
      overflow: visible;
    }

    .slick-arrow {
      position: absolute;
      top: calc(${Root.Size} / -2);
      left: auto;
      right: calc(${Root.Size} / 2);
      border-radius: 50%;
      height: calc(${Root.Size});
      width: calc(${Root.Size});
      border: 1px solid ${Theme.Color.Dino};
      transition-duration: .5s;
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        left: 0;
        right: auto;
      }

      &.slick-disabled {
        opacity: .2;
        cursor: default;

        &:before {
          opacity: 1;
        }
      }

      &:before {
        height: calc(${Root.Size} / 3);
        width: calc(${Root.Size} / 3);
        border: 1.5px solid ${Theme.Color.Dino};
        content: "";
        position: absolute;
        top: calc(${Root.Size} / 3.5);
        left: calc(${Root.Size} / 2.5);
        transform: rotate(45deg);
      }

      &.slick-prev {
        right: calc(${Root.Size} * 1.75);
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
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          left: calc(${Root.Size} * 1.25);
        }
      }
    }

    .item {
      text-align: center;
      padding: calc(${Root.Size} / 6);
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding: 1vw;
      }

      .gatsby-image-wrapper {
        display: block !important;
        padding-top: 140%;
        height: 0 !important;
        border-radius: calc(${Root.Size} / 8);
        margin-top calc(${Root.Size} / 4);

        img {
          border-radius: calc(${Root.Size} / 8);
        }
      }
    }
  }
`;

export default EdgeSliderStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
