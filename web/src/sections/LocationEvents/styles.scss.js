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

export const Events = styled.div`
  background: ${Theme.Color.Background};
  border-top: 1px solid ${hexToRGB(Theme.Color.Nova, 0.3)};
`;
//////////////////////////////////////////////////////////////////////
// End Styles
