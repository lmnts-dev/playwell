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

    @media (max-width: ${Theme.Base.Media.Width.Lg}) {
      padding-right: calc(${props => props.mapWidth} + ${Root.Rem} * 3);
      padding-left: calc(${Root.Rem} * 2);
    }

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-left: calc(${Root.Rem});
      padding-right: calc(${Root.Rem});
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

// Toolbar
CourseListingsStyle.Toolbar = styled.div`
  position: sticky;
  top: ${Root.Nav.Size};
  background: ${Theme.Color.White};
  z-index: 5;
  margin-bottom: calc(${Root.Size} / 4);

  .toolbar-inner {
    position: relative;
    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-bottom: calc(${Root.Size} / 3);
    }

    &:after {
      content: '';
      position: absolute;
      left: calc((${Root.Size} / 4) * -1);
      right: calc((${Root.Size} / 4) * -1);
      bottom: 0;
      height: 1px;
      background: ${Theme.Color.Blush};
    }
  }
`;

// Results

export const ListingsResultsStyle = styled.div`
  position: relative;

  .nearby-results {
    .nearby-results-header {
      margin-top: calc(${Root.Size} * 2);
      color: ${Theme.Color.Tan};
      font-size: 2rem;

      a {
        color: ${Theme.Color.Nova};
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
