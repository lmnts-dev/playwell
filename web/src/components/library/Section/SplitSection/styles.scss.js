// SplitSection Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SplitSectionStyle = styled.div`
  width: 100%;
  margin: 0;
`;

SplitSectionStyle.Inner = styled.div`
  display: flex;
  flex-direction: ${props => (props.Flex ? props.Flex : 'row')};
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    flex-wrap: nowrap;
  }

  .h1,
  .h2 {
    font-weight: 600;
    padding-bottom: calc(${Root.Size} / 3.5);
  }

  p {
    font-weight: 500;
  }

  .block {
    justify-content: center;
    align-items: center;

    &:first-child {
      width: 100%;
      /* Change width of each block based on which 
      block is first depending on it's flex property: */

      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        ${props =>
          props.Flex
            ? null
            : `
          padding-left: 95px;
          padding-right: 95px;
        `};
      }

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        ${props =>
          props.Flex
            ? null
            : `
          padding-left: 45px;
          padding-right: 45px;
        `};
      }

      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        ${props =>
          props.Flex
            ? null
            : `
          padding-left: 25px;
          padding-right: 25px;
        `};
      }

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        width: ${props =>
          props.Flex
            ? 'calc(50% + (' + Root.Grid.Gutter.Left + '/ 2))'
            : 'calc(50% - (' + Root.Grid.Gutter.Left + '/ 2))'};

        /* Add left padding to first block if it's a text
        block depending on it's flex property: */
        ${props =>
          props.Flex
            ? null
            : 'padding-left: calc(' +
              Root.Grid.Gutter.Left +
              ' + ' +
              Root.Size +
              ')'}
      }
    }

    &:last-child {
      width: 100%;
      /* Change width of each block based on which 
      block is first depending on it's flex property: */

      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        ${props =>
          !props.Flex
            ? null
            : `
          padding-left: 95px;
          padding-right: 95px;
        `};
      }

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        ${props =>
          !props.Flex
            ? null
            : `
          padding-left: 45px;
          padding-right: 45px;
        `};
      }

      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        ${props =>
          !props.Flex
            ? null
            : `
          padding-left: 25px;
          padding-right: 25px;
        `};
      }

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        width: ${props =>
          props.Flex
            ? 'calc(50% + (' + Root.Grid.Gutter.Left + '/ 2))'
            : 'calc(50% - (' + Root.Grid.Gutter.Left + '/ 2))'};

        /* Add left padding to first block if it's a text
      block depending on it's flex property: */
        ${props =>
          props.Flex
            ? null
            : 'padding-left: calc(' +
              Root.Grid.Gutter.Left +
              ' + ' +
              Root.Size +
              ')'}
      }
    }

    .block-content {
      max-width: calc(${Root.Site.Width} / 3);
      width: 100%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        max-width: none;
      }

      p {
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          max-width: none;
        }
      }
    }

    .block-img-wrap {
      width: 100%;
      padding-bottom: 100%;
      overflow: hidden;
      position: relative;

      .block-img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default SplitSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
