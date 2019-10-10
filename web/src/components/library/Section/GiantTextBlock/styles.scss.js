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

export const GiantTextBlockStyle = styled.div`
  text-align: center;
  font-weight: 700;
  margin: 0 auto;
  position: relative;
  max-width: calc(${Root.Size} * 15);
  @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
    max-width: calc(${Root.Size} * 12);
  }
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    max-width: calc(${Root.Size} * 11);
  }

  .h1-alt {
    font-size: 5rem;
  }

  .headline {
    color: ${Theme.Color.Eggplant};
    padding: calc(${Root.Size} / 4) 0;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      font-size: 6rem;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      font-size: 4rem;
    }
  }

  ~ .absolute-image {
    position: absolute;
    top: calc(${Root.Size} * -4.5);
    width: 20%;
    left: calc(${Root.Size} * -1);
    height: auto;
    transform: rotate(260deg);
    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      left: calc(${Root.Size} * 0.5);
    }
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      top: calc(${Root.Size} * -2.5);
    }
  }

  .btn .btn-inner {
    margin-top: calc(${Root.Size} / 3);
  }
`;

export const BlockNumber = styled.div`
  color: ${Theme.Color.Blush};
  font-weight: 700;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
