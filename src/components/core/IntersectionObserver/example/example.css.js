// Example IntersectionObserver Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled.div`
  padding: ${Base.Size / 2 + 'px'};
  border-radius: ${Theme.Base.Radius};
  position: relative;
  margin: ${Theme.Base.Type};
  text-align: center;
  color: ${Theme.Color.White};
  transition: background-color 1s ease;
  /* Example usage of IntersectionObserver */
  background-color: ${({ isVisible }) =>
    isVisible ? Theme.Color.Primary : Theme.Color.Secondary};
`;

//////////////////////////////////////////////////////////////////////
// End Styles
