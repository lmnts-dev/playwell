// LocationEvents styles:
// Location template events section styling

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const QuoteContainer = styled(Section)``;

QuoteContainer.Quote = styled(Text)`
  position: relative;

  &:before {
    content: '"';
    color: ${Theme.Color.Primary};
    font-size: 4rem;
    position: absolute;
    top: -40px;
    left: 48%;

    @media (min-width: ${Base.Media.Width.Md + 'px'}) {
      top: -30px;
      left: -20px;
    }
  }

  &:after {
    content: '"';
    color: ${Theme.Color.Primary};
    font-size: 4rem;
    position: absolute;
    bottom: -70px;
    right: 46%;

    @media (min-width: ${Base.Media.Width.Md + 'px'}) {
      bottom: -60px;
      right: -20px;
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
