// Button Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const BtnStyle = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const BtnStyleExternal = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const BtnStylePseudo = styled.span`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

BtnStyle.Inner = styled.span`
  background-color: ${props =>
    props.BgColor ? props.BgColor : 'rgba(0,0,0,0)'};
  height: ${Root.Button.Size};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: ${p =>
    p.Size == 'large'
      ? `calc(${Root.Size} / 2.6) calc(${Root.Size} / 1.4)`
      : `0 calc(${Theme.Base.Size.Sm} * .8)`};
  ${props =>
    props.IconPosition == 'left'
      ? 'padding-left: calc(' + Theme.Base.Size.Sm + '*1.2);'
      : false}
  ${props =>
    props.IconPosition == 'right'
      ? 'padding-right: calc(' + Theme.Base.Size.Sm + '*1.2);'
      : false}
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  margin: 0;
  box-shadow: 0px 0px 0px 0px rgba(${Theme.Color.Nightysky}, 0);
  transition: all 0s ease;
  line-height: 0;
  border: ${props => (props.BorderWidth ? props.BorderWidth : '0px')}
    ${props => (props.BorderStyle ? props.BorderStyle : '')}
    ${props => (props.BorderColor ? props.BorderColor : '')};
  outline: 0;
  position: relative;
  text-transform: capitalize;
  ${props =>
    props.BgColor ? 'box-shadow: 0px 0px 0px 6px rgba(93,99,118, 0.00)' : null};

  &:hover {
    text-decoration: none;
    background-color: ${props =>
      props.BgColor ? props.BgColor : 'rgba(0,0,0,.05)'};
    ${props =>
      props.BgColor
        ? 'box-shadow: 0px 0px 0px 6px rgba(93,99,118, 0.2)'
        : null};
  }

  .ico {
    margin-left: 5px;
    line-height: 0;
    flex: 1;
    height: calc(${Root.Size} / 4);
    width: calc(${Root.Size} / 4);
    display: flex;
    position: absolute;
    top: 48%;
    transform: translateY(-50%);
    ${props =>
      props.IconPosition == 'left'
        ? 'left: calc(' + Theme.Base.Size.Md + '/ 2);'
        : null}
    ${props =>
      props.IconPosition == 'right'
        ? 'right: calc(' + Theme.Base.Size.Md + '/ 2);'
        : null}

    i {
      color: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.Black};
      font-size: 1rem;
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
      border: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.Black};
      pointer-events: none;

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        transform: scale(0.5);
        transform-origin: center center;
      }
    }
  }

  span {
    position: relative;
    bottom: -2px;
  }
`;

export default BtnStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
