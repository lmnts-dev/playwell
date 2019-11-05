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
  flex-direction: ${props => props.Reversed ? 'row-reverse' : 'row'};
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  .text {
    font-weight: 700;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: ${Root.Size};
    padding-bottom: ${Root.Size}; 
    padding-right: calc(${Root.Size} * ${props => props.Reversed ? '0' : '1'});
    padding-left: calc(${Root.Size} * ${props => props.Reversed ? '2' : '0'});
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding-top: calc(${Root.Size} / 2);
      padding-bottom: calc(${Root.Size} / 2); 
      padding-right: calc(${Root.Size} ${props => props.Reversed ? '* 0' : '/ 2'});
      padding-left: calc(${Root.Size} ${props => props.Reversed ? '* 1' : '0'});

      &.h4 {
        font-size: 1.75rem;
      }
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-top: calc(${Root.Size});
      padding-bottom: calc(${Root.Size});
      padding-right: calc(${Root.Size} ${props => props.Reversed ? '* 0' : '* 1'});
      padding-left: calc(${Root.Size} ${props => props.Reversed ? '* 1' : '* 0'});
      max-width: calc(${Theme.Base.Size.Lg} * 10);
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-right: calc(${Theme.Base.Size.Lg} ${props => props.Reversed ? '* 0' : '/ 2.4'});
      padding-left: calc(${Theme.Base.Size.Lg} ${props => props.Reversed ? '/ 2.4' : '* 0'});
    }
  }

  .images {
    flex: ${props => props.Reversed ? '3.75' : '3'};
    display: flex;
    flex-direction: row;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      flex: 3;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin-${props => props.Reversed ? 'left' : 'right'}: calc(${Theme.Base.Size.Lg} * 0.75);
      height: 50vw;
    }
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      margin-${props => props.Reversed ? 'left' : 'right'}: calc(${Theme.Base.Size.Lg} / 2.4);
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
