// Large Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframe
import { FadeIn, SlideUp } from 'components/core/Transition/Keyframes';

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
  transform: translateY(0%);
  transition: transform 0.5s ease;

  &.hidden {
    transform: translateY(-100%);
  }
`;

NavigationStyle.Inner = styled.div`
  max-width: ${Root.Site.Width};
  width: 100%;
  margin: 0 auto;
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-wrap: nowrap;

  &:before {
    content: '';
    background: ${hexToRGB(Theme.Color.White, 1)};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: calc(${Root.Nav.Size} * 1);
    z-index: -1;
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.12);
    opacity: 0;
    transform: translateY(-100%);
    transition: ${Theme.Base.Transition.String};
  }

  &.scroll {
    &:before {
      box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.12);
      opacity: 1;
      transform: translateY(0%);
    }

    .nav-primary {
      height: calc(${Root.Nav.Size} * 1);

      li {
        a,
        button {
          height: calc(${Root.Nav.Size} * 1);
        }
      }
    }

    .nav-secondary {
      height: calc(${Root.Nav.Size} * 1);
    }

    .brandmark {
      transform: scale(0.6);
    }
  }
`;

NavigationStyle.Primary = styled.div`
  height: calc(${Root.Nav.Size} * 1.5);
  transition: ${Theme.Base.Transition.String};
  display: flex;
  align-items: center;
  flex: 1.5;

  /* The Branding */
  .brandmark {
    transform: scale(1);
    transform-origin: center center;
    transition: ${Theme.Base.Transition.String};
  }

  /* The Linklist */
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: calc(${Root.Size} / 2);

    /* The links themselves */
    li {
      display: inline-flex;
      align-items: center;
      a,
      button {
        height: calc(${Root.Nav.Size} * 1.5);
        transition: ${Theme.Base.Transition.String};
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
  transition: ${Theme.Base.Transition.String};
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
    /* padding-top: calc(${Root.Nav.Size} * 1.5); */
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
