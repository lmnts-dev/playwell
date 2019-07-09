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
  background: pink;
  color: black;
  z-index: 50;
  display: flex;
  justify-content: center;
`;

NavigationStyle.Inner = styled.div`
  max-width: ${Root.Site.Width};
  width: 100%;
  margin: 0 auto;
  background: green;
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
  background: blue;
`;

NavigationStyle.Secondary = styled.div`
  height: calc(${Root.Nav.Size} * 1.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  background: red;
`;

// The top padding on the <body> tag for fixed navigation.
export const NavigationBodyPadding = createGlobalStyle`
  body {
    padding-top: calc(${Root.Nav.Size} * 1.5);
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
