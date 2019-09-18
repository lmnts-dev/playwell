// SectionInnerStyle Styles:
// These are nearly identical to the Hero base styles.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SectionInnerStyle = styled(Flex)`
  width: 100%;
  margin: 0;
  padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size});
  padding-right: ${Root.Size};
`;

export const SectionContentStyle = styled(Flex)`
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  max-width: ${props => (props.FullWidth ? '100%' : Theme.Base.Grid.SiteWidth)};
`;

//////////////////////////////////////////////////////////////////////
// End Styles
