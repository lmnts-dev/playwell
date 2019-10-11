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
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////
const LegoListStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
    max-width: calc(${Root.Size} * 7);
    margin: 0 auto;
  }

  .item {
    text-align: center;
    margin-right: 5%;
    flex: 1;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin-right: 0;
      margin-bottom: calc(${Root.Size} / 2);
    }

    &:last-of-type {
      margin-right: 0 !important;
      margin-bottom: 0 !important;
    }

    span.ico {
      width: 50%;
      height: auto;
      display: block;
      margin: 0 auto;
      padding-left: 10%;
      max-width: calc(${Root.Size} * 3);
      svg {
        width: 100% !important;
        height: auto !important
      }
    }

    .gatsby-image-wrapper {
      width: 80%;
      margin: 0 auto;
      margin-bottom: calc(${Root.Size} / 3);
    }

    .h6 {
      font-weight: bold;
      padding: calc(${Root.Size} / 4) 0;
    }
  }
`;

export default LegoListStyles;

//////////////////////////////////////////////////////////////////////
// End Styles
