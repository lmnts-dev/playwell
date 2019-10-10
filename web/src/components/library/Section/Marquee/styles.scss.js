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
  ${props => props.BgLinear ? `
    background: linear-gradient( to top, ` + props.BgLinear + ` 75%, ${Theme.Color.Background} 75% );
  `
  : null};

  .slick-slider {
    ${props => props.Shadow ? `
      filter: drop-shadow(0px 8px 34px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        filter: drop-shadow(0px 8px 20px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
      }
    `
    : null};

    .item {
      ${props => props.SquareFormat ? `
        height: 16.66vw;
        max-height: calc(${Root.Size} * 4);
      `
      : null};
      .gatsby-image-wrapper {
        border-radius: calc(${Root.Size} / 8);
        ${props => props.SquareFormat ? `
          background-color: ${Theme.Color.White};
          margin: calc(${Root.Size} / 10);
          height: 100%;
        ` : `
          height: 25vw;
          max-height: calc(${Root.Size} * 7);
        `};
        

        img {
          ${props => props.SquareFormat ? `
            position: relative;
            width: 80% !important;
            height: 80% !important;
            left: 10% !important;
            top: 10% !important;
          ` : `
            border-radius: ${Theme.Base.Geometry.Radius};
            margin-left: calc(${Root.Size} / 8);
          `};
        }
      }
    }
  }
`;

export default MarqueeStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
