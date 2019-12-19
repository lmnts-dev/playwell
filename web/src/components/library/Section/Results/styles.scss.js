// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { Link } from 'gatsby';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ResultsStyle = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.results-sub-visible {
    .result-action {
      .result-action-icon {
        transform: rotate(45deg);
      }
    }
  }

  .no-results {
    padding: calc(${Root.Size} *  1.5) calc(${Root.Size} / 2)  ${
  Root.Size
  } calc(${Root.Size} / 2);

    width: 100%;
    color: ${hexToRGB(Theme.Color.Ocean, 0.6)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ico {
      margin-bottom: ${Root.Size};
      i {
        font-size: 4rem;
        color: ${Theme.Color.Ocean};
        border-radius: 50%;
        background: ${hexToRGB(Theme.Color.Ocean, 0.18)};
        padding: calc(${Root.Size} / 4);
      }
    }
    .label {
      font-size: 2rem;
    }
  }
`;

export default ResultsStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
