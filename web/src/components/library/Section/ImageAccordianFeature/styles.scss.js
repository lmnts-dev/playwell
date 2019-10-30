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

export const ImageAccordianFeatureStyle = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: calc(${Root.Size} / 3);
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      display: block;
      text-align: center;
    }

    li {
      font-weight: 700;
      padding: calc(${Root.Size} / 6);
      white-space: nowrap;
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        padding: calc(${Root.Size} / 6) 0;
      }

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }

      a {
        color: ${Theme.Color.Clay};
        @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
          font-size: 1rem;
        }

        &:visited {
          color: ${Theme.Color.Clay};
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: block;
    }

    .image-accordian {
      flex: 1;

      &:nth-of-type(2) {
        margin: 0 calc(${Root.Size} / 2);
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          margin: calc(${Root.Size} / 4) 0;
        }
      }
    }
  }

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 20vw;
  }
`;

export default ImageAccordianFeatureStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
