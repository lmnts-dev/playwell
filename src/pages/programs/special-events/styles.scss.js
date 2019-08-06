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

export const ProgramHero = styled.div`
  max-width: ${Root.Site.Width};
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding-top: calc(${Root.Nav.Size} + ${Root.Size} * 4);
  padding-bottom: calc(${Root.Nav.Size} + ${Root.Size} * 2);
`;

//////////////////////////////////////////////////////////////////////
// End Styles
