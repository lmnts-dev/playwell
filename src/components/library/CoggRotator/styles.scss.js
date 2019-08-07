// MenuHero Styles:
// These are nearly identical to the Section base styles.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled.div`
  max-width: ${Root.Site.Width};
  width: 100%;
  margin: 0 auto;
  position: absolute;
  overflow: hidden;
  /* padding-bottom: calc(${Root.Nav.Size} + ${Root.Size} * 2); */
`;

//////////////////////////////////////////////////////////////////////
// End Styles
