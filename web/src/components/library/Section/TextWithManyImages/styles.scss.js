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
  position: relative;

  .images, .text {
    width: 50%;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      width: 100%;
    }
  }

  .images {
    margin-left: ${props => (props.Reversed ? '0' : '50%')};
    display: flex;
    flex-direction: row;
    max-height: calc(${
      Theme.Base.Grid.SiteWidth
    } * .3333); //this is the height of the large image at site width
    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      align-items: stretch;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin-left: 0;
      max-height: none;
    }

    .column {
      padding-top: 66.66%;
      width: 33.33%;
      position: relative;
      @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
        width: calc(${
          Theme.Base.Grid.SiteWidth
        } * .16666); //this is the width of the small images at site width
        padding-top: calc(${Theme.Base.Grid.SiteWidth} * .3333);
      }

      .gatsby-image-wrapper {
        position: absolute !important;
        top: 0;
        left: 4px;
        width: calc(100% - 4px);
        height: calc(50% - 2px);

        &:last-of-type {
          top: calc(50% + 2px);
        }
      }
    }

    > .gatsby-image-wrapper {
      width: 66.66%;
      padding-top: 66.66%;
      height: 0 !important;
      @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
        width: auto;
        flex: 100;
        padding-top: 0;
        height: auto !important;
      }
    }
  }

  .basic-inner {
    height: 100%;
    position: absolute;
    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      left: calc(50vw - (${Theme.Base.Grid.SiteWidth} / 2));
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      position: relative;
    }

    .text {
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      transform: translateX(${props => (props.Reversed ? '100%' : '0')});
      padding-right: calc(${Root.Size} * ${props =>
         props.Reversed ? '0' : '1'});
      padding-left: calc(${Root.Size} * ${props =>
         props.Reversed ? '1' : '0'});
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        padding-right: calc(${Root.Size} ${props =>
         props.Reversed ? '* 0' : '/ 2'});
        padding-left: calc(${Root.Size} ${props =>
         props.Reversed ? '/ 2' : '* 0'});

        &.h4 {
          font-size: 1.75rem;
        }
      }

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding: calc(${Root.Size} * 2) 0;
        transform: translateX(0);
      }
    }
  }

`;

//////////////////////////////////////////////////////////////////////
// End Styles
