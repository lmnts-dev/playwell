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

export const Community = styled(Section)`
  padding-right: 0;
  padding-left: 0;
`;

export const SliderContainer = styled(Box)`
  text-align: left;
  margin-top: calc(${Root.Size} / 2);

  .slick-slider {
    margin-bottom: calc(${Root.Size} / 2);
  }

  .slick-slide {
    width: 530px;
    height: 500px;
    outline: none;
    margin-top: calc(${Root.Size} / 2.5);

    &:focus {
      outline: none;
    }
  }

  .slick-active {
    .slick-inner {
      background: ${Theme.Color.White};
      box-shadow: 0px 14px 27px ${hexToRGB('#510689', 0.2)};
      border-radius: calc(${Root.Radius} / 2);
    }
  }

  .slide-header {
    display: block;
    margin-bottom: calc(${Root.Size} / 2);
    font-size: 1.5rem;
    font-weight: 500;
    color: ${Theme.Color.Dino};
  }

  .slide-detail {
    padding-bottom: 0;
    color: ${Theme.Color.Dino};
  }

  ul {
    width: 100%;
    margin-top: calc(${Root.Size} / 2.5);
    margin-bottom: calc(${Root.Size} / 2.5);

    li {
      color: ${Theme.Color.Nova};
      font-size: 0.8rem;
      font-weight: 500;
      display: inline-block;
      margin-right: calc(${Root.Size} / 4);
    }
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
