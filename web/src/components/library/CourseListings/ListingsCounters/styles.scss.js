// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// Counters

export const ListingsCountersStyle = styled.div`
  position: relative;
  height: ${Root.Size};
  display: flex;
  align-items: flex-start;
  padding-top: 4px;
  justify-content: space-between;
`;

ListingsCountersStyle.Item = styled.button`
  position: relative;
  border-radius: 999px;
  color: ${props =>
    props.btnTheme.txtColor ? props.btnTheme.txtColor : Theme.Color.Warmsky};
  flex: 1;
  /* max-width: calc(${Root.Size} * 4); */
  height: calc(${Root.Button.Size} * 1.2);
  border: 0;
  outline: 0;
  font-weight: bold;
  text-align: center;
  display: flex;
  cursor: pointer;
  margin-right: calc(${Root.Size} / 4);
  background-color: ${props =>
    props.btnTheme.bgColor ? props.btnTheme.bgColor : Theme.Color.Blush};

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(93, 99, 118, 0.2);
  }

  &:last-child {
    margin-right: 0;
  }

  .counter-inner {
    position: relative;
    top: 4px;
    width: 100%;
    text-align: center;
  }
`;

//////////////////////////////////////////////////////////////////////
