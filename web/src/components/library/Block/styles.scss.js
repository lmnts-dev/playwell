// <Block> Styles:
// This is the primary column component.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
export const BlockStyle = styled.div`
  display: flex;
  flex-direction: ${props => (props.Flex ? props.flex : 'column')};
  position: relative;
  flex-shrink: 1;
  ${props => (props.BgColor ? 'background: ' + props.BgColor + ';' : null)}
  ${props => (props.TextColor ? 'color: ' + props.TextColor + ';' : null)}
  
  /* Item Alignment. We are aligning items */
  /* 'stretch' by default. */
  ${props =>
    props.AlignItems ? 'align-items: ' + props.AlignItems + ';' : null}

  /* Centered Style */
  ${props =>
    props.Style == 'centered' &&
    css`
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        text-align: center;
        width: 100%;
      }

      .btn {
        margin: 0 auto;
      }

      .block-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    `}

  /* The block content. */
  .block-content {
    z-index: 2;
    margin: 0 auto;
    width: 100%;
    ${props => (props.JustifyContent ? 'display:flex' : null)};
    ${props =>
      props.JustifyContent
        ? 'justify-content: ' + props.JustifyContent + ';'
        : null}

    p {
      max-width: 80%;
    }
  }

  /* Background images with Gatsby-Img */
  .block-img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    ${props => (props.BgTint ? 'opacity: ' + props.BgTint + ';' : null)}

    .img {
      flex: 1;
    }
  }

  /* Width Multiple */
    ${props =>
      props.Width ? 'width: ' + props.Width * 100 + '%;' : 'flex: 1;'}
  max-width: ${props =>
    props.maxWidth
      ? 'calc(' + Theme.Base.Grid.SiteWidth + ' * ' + props.maxWidth + ')'
      : Theme.Base.Grid.SiteWidth};

  /* Array-based Padding utilizing Css Variable Multiples. */
  ${props =>
    props.Padding
      ? 'padding-top: calc(' + Root.Size + ' * ' + props.Padding[0] + ')'
      : null};
  ${props =>
    props.Padding
      ? 'padding-right: calc(' + Root.Size + ' * ' + props.Padding[1] + ')'
      : null};
  ${props =>
    props.Padding
      ? 'padding-bottom: calc(' + Root.Size + ' * ' + props.Padding[2] + ')'
      : null};
  ${props =>
    props.Padding
      ? 'padding-left: calc(' + Root.Size + ' * ' + props.Padding[3] + ')'
      : null};
`;

export default BlockStyle;
//////////////////////////////////////////////////////////////////////
