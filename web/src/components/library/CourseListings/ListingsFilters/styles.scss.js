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

// Filters

export const ListingsFiltersStyle = styled.div`
  position: relative;
  width: 100%;
  height: ${Root.Size};
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  /* border-bottom: 1px solid ${Theme.Color.Gray}; */

  ul {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

ListingsFiltersStyle.Item = styled.button`
  position: relative;
  color: ${Theme.Color.Slate};
  border: 0;
  outline: 0;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  display: flex;
  flex: 1;
  cursor: pointer;
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    padding-left: 0;
    padding-right: 0;
  }

  &:first-child {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      bottom: 10px;
      width: 1px;
      background: ${Theme.Color.Blush};
      @media (max-width: ${Theme.Base.Media.Width.Md}) {
        content: none;
      }
    }

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-left: 0;

      .filter-inner {
        padding-left: calc(${Root.Size} / 3);
      }
    }
  }

  &:last-child {
    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      padding-right: 0;
      .filter-inner {
        padding-right: calc(${Root.Size} / 3);
      }
      &:after {
        content: none;
      }
    }
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background: ${Theme.Color.Blush};
  }

  .ico {
    color: ${Theme.Color.Slate};
    fill: ${Theme.Color.Slate};
    position: relative;
    top: -2px;
    right: -4px;
    transform: rotate(90deg);
    transform-origin: center center;
  }

  &:hover {
    color: ${Theme.Color.Warmsky};
    background-color: ${hexToRGB(Theme.Color.Ocean, 0.06)};

    .list {
      transform: translate(0%, 0%);
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  .filter-inner {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 4px;
    width: 100%;
    text-align: center;
    padding: 0 calc(${Root.Size} / 3);
    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      padding: 0 calc(${Root.Size} / 6);
    }

    span {
      white-space: nowrap;
      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        font-size: 12px;
        svg {
          width: 8px;
          margin-left: 8px;
        }
      }
    }

    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      > div,
      span {
        height: auto;
        width: auto;
      }
    }
  }
`;

ListingsFiltersStyle.FilterList = styled.div`
  position: absolute;
  top: 99%;
  left: 0;
  right: 0;
  transform: translate(0, 20%);
  background: ${Theme.Color.White};
  box-shadow: 0 12px 44px 0 ${hexToRGB(Theme.Color.Galaxy, 0.11)};
  border-radius: 0 0 ${Root.Radius} ${Root.Radius};
  z-index: 20;
  overflow: hidden;
  transition: ${Theme.Base.Transition.String};
  opacity: 0;
  visiblity: hidden;
  pointer-events: none;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      text-align: left;
      height: calc(${Root.Button.Size} * 1.5);
      cursor: pointer;
      padding: 0 calc(${Root.Size} / 3);
      color: ${Theme.Color.Warmsky};

      &:hover {
        background-color: ${hexToRGB(Theme.Color.Ocean, 0.06)};
        color: ${Theme.Color.Ocean};
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
