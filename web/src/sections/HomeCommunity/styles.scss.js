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

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Community = styled(Section)``;

export const SliderContainer = styled(Box)`
  text-align: left;
  margin-top: calc(${Root.Size} * 1);

  .slick-slider {
    margin-bottom: calc(${Root.Size} / 2);
  }

  .slick-slide {
    width: 530px;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
