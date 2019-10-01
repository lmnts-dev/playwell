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

// Begin Styles
//////////////////////////////////////////////////////////////////////

const MarqueeStyle = styled.div`
  padding-top: calc(${Root.Size});
  background: linear-gradient(
    to top,
    ${Theme.Color.Nova} 75%,
    ${Theme.Color.Background} 75%
  );
  .slick-slider {
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
`;

export default MarqueeStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
