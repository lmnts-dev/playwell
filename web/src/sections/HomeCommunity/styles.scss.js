// Homepage Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import Btn from 'components/library/Btn';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SliderContainer = styled.div`
  text-align: center;

  .img-container {
    max-height: 200px;
    overflow: hidden;
  }

  .slick-slider {
    margin: calc(${Theme.Base.Size.Lg} / 2) 0;

    .item {
      text-align: left;
      padding: 0 calc(${Theme.Base.Size.Lg} / 8);
      width: 35vw !important;
      max-width: calc(${Theme.Base.Size.Lg} * 11);
      position: relative;
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        width: 45vw !important;
      }
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 80vw !important;
      }

      .gatsby-image-wrapper {
        border-radius: calc(${Theme.Base.Size.Lg} / 8);
        height: 0 !important;
        padding-top: 50%;
      }

      .text {
        display: block;
        width: 100%;
        padding: calc(${Theme.Base.Size.Lg} / 4) calc(${Theme.Base.Size.Lg} / 3)
          calc(${Theme.Base.Size.Lg} / 2) calc(${Theme.Base.Size.Lg} / 3);
        border-bottom-left-radius: calc(${Theme.Base.Size.Lg} / 8);
        border-bottom-right-radius: calc(${Theme.Base.Size.Lg} / 8);
        margin-bottom: calc(${Theme.Base.Size.Lg} * 0.75);
        transition-duration: 0.25s;

        &:hover {
          text-decoration: none !important;
        }

        .h6 {
          font-weight: 700;
          margin-bottom: calc(${Theme.Base.Size.Lg} / 8);
        }

        p {
          padding-bottom: 0;
        }

        ul {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: row;
          margin-bottom: calc(${Theme.Base.Size.Lg} / 4);

          li {
            color: ${Theme.Color.Nova};
            font-size: 0.8rem;
            font-weight: 700;
            margin-right: calc(${Root.Size} / 4);
          }
        }
      }
    }

    .slick-current {
      .item .text {
        background-color: ${Theme.Color.White};
        box-shadow: 0px 14px 27px ${hexToRGB('#510689', 0.2)};
      }
      .gatsby-image-wrapper {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  .btn-inner {
    margin-top: calc(${Theme.Base.Size.Lg} / 2);
  }

  .slick-dots {
    li {
      margin: 0;

      &.slick-active {
        button {
          &:before {
            color: ${Theme.Color.Sunset};
          }
        }
      }

      button {
        &:before {
          color: ${Theme.Color.Sunset};
          font-size: 8px;
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
