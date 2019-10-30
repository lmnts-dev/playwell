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

export const SimpleTextWithImageStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
  }

  .image,
  .text {
    flex: 1;
  }

  .image {
    padding-left: calc(${Root.Size});
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      max-width: calc(${Root.Size} * 13);
      padding-left: 0;
      margin: 0 auto;
      width: 40%;
      min-width: calc(${Root.Size} * 6);
      padding-top: calc(${Theme.Base.Size.Lg} / 2);
    }
  }

  .text {
    padding-right: calc(${Root.Size});
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-right: 0;
      text-align: center;
    }

    > * {
      max-width: calc(${Root.Size} * 7.5);
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        max-width: calc(${Root.Size} * 13);
        text-align: center;
        margin: 0 auto;
      }
    }
  }

  .h6,
  .h2 {
    font-weight: 700;
  }

  .h2 {
    color: ${Theme.Color.Sunset};
  /*  padding: calc(${Root.Size} / 5) 0; */
  }
`;

export default SimpleTextWithImageStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
