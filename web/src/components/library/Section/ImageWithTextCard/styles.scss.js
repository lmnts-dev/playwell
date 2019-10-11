// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ImageWithTextCardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(${Root.Size} * 1.25);
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  > .ico {
    position: absolute;
    bottom: calc(${Root.Size} * -1.25);
    right: calc(${Root.Size} * -1.5);
    z-index: 1;
    height: calc(${Root.Size} * 5.5);
    width: calc(${Root.Size} * 5.5);
    @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
      height: 20vw;
      width: 20vw;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: calc(${Root.Size} * 4);
      width: calc(${Root.Size} * 4);
    }

    svg {
      height: 100%;
      width: 100%;
      fill: ${Theme.Color.Lilac};
    }
  }

  .image,
  .text {
    position: relative;
    z-index: 2;
  }

  .text {
    padding: calc(${Root.Size});
    background-color: ${Theme.Color.White};
    border-bottom-right-radius: calc(${Root.Size});
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding: calc(${Root.Size} / 1.5);
    }

    .h2,
    .h6 {
      font-weight: 700;
    }

    .h2 {
      padding: calc(${Root.Size} / 6) 0;
    }
  }

  .image {
    flex: 5;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: 40vw;
      min-height: calc(${Root.Size} * 4);
    }
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
