// <Inner> Styles:
// This is the primary site grid. It's the max width and the gutter
// of the site, and one of the most fundamental components in terms
// of structure.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';

// Begin Styles
export const InnerStyle = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  max-width: ${props => (props.FullWidth ? '100%' : Theme.Base.SiteWidth)};
`;

export default InnerStyle;
//////////////////////////////////////////////////////////////////////
