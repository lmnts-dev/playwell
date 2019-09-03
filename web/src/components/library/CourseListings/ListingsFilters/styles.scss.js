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
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Theme.Color.Gray};

  ul {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

ListingsFiltersStyle.Item = styled.button`
  position: relative;
  border-radius: 999px;
  color: ${Theme.Color.Slate};
  /* max-width: calc(${Root.Size} * 4); */
  height: calc(${Root.Button.Size} * 1.2);
  border: 0;
  outline: 0;
  font-weight: bold;
  text-align: center;
  display: flex;
  margin-right: calc(${Root.Size} / 4);
  cursor: pointer;

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
    background-color: ${Theme.Color.Blush};

    .list {
      transform: translate(-50%, 0%);
      opacity: 1;
      visiblity: visible;
      pointer-events: all;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  .filter-inner {
    display: flex;
    align-items: center;
    position: relative;
    top: 4px;
    width: 100%;
    text-align: center;
    padding: 0 calc(${Root.Size} / 3);
  }
`;

ListingsFiltersStyle.FilterList = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 20%);
  background: ${Theme.Color.White};
  box-shadow: 0 12px 44px 0 ${hexToRGB(Theme.Color.Galaxy, 0.11)};
  border-radius: ${Root.Radius};
  z-index: 20;
  overflow: hidden;
  transition: ${Theme.Base.Transition.String};
  opacity: 0;
  visiblity: hidden;
  pointer-events: none;

  ul {
    display: flex;
    flex-direction: column;
    width: calc(${Root.Size} * 4);

    li {
      display: flex;
      align-items: center;
      text-align: left;
      height: calc(${Root.Button.Size} * 1.5);
      cursor: pointer;
      padding: 0 calc(${Root.Size} / 3);
      color: ${Theme.Color.Warmsky};

      &:hover {
        background-color: ${Theme.Color.Primary};
        color: ${Theme.Color.White};
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
