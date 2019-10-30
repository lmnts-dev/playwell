// AfterSchoolOverview Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled.div`
  background-image: linear-gradient(
    to right,
    ${Theme.Color.Sunset} 50%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: top;
  background-size: 10px 1px;
  background-repeat: repeat-x;
  padding-top: 1px;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
