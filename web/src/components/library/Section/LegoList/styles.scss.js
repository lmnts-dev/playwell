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
  }

  .item {
    text-align: center;
    margin-right: calc(${Root.Size});
    color: ${Theme.Color.Dino};
    flex: 1;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      margin-right: calc(${Root.Size} / 2);
    }
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
      margin-left: 30%;
      margin-right: 20%;
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        width: 70%;
        margin-left: 20%;
        margin-right: 10%;
      }
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