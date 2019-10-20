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

export const EdgeImageWithTextStyle = styled.div`
  display: flex;
  flex-direction: ${p => (p.Reverse ? 'row-reverse' : 'row')};
  align-items: center;
  position: relative;
  
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  .ico-swoop {
    position: absolute;
    height: calc(100% + calc(${Root.Size} * 2));
    ${p =>
      p.Reverse
        ? `left: calc(calc(50vw - calc(${Theme.Base.Grid.SiteWidth} / 2)) * -1);`
        : `right: calc(calc(50vw - calc(${Theme.Base.Grid.SiteWidth} / 2)) * -1);`}
    top: calc(${Root.Size} * -1);
    width: calc(50vw - calc(${Theme.Base.Grid.SiteWidth} / 4));
    ${p => p.Reverse && 'transform: rotate(180deg) translateX(0);'}
    svg {
      height: 100%;
      width: 100%;
      path {
        fill: ${Theme.Color.Galaxy};
      }
    }

    @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
      height: calc(100% + calc(${Root.Size}));
      top: calc(${Root.Size} * -0.5);
      width: auto;
      ${p => (p.Reverse ? `left: -3px;` : `right: 0;`)}
      svg {
        width: auto;
      }
    }

    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      height: 80%;
      top: 10%;
    }

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: none;
    }
  }

  .text,
  .image {
    flex: 1;
  }

  .text {
    max-width: calc(${Root.Size} * 7);
    ${p =>
      p.Reverse
        ? `margin-left: calc(${Root.Size});`
        : `margin-right: calc(${Root.Size});`}
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      max-width: calc(${Root.Size} * 13);
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      ${p =>
        p.Reverse
          ? `margin-left: calc(${Root.Size} / 2);`
          : `margin-right: calc(${Root.Size} / 2);`}
    }

    .h2,
    .h6 {
      font-weight: 700;
    }

    .h2 {
      color: ${p => p.CaptionColor};
      padding: calc(${Root.Size} / 6) 0;
    }
  }

  .image {
    height: calc(${Root.Size} * 9);
    ${p =>
      p.Reverse
        ? `margin-right: calc(${Root.Size} * 2);`
        : `margin-right: calc(${Root.Size} / 2);`}
    flex-shrink: 20;
    position: relative;

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .ico-swoop {
      display: none;
      ${p => (p.Reverse ? `left: -3px;` : `right: 0;`)}
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        display: block;
        width: 50vw;
        height: 100%;
        z-index: 1;
        svg {
          width: 100%;
        }
      }
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        width: auto;
        ${p => (p.Reverse ? `left: -3px;` : `left: 50%;`)}
        ${p => (p.Reverse ? null : `right: -25%;`)}
      }
    }

    .gatsby-image-wrapper {
      height: 100%;
      z-index: 2;
      position: relative;

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 50vw;
        min-width: calc(${Theme.Base.Size.Lg} * 5);
      }
      > div {
        height: 100%;
        width: auto !important;
        padding-bottom: 0 !important;
      }
    }
  }
`;

export default EdgeImageWithTextStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
