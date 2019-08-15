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

export const GearContainer = styled.div`
  position: absolute;
  top: calc(${props => props.theme.Root.Size} * -1.5);
  left: calc(${props => props.theme.Root.Size} * -1.5);
  z-index: 0;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
