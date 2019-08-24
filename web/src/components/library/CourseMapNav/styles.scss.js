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

// Begin Styles
//////////////////////////////////////////////////////////////////////

let footerHeight = '80vh';

export const CourseMapNavStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => (props.mapZedIndex ? props.mapZedIndex : 4)};
  display: flex;
  flex-direction: column;

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
      flex-diirection: column;
      padding-top: calc(
        ${props => props.theme.Root.Nav.Size} +
          ${props => props.theme.Root.Size} * 1
      );
      width: ${props => (props.mapWidth ? props.mapWidth : '350px')};

      .map-container {
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 12px 44px 0 ${hexToRGB(Theme.Color.Galaxy, 0.11)};
        background: ${Theme.Color.Sky};
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        height: ${props =>
          props.mapWidth ? 'calc(' + props.mapWidth + '* 1.2)' : '350px'};
        width: 100%;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
