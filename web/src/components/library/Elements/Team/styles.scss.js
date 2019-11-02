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
    justify-content: ${props => (props.Justify ? props.Justify : 'flex-start')};
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      justify-content: center;
      padding-top: calc(${Root.Size} / 2);
    }

    .member {
      text-align: center;
      margin-bottom: calc(${Root.Size} / 2);
      padding-right: calc(${Root.Size} / 8);
      width: 16.66%;
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        width: 20%;
      }

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 25%;
      }

      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        width: 33.33%;
      }

      p {
        font-weight: 700;
        color: ${Theme.Color.Dino};
        padding-bottom: 0;
        line-height: 1;

        &:last-of-type {
          color: ${Theme.Color.Sunset};
        }
      }

      .image-container {
        margin: 0 calc(${Root.Size} / 12) calc(${Root.Size} / 6)
          calc(${Root.Size} / 12);
        width: 100%;
        height: 0;
        padding-top: 140%;
        position: relative;

        img {
          position: absolute;
          border-radius: calc(${Root.Size} / 8);
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-position: 50% 50%;
          object-fit: cover;
        }
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
