// <LocationIntro /> Styles:

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

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Intro = styled(Section)``;

Intro.Inner = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${Theme.Base.Grid.ReadingWidth};
`;

//////////////////////////////////////////////////////////////////////
// End Styles
