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

  .h3 {
    padding-top: calc(${Root.Size} / 6);
    color: ${Theme.Color.Sunset};
  }

  .h6, .h3 {
    margin-right: calc(${Root.Size} * 3.25);
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
          border-right-color: ${Theme.Color.White};
          border-top-color: ${Theme.Color.White};
        }
      }

      &.slick-next {

        &:before {
          left: calc(${Root.Size} / 4.5);
          border-left-color: ${Theme.Color.White};
          border-bottom-color: ${Theme.Color.White};
        }
      }
    }

    .item {
      text-align: center;

      .gatsby-image-wrapper {
        display: block !important;
        padding-top: 60%;
        max-height: calc(${Root.Size} * 7);
        border-radius: calc(${Root.Size} / 8);
        margin-top calc(${Root.Size} / 4);

        img {
          border-radius: calc(${Root.Size} / 8);
          margin-left: calc(${Root.Size} / 4);
        }
      }
    }
  }
`;

export default EdgeSliderStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
