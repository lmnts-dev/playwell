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

export const ImageWithTextBlockStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    flex-direction: column-reverse;
  }

  .image,
  .text {
    flex: 1;
  }

  .ico-gear {
    position: absolute;
    height: 140%;
    width: 100%;
    top: -20%;
    right: -50%;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      height: 130%;
      top: -15%;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: calc(${Root.Size} * 3);
      top: auto;
      bottom: calc(${Root.Size} * -1.5);
    }

    svg {
      height: 100%;
      width: auto;
      fill: ${Theme.Color.Nova};
    }
  }

  .image {
    margin-right: calc(${Root.Size} / 4);
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: 50vw;
      max-height: calc(${Root.Size} * 6);
      margin-right: 0;
    }

    .gatsby-image-wrapper {
      height: 100%;
    }
  }

  .text {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding: ${Root.Size} calc(${Root.Size} * 1.5);
      max-width: calc(${Root.Size} * 9);
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        padding: calc(${Root.Size} * 0.5);
      }
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        max-width: none;
      }

      .h4 {
        font-weight: 700;
      }

      p {
        color: ${Theme.Color.Dino};
      }
    }
  }

  ${props =>
    props.reversedOrder
      ? `
        flex-direction: row-reverse;
        .container {
          margin: 0 auto;
        }
        .image {
          margin-right: 0;
          margin-left: calc(${Root.Size} / 4);
          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            margin-left: 0;
          }
        }
    `
      : null};
`;

export const BlockNumber = styled.div`
    color: ${Theme.Color.Blush};
    font-weight: 700;
`

//////////////////////////////////////////////////////////////////////
// End Styles