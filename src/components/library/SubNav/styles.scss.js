// SubNav Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// Might want to move this out to where it is used so the button can
// be re-used without specific positioning.
export const Container = styled(Box)`
  margin: 0 auto;
  max-width: ${props => props.theme.Root.Site.Width};
`;

export const Nav = styled(Flex)``;

//////////////////////////////////////////////////////////////////////
// End Styles
