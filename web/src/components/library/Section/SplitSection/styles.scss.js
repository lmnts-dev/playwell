// SplitSection Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SplitSectionStyle = styled.div`
  width: 100%;
  margin: 0;
`;

SplitSectionStyle.Inner = styled.div`
  display: flex;
  flex-direction: ${props => (props.Flex ? props.Flex : 'row')};
  justify-content: center;
  position: relative;

  .block {
    justify-content: center;
    align-items: center;

    &:first-child {
      /* Change width of each block based on which 
      block is first depending on it's flex property: */
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
            ')'};
    }

    &:last-child {
      /* Change width of each block based on which 
      block is first depending on it's flex property: */
      width: ${props =>
        props.Flex
          ? 'calc(50% + (' + Root.Grid.Gutter.Left + '/ 2))'
          : 'calc(50% - (' + Root.Grid.Gutter.Left + '/ 2))'};
    }

    .block-content {
      max-width: calc(${Root.Site.Width} / 3);
      width: 100%;
    }

    .block-img-wrap {
      width: 100%;
      padding-bottom: 80%;
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
