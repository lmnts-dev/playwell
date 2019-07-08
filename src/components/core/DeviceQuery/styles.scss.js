// Sidebar Component Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const DeviceQuery = styled.div`
  position: relative;
  appearance: none;
  padding: 0;
  margin: 0;
`;

DeviceQuery.Mobile = styled(DeviceQuery)`
  /* @media (min-width: ${Base.Media.Width.Md + 1 + 'px'}) {
    display: none;
  }
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  } */
`;

DeviceQuery.Desktop = styled(DeviceQuery)`
  /* @media (min-width: ${Base.Media.Width.Md + 1 + 'px'}) {
    display: block;
  }
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: none;
  } */
`;

export default DeviceQuery;

//////////////////////////////////////////////////////////////////////
// End Styles
