// HeroContainer Styles:
// Outer container styles for Hero variations

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Base } from 'constants/styles/Base';

// Components
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled(Flex)`
  min-height: 70vh;
  text-align: ${props => props.textAlign};
`;

Container.Inner = styled.div`
  max-width: ${props => props.theme.Root.Site.Width};
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-top: calc(
    ${props => props.theme.Root.Nav.Size} + ${props => props.theme.Root.Size} *
      4
  );
  padding-bottom: calc(${props => props.theme.Root.Size} * 1);

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-top: calc(
      ${props => props.theme.Root.Nav.Size} + ${props => props.theme.Root.Size} *
        2
    );
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles