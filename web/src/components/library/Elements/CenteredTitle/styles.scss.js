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
const CenteredTitleStyle = styled.div`
  text-align: center;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Blush)};
  font-weight: 700;
  max-width: ${props => (props.MaxWidth ? props.MaxWidth : '100%')};
  margin: 0 auto;

  > div {
    position: relative;
  }

  .absolute-image {
    position: absolute;
    bottom: calc(${Root.Size} * -4);
    width: 20%;
    left: calc(${Root.Size} * -1);
    height: auto;
    transform: scaleX(-1);

    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      left: calc(${Root.Size} * -0.5);
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      bottom: 0;
    }

    .ico-swoop {
      width: 100%;
      display: block;

      svg {
        transform: rotate(180deg) scaleX(-1)
          translateY(calc(${Root.Size} * 1.5));
        @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
          transform: rotate(-90deg) scaleX(-1)
            translateX(calc(${Root.Size} * 2));
        }
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          transform: translate(calc(${Root.Size} / -2), calc(${Root.Size}));
        }

        path {
          fill: ${Theme.Color.Dino};
        }
      }
    }
  }
`;

export default CenteredTitleStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
