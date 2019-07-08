// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Blocks
import InnerStyle from 'elements/Inner/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SiteGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

SiteGrid.Inner = styled(InnerStyle)`
  /* Core styles */
  width: 100%;
  min-height: calc(100vh - (${Root.Nav.Size} * 2));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export default SiteGrid;

//////////////////////////////////////////////////////////////////////
// End Styles
