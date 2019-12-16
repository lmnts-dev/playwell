// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';
import SimpleTextWithImage from 'components/library/Section/SimpleTextWithImage';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const TextWithLgLegosStyle = styled(SimpleTextWithImage)`
  &.overflow-image {
    align-items: stretch;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      flex-direction: column-reverse;
      display: flex;
      padding-right: calc(${Theme.Base.Size.Lg} * 0.75);
    }

    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      padding-right: calc(${Theme.Base.Size.Lg} * 0.4);
    }
    .text {
      flex: 2;
    }
    .image {
      flex: 2;
      position: relative;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 100%;
        max-height: calc(${Theme.Base.Size.Lg} * 5);
        height: 100vw;
        position: static;
        display: none;
      }

      .gatsby-image-wrapper {
        position: absolute !important;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 250%;
        bottom: -75%;
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          width: 100%;
          height: 120%;
          top: -120%;
          bottom: 0;
        }
        img {
          width: 120% !important;
          object-position: 0% 100% !important;
        }
      }
    }
  }
`;
export default TextWithLgLegosStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
