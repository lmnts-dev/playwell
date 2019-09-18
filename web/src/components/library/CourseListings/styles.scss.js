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
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  .listings-inner {
    padding-right: calc(${props => props.mapWidth} + ${Root.Size});
    padding-left: calc(${Root.Rem} * 9);
    width: 100%;
    max-width: ${Root.Site.Width};
  }
    /* width: ${props =>
      props.mapWidth ? 'calc(100% - ' + props.mapWidth + ')' : '100%'};
  } */

  .listings {
    position: relative;
    z-index: ${props => (props.mapZedIndex ? props.mapZedIndex + 1 : 5)};
  }
`;

// Toolbar
CourseListingsStyle.Toolbar = styled.div`
  position: sticky;
  top: ${Root.Nav.Size};
  background: ${Theme.Color.White};
  z-index: 500;
  border-bottom: 1px solid ${Theme.Color.Blush};
  margin-bottom: calc(${Root.Size} / 4);
`;

// Results

export const ListingsResultsStyle = styled.div`
  position: relative;
`;

//////////////////////////////////////////////////////////////////////
