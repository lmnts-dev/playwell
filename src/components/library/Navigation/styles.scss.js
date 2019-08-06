// Large Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container
export const NavigationStyle = styled.nav`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 50;
  display: flex;
  justify-content: center;
`;

NavigationStyle.Inner = styled.div`
  max-width: ${Root.Site.Width};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-wrap: nowrap;
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};
`;

NavigationStyle.Primary = styled.div`
  height: calc(${Root.Nav.Size} * 1.5);
  display: flex;
  align-items: center;
  flex: 1.5;

  /* The Linklist */
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: calc(${Root.Size} / 2);

    /* The links themselves */
    a,
    button {
      height: calc(${Root.Nav.Size} * 1.5);
      text-decoration: none;
      font-weight: 700;
      color: ${Theme.Color.Text};
      display: inline-flex;
      align-items: center;
      padding: 0 calc(${Root.Size} / 4);

      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
      }
    }

    li {
      display: inline-flex;
      align-items: center;
    }

    /* This is the button used to queue linklist overlays. */
    /* The <button> tag is used for accessibility purposes. */
    button {
      outline: none;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;

NavigationStyle.Secondary = styled.div`
  height: calc(${Root.Nav.Size} * 1.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

// The top padding on the <body> tag for fixed navigation.
export const NavigationBodyPadding = createGlobalStyle`
  body {
    /* padding-top: calc(${Root.Nav.Size} * 1.5); */
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
