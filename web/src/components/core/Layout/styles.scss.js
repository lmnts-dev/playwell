// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Blocks
import InnerStyle from 'components/library/Inner/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SiteGrid = styled.div`
  width: 100%;
  max-width: ${Theme.Base.Grid.SiteWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${Theme.Color.Background};
  z-index: 2;
  position: relative;
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
