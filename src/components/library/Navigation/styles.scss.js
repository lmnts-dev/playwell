// Large Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

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
  position: relative;

  &:before {
    content: '';
    background: ${hexToRGB(Theme.Color.White, 1)};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(${Root.Nav.Size} * 1.5);
    z-index: -1;
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.12);
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.25s ease;
  }

  &.scroll {
    &:before {
      box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.12);
      opacity: 1;
      transform: translateY(0%);
    }
  }
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

  .btn {
    margin-left: calc(${Root.Size} / 4);
  }
`;

// The top padding on the <body> tag for fixed navigation.
export const NavigationBodyPadding = createGlobalStyle`
  body {
    padding-top: calc(${Root.Nav.Size} * 1.5);
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
