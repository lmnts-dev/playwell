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
import Truncate from 'react-truncate';

// Begin Styles
//////////////////////////////////////////////////////////////////////
export const Title = styled(Truncate)`
  color: ${Theme.Color.Sunset};
  font-weight: 700;
  font-size: 1 rem;

  span > span {
    display: block;
    padding-bottom: calc(${Theme.Base.Size.Lg} / 10);
  }
`;

export const TeamMarqueeStyle = styled.div`
  ${props =>
    props.BgLinear
      ? `
    background: linear-gradient( to bottom, ` +
        props.BgLinear +
        ` 25%, ${Theme.Color.Background} 25% );
  `
      : null};

  .slick-slider {
    .item {
      padding: calc(${Root.Size} / 6);
      color: ${Theme.Color.Dino};
      text-align: center;

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding: 1vw;
      }
      .image-container {
        height: 0 !important;
        padding-top: 80%;
        position: relative;
        margin-bottom: calc(${Theme.Base.Size.Lg} / 4);

        img {
          border-radius: calc(${Root.Size} / 8);
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
          object-position: 50% 50%;
        }
      }

      p {
        font-weight: 700;
        padding-bottom: 0;

        &.p-small {
          font-size: 15px;
          color: #918479;
          font-weight: 500;
          padding-bottom: 0;
        }
      }
    }
  }
`;


//////////////////////////////////////////////////////////////////////
// End Styles
