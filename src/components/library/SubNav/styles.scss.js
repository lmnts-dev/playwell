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
  position: absolute;
  top: calc(${props => props.theme.Root.Size} * -1.5);
`;

export const Nav = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
`;

Nav.Link = styled.a`
  color: ${props => props.theme.Color.Nova};
  cursor: pointer;
  font-family: ${props => props.theme.Font.Header};
  font-size: 1.5rem;
  transition: ${props => props.theme.Base.Transition.String};

  &:hover {
    opacity: 0.7;
    text-decoration: none;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
