// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Extension
import { BtnStyle } from 'components/library/Btn/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CourseListingsStyle = styled.section`
  background: ${Theme.Color.White};
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};

  .listings-inner {
    width: ${props =>
      props.mapWidth ? 'calc(100% - ' + props.mapWidth + ')' : '100%'};
  }

  .listings {
    position: relative;
    z-index: ${props => (props.mapZedIndex ? props.mapZedIndex + 1 : 5)};
  }
`;

// Results

export const ListingsResultsStyle = styled.div`
  position: relative;
`;

//////////////////////////////////////////////////////////////////////