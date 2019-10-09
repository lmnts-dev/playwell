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

  &.ico-lego {
    .top-shade {
      fill: ${({ legoColor }) =>
        (legoColor === 'orange' && '#F97243') ||
        (legoColor === 'blue' && '#7AC0E6') ||
        (legoColor === 'purple' && '#874BB4')};
    }
    .left-shade {
      fill: ${({ legoColor }) =>
        (legoColor === 'orange' && '#E2480A') ||
        (legoColor === 'blue' && '#269FE2') ||
        (legoColor === 'purple' && '#510689')};
    }
    .right-shade {
      fill: ${({ legoColor }) =>
        (legoColor === 'orange' && '#BF390A') ||
        (legoColor === 'blue' && '#002F9E') ||
        (legoColor === 'purple' && '#23023B')};
    }
    .prong-top-shade {
      fill: ${({ legoColor }) =>
        (legoColor === 'orange' && '#F98A5C') ||
        (legoColor === 'blue' && '#B8E2F8') ||
        (legoColor === 'purple' && '#AB6ADC')};
    }
    .shadow-shade {
      fill: ${({ legoColor }) =>
        (legoColor === 'orange' && '#440000') ||
        (legoColor === 'blue' && '#440000') ||
        (legoColor === 'purple' && '#440000')};
    }
  }
`;

export default IconStyle;
