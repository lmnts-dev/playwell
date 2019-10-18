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

export const SplitTextBoxesStyle = styled.div`
  width: 100%;
  background: linear-gradient(
    to right,
    ${Theme.Color.Eggplant} 50%,
    ${Theme.Color.Sunset} 50%
  );
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    background: linear-gradient(
      to bottom,
      ${Theme.Color.Eggplant} 50%,
      ${Theme.Color.Sunset} 50%
    );
  }

  .basic-inner {
    display: flex;
    flex-direction: row;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: block;
    }

    .container {
      flex: 1;
      padding: calc(${Root.Size} * 2) 0;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding: calc(${Root.Size}) 0;
      }

      &:first-of-type {
        padding-right: calc(${Root.Size} * 2);
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          padding-right: 0;
        }
      }

      &:last-of-type {
        padding-left: calc(${Root.Size} * 2);
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          padding-left: 0;
        }
      }

      .h6,
      .h3 {
        font-weight: 700;
      }

      .h3 {
        padding: calc(${Root.Size} / 8) 0;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
