// <SocialStripStyle> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SocialStripStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};

  /* Array-based margins utilizing root variable multiple. */
  ${props =>
    props.Margin
      ? 'margin-top: calc(' + Root.Size + ' * ' + props.Margin[0] + ')'
      : null};
  ${props =>
    props.Margin
      ? 'margin-right: calc(' + Root.Size + ' * ' + props.Margin[1] + ')'
      : null};
  ${props =>
    props.Margin
      ? 'margin-bottom: calc(' + Root.Size + ' * ' + props.Margin[2] + ')'
      : null};
  ${props =>
    props.Margin
      ? 'margin-left: calc(' + Root.Size + ' * ' + props.Margin[3] + ')'
      : null};

  a {
    color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    text-decoration: none;
    margin-right: calc(${Theme.Base.Size.Md} * 0.8);
    position: relative;
    font-size: calc(${Root.Size} / 2);
    width: calc(${Root.Size} / 2);
    height: calc(${Root.Size} / 2);

    span {
      width: 100%;
      height: auto;
      font-size: calc(${Root.Size} / 2);
      i {
        font-size: calc(${Root.Size} / 2);
      }
    }

    i {
      color: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.Black};
    }

    &:before {
      content: '';
      position: absolute;
      background: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.Black};
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1.8);
      transform-origin: center center;
      opacity: 0;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }

    &:hover {
      &:before {
        opacity: 0.1;
      }
    }
  }
`;

SocialStripStyle.Label = styled.span`
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  display: inline-flex;
  width: auto;
  align-items: center;
  svg {
    fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  }
`;

export default SocialStripStyle;
//////////////////////////////////////////////////////////////////////
