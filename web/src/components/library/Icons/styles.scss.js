// Widget Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

const IconStyle = styled.span`
  font-size: ${Root.IconSize};
  line-height: 0;
  height: ${Root.IconSize};
  width: ${Root.IconSize};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: ${props => (props.Color ? props.Color : Theme.Color.Black)};

  svg {
    fill: ${props => (props.Color ? props.Color : Theme.Color.Black)};
  }
`;

export default IconStyle;
