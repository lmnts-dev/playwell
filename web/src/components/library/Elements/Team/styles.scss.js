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
const TeamStyle = styled.div`
  .team-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      justify-content: center;
      padding-top: calc(${Root.Size} / 2);
    }

    .member {
      text-align: center;
      margin-bottom: calc(${Root.Size} / 2);
      p {
        font-weight: 700;
        color: ${Theme.Color.Dino};
        padding-bottom: 0;
        line-height: 1;

        &:last-of-type {
          color: ${Theme.Color.Sunset};
        }
      }

      .gatsby-image-wrapper {
        border-radius: calc(${Root.Size} / 8);
        margin: 0 calc(${Root.Size} / 12) calc(${Root.Size} / 6)
          calc(${Root.Size} / 12);
        width: calc(${Root.Size} * 2.25);
        height: calc(${Root.Size} * 3);
      }

      .social {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: calc(${Root.Size} / 8);

        a {
          background-color: grey; //TODO
          border-radius: 50%;
          display: block;
          height: calc(${Root.Size} / 2);
          width: calc(${Root.Size} / 2);

          svg {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
`;

export default TeamStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
