// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TextOverImageStyle = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: calc(${Root.Size} * 2) 0 calc(${Root.Size} * 1.5) 0;

  .h3 {
    font-weight: 700;
    max-width: calc(${Root.Size} * 10);
    margin: 0 auto;
    padding-bottom: calc(${Root.Size} / 4);
  }

  > div {
    z-index: 2;
    position: relative;
  }

  .background-image {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    height: 100%;
    width: 100%;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${Theme.Color.Eggplant};
      opacity: 0.3;
      z-index: 2;
    }

    .gatsby-image-wrapper {
      height: 100%;
      z-index: 1;
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
