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

    &:before {
      content: '';
      position: absolute;
      left: calc((${Root.Size} / 2) * -1);
      right: calc((${Root.Size} / 2) * -1);
      bottom: 0;
      top: 0;
      background: ${Theme.Color.White};
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

/**
 *
 * Course Map Nav
 *
 */

export const CourseMapNavStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${FadeIn} 1s ease 0s 1 normal forwards;
  z-index: ${props => (props.mapZedIndex ? props.mapZedIndex : 4)};
  display: flex;
  flex-direction: column;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    display: none;
  }

  .mapboxgl-popup {
    max-width: 200px;
  }

  .inner {
    max-width: ${Root.Site.Width};
    width: 100%;
    margin: 0 auto;
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right};
    position: relative;
    display: flex;
    flex: 1;
    justify-content: flex-end;

    .map-col {
      display: flex;
      flex-direction: column;
      padding-top: calc(${props => Root.Nav.Size} + ${props => Root.Size} * 1);
      width: ${props => (props.mapWidth ? props.mapWidth : '350px')};

      .map-container {
        position: relative;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
        box-shadow: 0 12px 44px 0 ${hexToRGB(Theme.Color.Galaxy, 0.11)};
        background: ${Theme.Color.Sky};
        overflow: hidden;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        height: calc(
          100% - (${props => Root.Nav.Size} + ${props => Root.Size} * 1)
        );
        width: 100%;
      }

      .map-container-inner {
        display: flex;
        flex: 1;
        position: relative;

        .map {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
        }
      }
    }
  }
`;

export const ToggleMapBtnStyle = styled.button`
  background: ${Theme.Color.White};
  border-radius: 4px;
  color: ${Theme.Color.Galaxy};
  position: absolute;
  left: calc(${Root.Size} / 6);
  top: calc(${Root.Size} / 6);
  font-weight: bold;
  height: ${Root.Button.Size};
  display: inline-flex;
  align-items: center;
  padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} / 6);
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: 0;
  border: 0;
  z-index: 800;
  box-shadow: 0px 0px 0px 0px rgba(${Theme.Color.Nightysky}, 0);
  transition: all 0s ease;

  .ico {
    color: ${Theme.Color.Galaxy};
    display: block;
    margin-right: calc(${Root.Size} / 4);
  }

  span {
    &:last-child {
      position: relative;
      top: 2px;
    }
  }

  &:hover {
    box-shadow: 0px 0px 0px 6px rgba(93, 99, 118, 0.2);
  }
`;

//////////////////////////////////////////////////////////////////////
