// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TextWithManyImagesStyle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  .text {
    font-weight: 700;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${Root.Size} ${Root.Size} ${Root.Size} 0;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding: calc(${Root.Size} / 2) calc(${Root.Size} / 2)
        calc(${Root.Size} / 2) 0;
      &.h4 {
        font-size: 1.75rem;
      }
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: calc(${Root.Size}) calc(${Root.Size}) calc(${Root.Size}) 0;
      max-width: calc(${Theme.Base.Size.Lg} * 10);
    }
  }

  .images {
    flex: 3;
    display: flex;
    flex-direction: row;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin-right: calc(${Theme.Base.Size.Lg} * .75);
      height: 50vw;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin-right: calc(${Theme.Base.Size.Lg} / 2);
    }

    > .gatsby-image-wrapper {
      display: inline-block;
      padding-top: 66.66%;
      width: 66.66%;
      height: 100%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-top: 0;
      }

      > div {
        position: absolute;
        padding-bottom: 0 !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .column {
      width: 33.33%;
      padding-top: 66.66%;
      margin-left: 4px;
      height: 100%;
      position: relative;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-top: 0;
      }

      .gatsby-image-wrapper {
        width: 100%;
        position: absolute !important;
        top: 0;
        left: 0;
        height: calc(50% - 2px);

        &:first-of-type {
          margin-bottom: 4px;
        }

        &:last-of-type {
          margin-top: 4px;
          top: calc(50% - 2px);
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
