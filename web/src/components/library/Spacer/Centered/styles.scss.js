// SpacerCentered Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled(Flex)`
  position: relative;
  justify-content: center;
`;

Container.Line = styled.span`
  width: 0;
  height: 100px;
  position: absolute;
  bottom: -50px;
  border-left: 1px dashed ${Theme.Color.Primary};
  z-index: 9;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
