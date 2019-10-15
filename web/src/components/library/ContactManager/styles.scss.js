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
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};
  padding-bottom: calc(${Root.Size} * 5);
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    padding-right: 0;
    padding-left: 0;
  }

  .listings-inner {
    padding-right: calc(${props => props.mapWidth} + ${Root.Size});
    padding-left: calc(${Root.Rem} * 9);
    width: 100%;
    max-width: ${Root.Site.Width};

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-right: 0;
      padding-left: 0;
    }
  }
    /* width: ${props =>
      props.mapWidth ? 'calc(100% - ' + props.mapWidth + ')' : '100%'};
  } */

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
