// SimpleSection Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';
import hexToRGB from 'helpers/hexToRGB';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const MarqueeStyle = styled.div`
  ${props =>
    props.BgLinear
      ? `
    background: linear-gradient( to top, ` +
        props.BgLinear +
        ` 75%, ${Theme.Color.Background} 75% );
  `
      : null};

  .slick-slider {
    ${props =>
      props.Shadow
        ? `
      filter: drop-shadow(0px 8px 34px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        filter: drop-shadow(0px 8px 20px ${hexToRGB(
          Theme.Color.Eggplant,
          0.2
        )});
      }
    `
        : null};

    .item {
      padding: calc(${Root.Size} / 6);
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding: 1vw;
      }

      .gatsby-image-wrapper {
        border-radius: calc(${Root.Size} / 8);
        height: 0 !important;
        ${props =>
          props.SquareFormat
            ? `
          background-color: ${Theme.Color.White};         
          padding-top: 100%;
        `
            : `
          padding-top: 140%;
        `};

        img {
          ${props =>
            props.SquareFormat
              ? `
            position: relative;
            width: 80% !important;
            object-fit: contain !important;
            height: 80% !important;
            left: 10% !important;
            top: 10% !important;
          `
              : `
            border-radius: calc(${Root.Size} / 8);
          `};
        }
      }
    }
  }
`;

export default MarqueeStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
