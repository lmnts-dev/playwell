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
  margin-top: calc(${Root.Size} * 1);

  .slick-slider {
    margin-bottom: calc(${Root.Size} / 2);
  }

  .slick-slide {
    width: 530px;
    height: 480px;
    outline: none;

    &:focus {
      outline: none;
    }
  }

  .slick-active {
    
    .slick-inner {
      background: ${Theme.Color.White};
      box-shadow: 0px 10px 27px ${hexToRGB('#510689', 0.2)};
      border-radius: calc(${Root.Radius} * 1);
    }
  }

  .slide-header {
    display: block;
    margin-bottom: calc(${Root.Size} / 2);
    font-size: 1.5rem;
    font-weight: 500;
    color: ${Theme.Color.Primary};
  }

  .slide-detail {
    padding-bottom: 0;
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
`;

//////////////////////////////////////////////////////////////////////
// End Styles
