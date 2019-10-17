// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const ImageAccordianStyle = styled.div`
  color: ${Theme.Color.White};

  .text {
    background-color: ${Theme.Color.Nova};
    padding: calc(${Root.Size} / 2);
    position: relative;
    border-top-left-radius: calc(${Root.Size} / 8);
    border-top-right-radius: calc(${Root.Size} / 8);
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: calc(${Root.Size} / 3);
    }

    .h5 {
      font-weight: 700;
      line-height: 0.8 !important;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        font-size: 20px;
      }
    }

    p {
      padding-bottom: 0;
      max-height: 0;
      overflow: hidden;
      transition-duration: 0.25s;
    }

    .ico,
    input {
      position: absolute;
      top: 0;
      right: 0;
      height: calc(${Root.Size} / 2);
      width: calc(${Root.Size} / 2);
      margin: calc(${Root.Size} / 3);
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        margin: calc(${Root.Size} / 4);
      }
    }

    .ico {
      pointer-events: none;
      background-color: ${Theme.Color.Nova};
      transition-duration: 0.25s;

      g {
        fill: ${Theme.Color.White};
      }
    }

    input:checked ~ .ico {
      transform: rotate(90deg);
    }

    input:checked ~ p {
      max-height: 1000px;
      padding-top: calc(${Root.Size} / 5);
    }
  }

  .image {
    padding-top: 160%;
    position: relative;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      flex: 100;
      padding-top: 40%;
    }

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default ImageAccordianStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
