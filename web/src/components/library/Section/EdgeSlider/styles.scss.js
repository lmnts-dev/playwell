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

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const EdgeSliderStyle = styled.div`
  .slick-slider {
    filter: drop-shadow(0px 8px 34px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      filter: drop-shadow(0px 8px 20px ${hexToRGB(Theme.Color.Eggplant, 0.2)});
    }

    .slick-list {
      overflow: visible;
    }

    .item {
      text-align: center;

      .gatsby-image-wrapper {
        display: block !important;
        height: 25vw;
        max-height: calc(${Root.Size} * 7);
        border-radius: calc(${Root.Size} / 8);

        img {
          border-radius: calc(${Root.Size} / 8);
          margin-left: calc(${Root.Size} / 8);
        }
      }
    }
  }
`;

export default EdgeSliderStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
