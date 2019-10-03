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

    .h5 {
      font-weight: 700;
      line-height: .8 !important;
    }

    p {
      padding-bottom: 0;
      max-height: 0;
      overflow: hidden;
      transition-duration: .25s;
    }



    .ico, input {
      position: absolute;
      top: 0;
      right: 0;
      height: calc(${Root.Size} / 2);
      width: calc(${Root.Size} / 2);
      margin: calc(${Root.Size} / 2.5) calc(${Root.Size} / 2.5) 0 0;
    }

    .ico {
      pointer-events: none;
      background-color: ${Theme.Color.Nova};
      transition-duration: .25s;

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

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default ImageAccordianStyle;

//////////////////////////////////////////////////////////////////////
// End Styles