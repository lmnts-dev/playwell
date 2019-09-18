// HeroContainer Styles:
// Outer container styles for Hero variations

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Base } from 'constants/styles/Base';

// Components
import { Theme, Root } from 'constants/Theme';
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled(Flex)`
  min-height: 70vh;
  text-align: ${props => props.textAlign};
`;

Container.Inner = styled.div`
  width: 100%;
  max-width: ${props => (props.FullWidth ? '100%' : Theme.Base.Grid.SiteWidth)};
  margin: 0 auto;
  position: relative;
  padding-top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 4);
  padding-bottom: calc(${props => props.theme.Root.Size} * 1);

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 2);
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
