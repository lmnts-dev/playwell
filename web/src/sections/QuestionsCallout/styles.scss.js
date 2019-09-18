// QuestionsCallout Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex, Text } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const QuestionsNav = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    justify-content: space-between;
  }

  li {
    color: ${props => props.theme.Color.White};
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 0 calc(${props => props.theme.Root.Rem} * 0.8);

    a {
      color: ${p => p.theme.Color.White};
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
