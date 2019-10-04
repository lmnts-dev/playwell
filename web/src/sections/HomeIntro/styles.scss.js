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

export const Intro = styled(Section)``;

Intro.Inner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

Intro.Image = styled(Box)`
  clip-path: circle(39%);

  figure {
    margin: 0;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
