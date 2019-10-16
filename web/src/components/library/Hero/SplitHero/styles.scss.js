// SplitHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GearContainer = styled.div`
  position: absolute;
  top: calc(${props => props.theme.Root.Size} * -1.5);
  left: calc(${props => props.theme.Root.Size} * -1.5);
  z-index: 0;
`;

export const SplitHeroStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 50vh;
  min-height: calc(${Theme.Base.Size.Lg} * 8);
  max-height: calc(${Theme.Base.Size.Lg} * 18);
  padding-top: calc(${Theme.Base.Size.Lg} * 1.5);
  position: relative;

  .text {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: calc(${Theme.Base.Size.Lg} * 1.5);
    position: relative;
    z-index: 2;
  }
  .arrow, .flex-spacer {
    flex-grow: 20;
  }

  .arrow {
    position: relative;

    &:after {
      content: "\\2023";
      position: absolute;
      bottom: 0;
      left: 0;
      transform: rotate(90deg) translate(5px, -4px);
      color: ${Theme.Color.Nova};
      font-size: 30px;
    }

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 10px;
      content: '';
      background-image: linear-gradient(
        ${Theme.Color.Nova} 40%,
        rgba(255, 255, 255, 0) 0%
      );
      background-position: right;
      background-size: 1px 10px;
      background-repeat: repeat-y;
    }
  }

  .imagery {
    flex: 2;
    margin-right: ${Theme.Base.Size.Lg};

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      border-radius: calc(${Theme.Base.Size.Lg} / 10);
      border-top-left-radius: calc(${Theme.Base.Size.Lg} * 0.75);
    }
  }

  .sub-nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 10%;

    a {
      font-weight: 700;
      color: ${Theme.Color.Nova};
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
