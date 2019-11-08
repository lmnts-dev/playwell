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

    .post-card {
      width: 35vw !important;
      max-width: calc(${Theme.Base.Size.Lg} * 11);
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        width: 45vw !important;
      }
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 80vw !important;
      }
    }

    .slick-current {
      .post-card .text {
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
