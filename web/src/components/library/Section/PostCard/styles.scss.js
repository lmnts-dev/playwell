// SimpleSection Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';
import hexToRGB from 'helpers/hexToRGB';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const PostCardStyle = styled.div`
  text-align: left;
  padding: 0 calc(${Theme.Base.Size.Lg} / 8);
  position: relative;

  .gatsby-image-wrapper {
    border-radius: calc(${Theme.Base.Size.Lg} / 8);
    height: 0 !important;
    padding-top: 50%;
  }

  .text {
    display: block;
    width: 100%;
    padding: calc(${Theme.Base.Size.Lg} / 4) calc(${Theme.Base.Size.Lg} / 3)
      calc(${Theme.Base.Size.Lg} / 2) calc(${Theme.Base.Size.Lg} / 3);
    border-bottom-left-radius: calc(${Theme.Base.Size.Lg} / 8);
    border-bottom-right-radius: calc(${Theme.Base.Size.Lg} / 8);
    margin-bottom: calc(${Theme.Base.Size.Lg} * 0.75);
    transition-duration: 0.25s;

    &:hover {
      text-decoration: none !important;
    }

    .h6 {
      font-weight: 700;
      margin-bottom: calc(${Theme.Base.Size.Lg} / 8);
      color: ${Theme.Color.Dino};
    }

    p {
      padding-bottom: 0;
      color: ${Theme.Color.Dino};
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: row;
      margin-bottom: calc(${Theme.Base.Size.Lg} / 4);

      li {
        color: ${Theme.Color.Nova};
        font-size: 0.8rem;
        font-weight: 700;
        margin-right: calc(${Root.Size} / 4);
      }
    }
  }
`;

export default PostCardStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
